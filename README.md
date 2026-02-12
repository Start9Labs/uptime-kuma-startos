<p align="center">
  <img src="icon.png" alt="Uptime Kuma Logo" width="21%">
</p>

# Uptime Kuma on StartOS

> **Upstream docs:** <https://github.com/louislam/uptime-kuma/wiki>
>
> Everything not listed in this document should behave the same as upstream
> Uptime Kuma v1.23.17. If a feature, setting, or behavior is not mentioned
> here, the upstream documentation is accurate and fully applicable.

[Uptime Kuma](https://github.com/louislam/uptime-kuma) is an easy-to-use self-hosted monitoring tool. It allows you to monitor the uptime of your websites, servers, and applications with real-time notifications and detailed reports.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Dependencies](#dependencies)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property | Value |
|----------|-------|
| Image | `louislam/uptime-kuma:1.23.17-alpine` (upstream unmodified) |
| Architectures | x86_64, aarch64 |
| Entrypoint | Default upstream entrypoint |

---

## Volume and Data Layout

| Volume | Mount Point | Purpose |
|--------|-------------|---------|
| `main` | `/app/data` | All Uptime Kuma data |

The `main` volume contains the SQLite database, configuration, and all monitoring data.

---

## Installation and First-Run Flow

| Step | Upstream | StartOS |
|------|----------|---------|
| Installation | Docker run or Docker Compose | Install from marketplace |
| Initial setup | Create admin account in web UI | Same |

**First-run steps:**

1. Install Uptime Kuma from the StartOS marketplace
2. Access the web UI
3. Create your admin account (first-time setup wizard)
4. Start adding monitors

---

## Configuration Management

Uptime Kuma on StartOS uses the default upstream configuration. All settings are managed through the web UI, just as with a standard installation.

**No StartOS-specific configuration is applied.** The service runs with upstream defaults.

---

## Network Access and Interfaces

| Interface | Port | Protocol | Purpose |
|-----------|------|----------|---------|
| Web UI | 3001 | HTTP | Uptime Kuma dashboard |

**Access methods (StartOS 0.4.0):**

- LAN IP with unique port
- `<hostname>.local` with unique port
- Tor `.onion` address
- Custom domains (if configured)

---

## Actions (StartOS UI)

None. Uptime Kuma is managed entirely through its web UI.

---

## Dependencies

None. Uptime Kuma is a standalone application.

---

## Backups and Restore

**Included in backup:**

- `main` volume — SQLite database, configuration, all monitoring data

**Restore behavior:**

- All monitors, history, and settings restored
- No reconfiguration needed

---

## Health Checks

| Check | Display Name | Method | Messages |
|-------|--------------|--------|----------|
| Web UI | Web Interface | HTTP check on port 3001 | Ready / Unreachable |

---

## Limitations and Differences

1. **No environment variable configuration** — runtime settings cannot be changed via StartOS; use the web UI
2. **Alpine-based image** — uses the Alpine variant for smaller image size

---

## What Is Unchanged from Upstream

- All monitoring types (HTTP, TCP, Ping, DNS, Docker, etc.)
- Status pages
- Notification integrations (Slack, Telegram, Discord, email, etc.)
- Multi-user support
- Two-factor authentication
- API access
- Maintenance windows
- Certificate monitoring
- All web UI features
- SQLite database

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for build instructions and development workflow.

---

## Quick Reference for AI Consumers

```yaml
package_id: uptime-kuma
upstream_version: 1.23.17
image: louislam/uptime-kuma:1.23.17-alpine
architectures: [x86_64, aarch64]
volumes:
  main: /app/data
ports:
  ui: 3001
dependencies: none
actions: none
health_checks:
  - webui: http_check 3001
backup_volumes:
  - main
startos_managed_config: none
not_available:
  - Environment variable configuration
```
