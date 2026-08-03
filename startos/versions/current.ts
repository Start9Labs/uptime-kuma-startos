import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.5.0:0',
  releaseNotes: {
    en_US: `Updated Uptime Kuma to 2.5.0.

- Uptime Kuma now trusts this server's certificate authority, so monitors and notifications can reach other services running on this server over HTTPS.
- New NTP monitor type, and check intervals are no longer capped at 24 days.
- New notification providers: Plivo (SMS and voice), Ooredoo Maldives, WxPusher SPT and Flowtriq; SMTP gains custom headers.
- Fixes for MQTT over mqtts://, Steam monitor hostname resolution, badge URLs, Kafka timeouts, and daily statistics overflowing on long-running monitors.
- Dependency updates including security fixes.

Full release notes: https://github.com/louislam/uptime-kuma/releases/tag/2.5.0`,
    es_ES: `Uptime Kuma actualizado a 2.5.0.

- Uptime Kuma ahora confía en la autoridad de certificación de este servidor, por lo que los monitores y las notificaciones pueden acceder por HTTPS a otros servicios que se ejecutan en este servidor.
- Nuevo tipo de monitor NTP, y los intervalos de comprobación ya no están limitados a 24 días.
- Nuevos proveedores de notificaciones: Plivo (SMS y voz), Ooredoo Maldivas, WxPusher SPT y Flowtriq; SMTP admite cabeceras personalizadas.
- Correcciones para MQTT sobre mqtts://, la resolución de nombres del monitor de Steam, las URL de insignias, los tiempos de espera de Kafka y el desbordamiento de las estadísticas diarias en monitores de larga duración.
- Actualizaciones de dependencias, incluidas correcciones de seguridad.

Notas de la versión completas: https://github.com/louislam/uptime-kuma/releases/tag/2.5.0`,
    de_DE: `Uptime Kuma auf 2.5.0 aktualisiert.

- Uptime Kuma vertraut jetzt der Zertifizierungsstelle dieses Servers, sodass Monitore und Benachrichtigungen andere auf diesem Server laufende Dienste über HTTPS erreichen können.
- Neuer NTP-Monitortyp, und Prüfintervalle sind nicht mehr auf 24 Tage begrenzt.
- Neue Benachrichtigungsanbieter: Plivo (SMS und Sprachanruf), Ooredoo Malediven, WxPusher SPT und Flowtriq; SMTP unterstützt eigene Header.
- Korrekturen für MQTT über mqtts://, die Namensauflösung des Steam-Monitors, Badge-URLs, Kafka-Zeitüberschreitungen und überlaufende Tagesstatistiken bei lange laufenden Monitoren.
- Aktualisierte Abhängigkeiten einschließlich Sicherheitskorrekturen.

Vollständige Versionshinweise: https://github.com/louislam/uptime-kuma/releases/tag/2.5.0`,
    pl_PL: `Zaktualizowano Uptime Kuma do 2.5.0.

- Uptime Kuma ufa teraz urzędowi certyfikacji tego serwera, dzięki czemu monitory i powiadomienia mogą łączyć się przez HTTPS z innymi usługami działającymi na tym serwerze.
- Nowy typ monitora NTP, a interwały sprawdzania nie są już ograniczone do 24 dni.
- Nowi dostawcy powiadomień: Plivo (SMS i połączenia głosowe), Ooredoo Malediwy, WxPusher SPT i Flowtriq; SMTP obsługuje własne nagłówki.
- Poprawki dla MQTT przez mqtts://, rozwiązywania nazw w monitorze Steam, adresów URL odznak, limitów czasu Kafki oraz przepełniania statystyk dziennych przy długo działających monitorach.
- Aktualizacje zależności, w tym poprawki bezpieczeństwa.

Pełne informacje o wydaniu: https://github.com/louislam/uptime-kuma/releases/tag/2.5.0`,
    fr_FR: `Uptime Kuma mis à jour vers 2.5.0.

- Uptime Kuma fait désormais confiance à l'autorité de certification de ce serveur, ce qui permet aux moniteurs et aux notifications d'atteindre en HTTPS les autres services exécutés sur ce serveur.
- Nouveau type de moniteur NTP, et les intervalles de vérification ne sont plus limités à 24 jours.
- Nouveaux fournisseurs de notifications : Plivo (SMS et appel vocal), Ooredoo Maldives, WxPusher SPT et Flowtriq ; SMTP prend en charge des en-têtes personnalisés.
- Corrections pour MQTT via mqtts://, la résolution des noms du moniteur Steam, les URL de badges, les délais d'attente Kafka et le dépassement des statistiques quotidiennes sur les moniteurs de longue durée.
- Mises à jour des dépendances, y compris des correctifs de sécurité.

Notes de version complètes : https://github.com/louislam/uptime-kuma/releases/tag/2.5.0`,
  },
  migrations: {},
})
