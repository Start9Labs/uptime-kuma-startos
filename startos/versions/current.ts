import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.5.7:0',
  releaseNotes: {
    en_US:
      'Updated Uptime Kuma to 2.5.7. Fixes ignored retries in TCP monitors using SSL/STARTTLS. The upstream image now includes the eMudhra CA security fixes, replacing the temporary packaging layer. Full release notes: https://github.com/louislam/uptime-kuma/releases/tag/2.5.7',
    es_ES:
      'Uptime Kuma actualizado a 2.5.7. Corrige los reintentos ignorados en los monitores TCP con SSL/STARTTLS. La imagen de origen incluye ahora las correcciones de seguridad de las CA de eMudhra, sustituyendo la capa temporal del paquete. Notas de la versión completas: https://github.com/louislam/uptime-kuma/releases/tag/2.5.7',
    de_DE:
      'Uptime Kuma auf 2.5.7 aktualisiert. Behebt ignorierte Wiederholungsversuche in TCP-Monitoren mit SSL/STARTTLS. Das Upstream-Image enthält jetzt die eMudhra-CA-Sicherheitskorrekturen und ersetzt die vorübergehende Paketschicht. Vollständige Versionshinweise: https://github.com/louislam/uptime-kuma/releases/tag/2.5.7',
    pl_PL:
      'Zaktualizowano Uptime Kuma do 2.5.7. Naprawia ignorowanie ponownych prób w monitorach TCP z SSL/STARTTLS. Obraz źródłowy zawiera teraz poprawki bezpieczeństwa urzędów certyfikacji eMudhra, zastępując tymczasową warstwę pakietu. Pełne informacje o wydaniu: https://github.com/louislam/uptime-kuma/releases/tag/2.5.7',
    fr_FR:
      'Uptime Kuma mis à jour vers 2.5.7. Corrige les tentatives ignorées dans les moniteurs TCP utilisant SSL/STARTTLS. L’image amont inclut désormais les correctifs de sécurité des autorités de certification eMudhra, remplaçant la couche temporaire du paquet. Notes de version complètes : https://github.com/louislam/uptime-kuma/releases/tag/2.5.7',
  },
  migrations: {},
})
