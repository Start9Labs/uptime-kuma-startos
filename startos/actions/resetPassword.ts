import { utils } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { i18n } from '../i18n'

export const resetPassword = sdk.Action.withoutInput(
  'reset-password',

  async ({ effects }) => ({
    name: i18n('Reset Password'),
    description: i18n('Reset your Uptime Kuma admin password'),
    warning: i18n(
      'Replaces the admin password. The current password stops working and the new one is shown only once.',
    ),
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const password = utils.getDefaultString({
      charset: 'a-z,A-Z,1-9',
      len: 22,
    })

    const { stdout, stderr } = await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'main' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/app/data',
        readonly: false,
      }),
      'reset-password',
      (sub) =>
        sub.execFail(
          ['node', 'extra/reset-password.js', `--new-password=${password}`],
          { cwd: '/app' },
        ),
    )

    // Upstream's script catches its own errors and exits 0.
    if (!stdout.toString().includes('Password reset successfully.')) {
      throw new Error(
        `${i18n('The password was not reset. Output of the reset script:')}\n\n${`${stdout.toString()}\n${stderr.toString()}`.replace(/\x1b\[[0-9;]*m/g, '').trim()}`,
      )
    }

    return {
      version: '1',
      title: i18n('Password Reset'),
      message: i18n(
        'Your password has been reset. Use the new password below to log in.',
      ),
      result: {
        type: 'single' as const,
        value: password,
        masked: true,
        copyable: true,
        qr: false,
      },
    }
  },
)
