import { VersionInfo } from '@start9labs/start-sdk'

export const v_2_2_1_0_b0 = VersionInfo.of({
  version: '2.2.1:0-beta.0',
  releaseNotes: {
    en_US:
      'Update upstream Uptime Kuma from 2.1.3 to 2.2.1. Includes 2 security fixes (missing authorization check on Ping Badge endpoint, moderate severity fix), socks proxy support for notifications, new notification providers (WhatsApp, Signal, Fluxer), improved SQLite multiple connections, and 17 bug fixes including Node.js 20 compatibility.',
    es_ES:
      'Actualización de Uptime Kuma de 2.1.3 a 2.2.1. Incluye 2 correcciones de seguridad, soporte de proxy socks para notificaciones, nuevos proveedores de notificaciones y 17 correcciones de errores.',
    de_DE:
      'Upstream-Update von Uptime Kuma von 2.1.3 auf 2.2.1. Enthält 2 Sicherheitsfixes, Socks-Proxy-Unterstützung für Benachrichtigungen, neue Benachrichtigungsanbieter und 17 Fehlerbehebungen.',
    pl_PL:
      'Aktualizacja Uptime Kuma z 2.1.3 do 2.2.1. Zawiera 2 poprawki bezpieczeństwa, obsługę proxy socks dla powiadomień, nowych dostawców powiadomień i 17 poprawek błędów.',
    fr_FR:
      'Mise à jour d\'Uptime Kuma de 2.1.3 vers 2.2.1. Comprend 2 correctifs de sécurité, prise en charge du proxy socks pour les notifications, nouveaux fournisseurs de notifications et 17 correctifs de bogues.',
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
