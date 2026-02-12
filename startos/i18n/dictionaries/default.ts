export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'The web interface is ready': 1,
  'The web interface is unreachable': 2,
  'Database Migration': 3,
  'Database migration complete': 4,
  'Database migration in progress. This may take a long time. Do NOT restart.': 5,

  // actions/resetPassword.ts
  'Reset Password': 10,
  'Reset your Uptime Kuma admin password': 11,
  'Password Reset': 12,
  'Your password has been reset. Use the new password below to log in.': 13,

  // interfaces.ts
  'Web UI': 100,
  'Web Interface': 101,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
