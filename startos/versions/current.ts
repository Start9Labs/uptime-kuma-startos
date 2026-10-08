import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.5.5:1',
  releaseNotes: {
    en_US: `Updated Uptime Kuma to 2.5.5. Fixes a memory leak in TCP monitors by ensuring monitor sockets are fully closed. Full release notes: https://github.com/louislam/uptime-kuma/releases/tag/2.5.5

- Reset Password sets the admin account's password to the one it shows, reports an error instead of a password when the reset fails, and asks for confirmation before running.`,
    es_ES: `Uptime Kuma actualizado a 2.5.5. Corrige una fuga de memoria en los monitores TCP al garantizar que los sockets del monitor se cierren por completo. Notas de la versión completas: https://github.com/louislam/uptime-kuma/releases/tag/2.5.5

- Restablecer contraseña establece como contraseña de la cuenta de administrador la que muestra, informa de un error en lugar de una contraseña cuando el restablecimiento falla, y pide confirmación antes de ejecutarse.`,
    de_DE: `Uptime Kuma auf 2.5.5 aktualisiert. Behebt ein Speicherleck in TCP-Monitoren, indem Monitorsockets vollständig geschlossen werden. Vollständige Versionshinweise: https://github.com/louislam/uptime-kuma/releases/tag/2.5.5

- „Passwort zurücksetzen“ setzt das Passwort des Admin-Kontos auf das angezeigte, meldet einen Fehler statt eines Passworts, wenn das Zurücksetzen fehlschlägt, und fragt vor der Ausführung nach einer Bestätigung.`,
    pl_PL: `Zaktualizowano Uptime Kuma do 2.5.5. Naprawia wyciek pamięci w monitorach TCP, zapewniając pełne zamknięcie gniazd monitora. Pełne informacje o wydaniu: https://github.com/louislam/uptime-kuma/releases/tag/2.5.5

- „Resetuj hasło” ustawia hasło konta administratora na wyświetlone, zgłasza błąd zamiast hasła, gdy resetowanie się nie powiedzie, i prosi o potwierdzenie przed uruchomieniem.`,
    fr_FR: `Uptime Kuma mis à jour vers 2.5.5. Corrige une fuite de mémoire dans les moniteurs TCP en garantissant la fermeture complète des sockets de surveillance. Notes de version complètes : https://github.com/louislam/uptime-kuma/releases/tag/2.5.5

- Réinitialiser le mot de passe définit le mot de passe du compte administrateur sur celui qu'elle affiche, signale une erreur au lieu d'un mot de passe lorsque la réinitialisation échoue, et demande une confirmation avant de s'exécuter.`,
  },
  migrations: {},
})
