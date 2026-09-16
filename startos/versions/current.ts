import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.5.5:0',
  releaseNotes: {
    en_US:
      'Updated Uptime Kuma to 2.5.5. Fixes a memory leak in TCP monitors by ensuring monitor sockets are fully closed. Full release notes: https://github.com/louislam/uptime-kuma/releases/tag/2.5.5',
    es_ES:
      'Uptime Kuma actualizado a 2.5.5. Corrige una fuga de memoria en los monitores TCP al garantizar que los sockets del monitor se cierren por completo. Notas de la versión completas: https://github.com/louislam/uptime-kuma/releases/tag/2.5.5',
    de_DE:
      'Uptime Kuma auf 2.5.5 aktualisiert. Behebt ein Speicherleck in TCP-Monitoren, indem Monitorsockets vollständig geschlossen werden. Vollständige Versionshinweise: https://github.com/louislam/uptime-kuma/releases/tag/2.5.5',
    pl_PL:
      'Zaktualizowano Uptime Kuma do 2.5.5. Naprawia wyciek pamięci w monitorach TCP, zapewniając pełne zamknięcie gniazd monitora. Pełne informacje o wydaniu: https://github.com/louislam/uptime-kuma/releases/tag/2.5.5',
    fr_FR:
      'Uptime Kuma mis à jour vers 2.5.5. Corrige une fuite de mémoire dans les moniteurs TCP en garantissant la fermeture complète des sockets de surveillance. Notes de version complètes : https://github.com/louislam/uptime-kuma/releases/tag/2.5.5',
  },
  migrations: {},
})
