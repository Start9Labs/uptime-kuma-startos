import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_2_3_2_0 = VersionInfo.of({
  version: '2.3.2:0',
  releaseNotes: {
    en_US: `**Bumps**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.1

**Features**

- New notification providers (Telnyx, VK, MAX, Evolution custom templates)
- OracleDB monitor
- Collapsible groups on status pages
- Websocket monitor authentication

**Fixes**

- SQLite now defaults to a single connection with a configurable \`busy_timeout\` to avoid \`database is locked\` errors
- Domain expiry updates, sub-millisecond ping graph gaps, and several notification provider bugs

**Internal**

- Drop the v1→v2 migration alert and marker; routine updates no longer surface a database-migration warning`,
    es_ES: `**Mejoras**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.1

**Funciones**

- Nuevos proveedores de notificaciones (Telnyx, VK, MAX, plantillas personalizadas de Evolution)
- Monitor de OracleDB
- Grupos plegables en páginas de estado
- Autenticación para el monitor websocket

**Correcciones**

- SQLite vuelve a usar una sola conexión por defecto con un \`busy_timeout\` configurable para evitar errores \`database is locked\`
- Actualizaciones de caducidad de dominio, huecos en gráficos de ping sub-milisegundo y varios errores de proveedores de notificaciones

**Interno**

- Se elimina la alerta y el marcador de migración v1→v2; las actualizaciones rutinarias ya no muestran advertencia de migración`,
    de_DE: `**Aktualisierungen**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.1

**Funktionen**

- Neue Benachrichtigungsanbieter (Telnyx, VK, MAX, Evolution Custom Templates)
- OracleDB-Monitor
- Einklappbare Gruppen auf Statusseiten
- Authentifizierung für Websocket-Monitore

**Fehlerbehebungen**

- SQLite verwendet standardmäßig wieder eine einzelne Verbindung mit konfigurierbarem \`busy_timeout\`, um \`database is locked\`-Fehler zu vermeiden
- Aktualisierungen für Domain-Ablauf, Lücken in Sub-Millisekunden-Ping-Graphen und mehrere Fehler bei Benachrichtigungsanbietern

**Intern**

- Der v1→v2-Migrationshinweis und der Marker wurden entfernt; reguläre Updates zeigen keine Datenbank-Migrationswarnung mehr`,
    pl_PL: `**Aktualizacje**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.1

**Funkcje**

- Nowi dostawcy powiadomień (Telnyx, VK, MAX, niestandardowe szablony Evolution)
- Monitor OracleDB
- Zwijane grupy na stronach statusu
- Uwierzytelnianie dla monitora websocket

**Poprawki**

- SQLite domyślnie korzysta ponownie z pojedynczego połączenia z konfigurowalnym \`busy_timeout\`, aby uniknąć błędów \`database is locked\`
- Aktualizacje wygaśnięcia domeny, luki w wykresach pingów poniżej milisekundy i kilka błędów dostawców powiadomień

**Wewnętrzne**

- Usunięto alert migracji v1→v2 i znacznik; rutynowe aktualizacje nie pokazują już ostrzeżenia o migracji bazy danych`,
    fr_FR: `**Mises à jour**

- Uptime Kuma → 2.3.2
- start-sdk → 1.5.1

**Fonctionnalités**

- Nouveaux fournisseurs de notifications (Telnyx, VK, MAX, modèles personnalisés Evolution)
- Surveillance OracleDB
- Groupes repliables sur les pages de statut
- Authentification pour le moniteur websocket

**Correctifs**

- SQLite utilise à nouveau une connexion unique par défaut avec un \`busy_timeout\` configurable pour éviter les erreurs \`database is locked\`
- Mises à jour d'expiration de domaine, lacunes des graphiques de ping sub-millisecondes et plusieurs corrections de fournisseurs de notifications

**Interne**

- Suppression de l'alerte de migration v1→v2 et du marqueur ; les mises à jour de routine n'affichent plus d'avertissement de migration de base de données`,
  },
  migrations: {
    down: IMPOSSIBLE,
  },
})
