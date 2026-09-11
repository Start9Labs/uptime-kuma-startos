# Uptime Kuma

## Documentation

- [Uptime Kuma wiki](https://github.com/louislam/uptime-kuma/wiki) — the upstream documentation for monitor types, notification providers, status pages, and configuration.

## What you get on StartOS

- A **Web UI** interface for the Uptime Kuma dashboard — your monitors, status pages, notifications, and settings live here.
- All monitoring data (SQLite database, history, settings) persisted in a single volume that's included in StartOS backups.

## Getting set up

1. Start Uptime Kuma from its service page.
2. Open the **Web UI** interface.
3. Create your admin account on the first-time setup screen.
4. Start adding monitors from the dashboard.

> If you are restoring a backup from a v1 release, the service will automatically migrate the database on first start. The migration can take a long time depending on database size — do not restart the service while it's running.

## Using Uptime Kuma

### Web UI

The Web UI is where you add and manage monitors (HTTP, TCP, Ping, DNS, Docker, certificate, and the other upstream monitor types), configure notification providers (Slack, Telegram, Discord, email, and the rest), publish status pages, set up maintenance windows, manage users, and enable two-factor authentication. Everything is upstream Uptime Kuma — the wiki linked above is the authoritative reference.

### Actions

- **Reset Password** — generates a new random admin password and shows it once. Use it if you've lost access to your admin account; copy the password before dismissing the dialog.
