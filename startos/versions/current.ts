import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.5.4:0',
  releaseNotes: {
    en_US: `Updated Uptime Kuma to 2.5.4.

- Adds SFTP monitors with password or private-key authentication.
- Adds Signalgrid, Notify!, and Amoot SMS notification providers, plus a password visibility toggle on the login page.
- Fixes custom HTTP status ranges, ping timeout limits, browser monitor cleanup, MariaDB initialization, and iOS PWA icons.
- Includes a critical JSONata security fix and denial-of-service hardening.

Full release notes: https://github.com/louislam/uptime-kuma/releases/tag/2.5.4`,
    es_ES: `Uptime Kuma actualizado a 2.5.4.

- Añade monitores SFTP con autenticación mediante contraseña o clave privada.
- Añade los proveedores de notificaciones Signalgrid, Notify! y Amoot SMS, además de un control para mostrar u ocultar la contraseña en la página de inicio de sesión.
- Corrige los intervalos de estados HTTP personalizados, los límites de tiempo de espera de ping, la limpieza de los monitores de navegador, la inicialización de MariaDB y los iconos de la PWA en iOS.
- Incluye una corrección de seguridad crítica para JSONata y protección contra la denegación de servicio.

Notas de la versión completas: https://github.com/louislam/uptime-kuma/releases/tag/2.5.4`,
    de_DE: `Uptime Kuma auf 2.5.4 aktualisiert.

- Fügt SFTP-Monitore mit Passwort- oder Private-Key-Authentifizierung hinzu.
- Fügt die Benachrichtigungsanbieter Signalgrid, Notify! und Amoot SMS sowie einen Schalter zum Ein- und Ausblenden des Passworts auf der Anmeldeseite hinzu.
- Behebt Probleme mit benutzerdefinierten HTTP-Statusbereichen, Ping-Zeitüberschreitungen, der Bereinigung von Browser-Monitoren, der MariaDB-Initialisierung und iOS-PWA-Symbolen.
- Enthält eine kritische Sicherheitskorrektur für JSONata und Schutz vor Denial-of-Service-Angriffen.

Vollständige Versionshinweise: https://github.com/louislam/uptime-kuma/releases/tag/2.5.4`,
    pl_PL: `Zaktualizowano Uptime Kuma do 2.5.4.

- Dodaje monitory SFTP z uwierzytelnianiem za pomocą hasła lub klucza prywatnego.
- Dodaje dostawców powiadomień Signalgrid, Notify! i Amoot SMS oraz przełącznik widoczności hasła na stronie logowania.
- Naprawia niestandardowe zakresy statusów HTTP, limity czasu oczekiwania na ping, czyszczenie monitorów przeglądarkowych, inicjalizację MariaDB i ikony PWA w systemie iOS.
- Zawiera krytyczną poprawkę zabezpieczeń JSONata i ochronę przed atakami typu denial-of-service.

Pełne informacje o wydaniu: https://github.com/louislam/uptime-kuma/releases/tag/2.5.4`,
    fr_FR: `Uptime Kuma mis à jour vers 2.5.4.

- Ajoute des moniteurs SFTP avec authentification par mot de passe ou clé privée.
- Ajoute les fournisseurs de notifications Signalgrid, Notify! et Amoot SMS, ainsi qu'un bouton pour afficher ou masquer le mot de passe sur la page de connexion.
- Corrige les plages de statuts HTTP personnalisées, les délais d'attente des pings, le nettoyage des moniteurs de navigateur, l'initialisation de MariaDB et les icônes PWA sous iOS.
- Inclut un correctif de sécurité critique pour JSONata et une protection contre le déni de service.

Notes de version complètes : https://github.com/louislam/uptime-kuma/releases/tag/2.5.4`,
  },
  migrations: {},
})
