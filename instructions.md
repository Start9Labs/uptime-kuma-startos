# Uptime Kuma

## Documentation

- [Uptime Kuma wiki](https://github.com/louislam/uptime-kuma/wiki) — upstream documentation covering monitor types, notification providers, status pages, and the rest of Uptime Kuma's features.

## What you get on StartOS

- A **Web UI** for Uptime Kuma — add monitors, configure notifications, publish status pages, and review uptime history.
- All monitoring data — monitors, history, notifications, status pages, users, settings — kept on the `main` volume and included in StartOS backups.

## Getting set up

1. Start the service and open the **Web UI** interface.
2. Complete the first-run setup wizard: create your admin account and pick a starting language.
3. From the Uptime Kuma dashboard, add your first monitor (HTTP, TCP, Ping, DNS, Docker, database, push, and others are supported).
4. Optionally configure notification providers under **Settings → Notifications** so you receive alerts when a monitor goes down.

## Using Uptime Kuma

### Web UI

The Web UI is where all monitoring is configured and viewed: monitor list with live status, per-monitor history and response-time graphs, status pages, maintenance windows, two-factor authentication, the API, and everything else upstream documents.

### Actions

- **Reset Password** — generates a new random 22-character password for your Uptime Kuma admin account and shows it to you once. Use this if you have lost the admin password.
