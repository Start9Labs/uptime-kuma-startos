<p align="center">
  <img src="icon.svg" alt="Uptime Kuma Logo" width="21%">
</p>

# Uptime Kuma on StartOS

> **Upstream docs:** <https://github.com/louislam/uptime-kuma/wiki>
>
> Everything not listed in this document should behave the same as upstream
> Uptime Kuma. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable.

[Uptime Kuma](https://github.com/louislam/uptime-kuma) is an easy-to-use self-hosted monitoring tool. It allows you to monitor the uptime of your websites, servers, and applications with real-time notifications and detailed reports.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Configuration Management](#configuration-management)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Actions (StartOS UI)](#actions-startos-ui)
- [Backups and Restore](#backups-and-restore)
- [Health Checks](#health-checks)
- [Dependencies](#dependencies)
- [Limitations and Differences](#limitations-and-differences)
- [What Is Unchanged from Upstream](#what-is-unchanged-from-upstream)
- [Contributing](#contributing)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

| Property      | Value                                        |
| ------------- | -------------------------------------------- |
| Image         | `louislam/uptime-kuma` (upstream unmodified) |
| Architectures | x86_64, aarch64                              |
| Entrypoint    | Default upstream entrypoint                  |

---

## Volume and Data Layout

| Volume | Mount Point | Purpose              |
| ------ | ----------- | -------------------- |
| `main` | `/app/data` | All Uptime Kuma data |

The `main` volume contains the SQLite database, configuration, and all monitoring data.

---

## Installation and First-Run Flow

| Step          | Upstream                       | StartOS                  |
| ------------- | ------------------------------ | ------------------------ |
| Installation  | Docker run or Docker Compose   | Install from marketplace |
| Initial setup | Create admin account in web UI | Same                     |

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

| Interface | Port | Protocol | Purpose               |
| --------- | ---- | -------- | --------------------- |
| Web UI    | 3001 | HTTP     | Uptime Kuma dashboard |

---

## Actions (StartOS UI)

### Reset Password (`reset-password`)

| Property         | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| **Name**         | Reset Password                                              |
| **Purpose**      | Reset your Uptime Kuma admin password                       |
| **Visibility**   | Enabled                                                     |
| **Availability** | Any (running or stopped)                                    |
| **Inputs**       | None                                                        |
| **Outputs**      | Randomly generated 22-character password (masked, copyable) |

---

## Backups and Restore

**Included in backup:**

- `main` volume — SQLite database, configuration, all monitoring data

**Restore behavior:**

- All monitors, history, and settings restored
- No reconfiguration needed

---

## Health Checks

| Check  | Display Name  | Method                  | Messages            |
| ------ | ------------- | ----------------------- | ------------------- |
| Web UI | Web Interface | HTTP check on port 3001 | Ready / Unreachable |

---

## Dependencies

None.

---

## Limitations and Differences

1. **No environment variable configuration** — runtime settings cannot be changed via StartOS; use the web UI
2. **Standard image** — uses the standard (Debian-based) upstream image

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

Build and development workflow follow the StartOS packaging guide: <https://docs.start9.com/packaging>. Keep `README.md`, `instructions.md`, and `AGENTS.md` in sync with any change to user-visible behavior or package structure.

---

## Quick Reference for AI Consumers

```yaml
package_id: uptime-kuma
image: louislam/uptime-kuma
architectures: [x86_64, aarch64]
volumes:
  main: /app/data
ports:
  ui: 3001
dependencies: none
startos_managed_env_vars: []
actions:
  - reset-password
```
