import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.5.3:0',
  releaseNotes: {
    en_US: `Updated Uptime Kuma to 2.5.3.

- New notification providers: SMS Gateway, ClickUp, TurboSMTP, BearSMS, Pinglet, Milky and OpenWA.
- RADIUS monitors now treat an Access-Challenge reply as a successful response.
- 2.5.2 and 2.5.3 only correct how the 2.5.1 release was published; they change nothing in the app itself.

Full release notes: https://github.com/louislam/uptime-kuma/releases/tag/2.5.3`,
    es_ES: `Uptime Kuma actualizado a 2.5.3.

- Nuevos proveedores de notificaciones: SMS Gateway, ClickUp, TurboSMTP, BearSMS, Pinglet, Milky y OpenWA.
- Los monitores RADIUS ahora tratan una respuesta Access-Challenge como una respuesta correcta.
- Las versiones 2.5.2 y 2.5.3 solo corrigen la publicación de la versión 2.5.1; no cambian nada en la aplicación.

Notas de la versión completas: https://github.com/louislam/uptime-kuma/releases/tag/2.5.3`,
    de_DE: `Uptime Kuma auf 2.5.3 aktualisiert.

- Neue Benachrichtigungsanbieter: SMS Gateway, ClickUp, TurboSMTP, BearSMS, Pinglet, Milky und OpenWA.
- RADIUS-Monitore werten eine Access-Challenge-Antwort jetzt als erfolgreiche Antwort.
- 2.5.2 und 2.5.3 korrigieren nur die Veröffentlichung der Version 2.5.1; an der Anwendung selbst ändern sie nichts.

Vollständige Versionshinweise: https://github.com/louislam/uptime-kuma/releases/tag/2.5.3`,
    pl_PL: `Zaktualizowano Uptime Kuma do 2.5.3.

- Nowi dostawcy powiadomień: SMS Gateway, ClickUp, TurboSMTP, BearSMS, Pinglet, Milky i OpenWA.
- Monitory RADIUS traktują teraz odpowiedź Access-Challenge jako odpowiedź prawidłową.
- Wydania 2.5.2 i 2.5.3 poprawiają jedynie sposób opublikowania wydania 2.5.1; nie zmieniają niczego w samej aplikacji.

Pełne informacje o wydaniu: https://github.com/louislam/uptime-kuma/releases/tag/2.5.3`,
    fr_FR: `Uptime Kuma mis à jour vers 2.5.3.

- Nouveaux fournisseurs de notifications : SMS Gateway, ClickUp, TurboSMTP, BearSMS, Pinglet, Milky et OpenWA.
- Les moniteurs RADIUS considèrent désormais une réponse Access-Challenge comme une réponse valide.
- Les versions 2.5.2 et 2.5.3 corrigent uniquement la publication de la version 2.5.1 ; elles ne changent rien à l'application.

Notes de version complètes : https://github.com/louislam/uptime-kuma/releases/tag/2.5.3`,
  },
  migrations: {},
})
