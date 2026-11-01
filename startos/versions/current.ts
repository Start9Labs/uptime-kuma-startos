import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.5.9:0',
  releaseNotes: {
    en_US:
      'Updated Uptime Kuma to 2.5.9. Fixes RSS cache poisoning, timeout fallback units, push monitor retries, duplicate status-page refresh timers, and recurring maintenance timezone display. Includes dependency security updates. Full release notes: https://github.com/louislam/uptime-kuma/releases/tag/2.5.9',
    es_ES:
      'Uptime Kuma actualizado a 2.5.9. Corrige el envenenamiento de la caché RSS, las unidades del tiempo de espera predeterminado, los reintentos de los monitores push, los temporizadores de actualización duplicados en las páginas de estado y la visualización de la zona horaria del mantenimiento recurrente. Incluye actualizaciones de seguridad de dependencias. Notas de la versión completas: https://github.com/louislam/uptime-kuma/releases/tag/2.5.9',
    de_DE:
      'Uptime Kuma auf 2.5.9 aktualisiert. Behebt RSS-Cache-Poisoning, falsche Einheiten beim Zeitüberschreitungs-Ersatzwert, Wiederholungsversuche von Push-Monitoren, doppelte Aktualisierungstimer auf Statusseiten und die Zeitzonenanzeige wiederkehrender Wartungen. Enthält Sicherheitsupdates für Abhängigkeiten. Vollständige Versionshinweise: https://github.com/louislam/uptime-kuma/releases/tag/2.5.9',
    pl_PL:
      'Zaktualizowano Uptime Kuma do 2.5.9. Naprawia zatruwanie pamięci podręcznej RSS, jednostki domyślnego limitu czasu, ponowne próby monitorów push, zduplikowane liczniki odświeżania stron statusu oraz wyświetlanie strefy czasowej cyklicznych prac konserwacyjnych. Zawiera aktualizacje zabezpieczeń zależności. Pełne informacje o wydaniu: https://github.com/louislam/uptime-kuma/releases/tag/2.5.9',
    fr_FR:
      'Uptime Kuma mis à jour vers 2.5.9. Corrige l’empoisonnement du cache RSS, les unités du délai d’attente de repli, les tentatives des moniteurs push, les temporisateurs d’actualisation en double sur les pages de statut et l’affichage du fuseau horaire des maintenances récurrentes. Inclut des mises à jour de sécurité des dépendances. Notes de version complètes : https://github.com/louislam/uptime-kuma/releases/tag/2.5.9',
  },
  migrations: {},
})
