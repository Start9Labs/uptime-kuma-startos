<p align="center">
  <img src="icon.svg" alt="Uptime Kuma Logo" width="21%">
</p>

# Uptime Kuma on StartOS

> Everything not listed in this document should behave the same as upstream
> Uptime Kuma. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Uptime Kuma](https://github.com/louislam/uptime-kuma) is a self-hosted uptime monitor: it polls the endpoints you give it and notifies you when one stops answering. This package pins it to SQLite, teaches it to trust StartOS's certificate authority so it can monitor your other services over HTTPS, and adds a password-reset action for when you lock yourself out.

- **Upstream repo:** <https://github.com/louislam/uptime-kuma>
- **Wrapper repo:** <https://github.com/Start9Labs/uptime-kuma-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

One upstream image, unmodified.

| Property      | Value                       |
| ------------- | --------------------------- |
| Image         | `louislam/uptime-kuma`      |
| Architectures | x86_64, aarch64             |
| Entrypoint    | Upstream's, with `cwd=/app` |

| Subcontainer     | Purpose                                       |
| ---------------- | --------------------------------------------- |
| `main`           | The `primary` daemon — the one to `attach` to |
| `reset-password` | Temporary; the Reset Password action          |

**One thing is set up before the daemon starts: trust for StartOS's certificate authority.** Every StartOS service's HTTPS address is served with a certificate from that CA, which Node does not trust out of the box — so a monitor pointed at another service on this server would fail with a certificate error rather than report the service's real state. On each start the package extracts the root certificate from a freshly generated chain, writes it into the data volume, and points `NODE_EXTRA_CA_CERTS` at it. The read is reactive, so a CA rotation rewrites the file rather than leaving a stale one.

## Volume and Data Layout

One volume, holding everything.

| Volume | Mount Point | Purpose                                                                     |
| ------ | ----------- | --------------------------------------------------------------------------- |
| `main` | `/app/data` | The SQLite database, uploaded icons, the root CA file, and `db-config.json` |

The database is the whole application state: monitors, their history, notification providers, status pages, and accounts.

## File Models

One model, and it exists to make a decision rather than to carry settings.

| File             | Format | Modelled                | Written by |
| ---------------- | ------ | ----------------------- | ---------- |
| `db-config.json` | JSON   | Yes — `FileHelper.json` | Every init |

It holds one enforced key: the database type, pinned to `sqlite`. Uptime Kuma otherwise asks which database to use during its first-run wizard, and offers an external MariaDB; pinning this skips the question and closes off an option nothing here would provision.

**Everything else Uptime Kuma is configured with lives in its own database**, edited through its web UI — monitors, notification channels, retention, appearance, two-factor. None of it is modelled here, and there is no action that touches it.

The root CA file is written alongside these on every start. It is generated, not configuration: replacing it by hand is undone at the next restart.

## Dependencies

None. Uptime Kuma bundles its own SQLite database and needs nothing else installed — though monitoring your other StartOS services is the common reason to run it.

## Network Access and Interfaces

One interface, serving the web UI, the API, and any status pages you publish.

| Interface | Id   | Type | Port | Description   |
| --------- | ---- | ---- | ---- | ------------- |
| Web UI    | `ui` | ui   | 3001 | Web Interface |

The port is bound on the `main` MultiHost and is not masked.

**Status pages are served from the same address as the admin UI**, on a path Uptime Kuma chooses. Publishing a status page therefore means publishing an address that also carries the login — so treat any address you share for a status page as a public one.

## Installation and First-Run Flow

Nothing to configure and nothing to reveal. Install seeds `db-config.json` and starts the service; **the first account is created in the web UI**, by you, on the setup screen Uptime Kuma shows at its first visit. There is no task and no generated credential.

Do that promptly. Until the setup screen has been completed, anyone who can reach a published address can complete it and become the administrator.

**Monitoring another StartOS service works out of the box** thanks to the CA trust described above — point a monitor at that service's HTTPS address and it validates normally.

## Actions

One action.

### Reset Password

Generates a new password for the Uptime Kuma admin account. Run it when locked out.

- **What it changes:** the account's password, written by upstream's own `reset-password` script running against the database in a temporary container.
- **Cost:** seconds. No restart, and no need for the service to be running.
- **Repeat safety:** safe to re-run; each run generates a fresh password.
- **Outputs:** the new password, masked and copyable. It is not recoverable afterwards.
- **It resets _the_ admin**, not a chosen one — upstream's script targets the single admin account, so this is recovery rather than user management.

## Tasks

None. This package raises no tasks, so the service is never held on a prompt and its ordinary controls are always available.

## Health Checks

One check always, and a second that appears only during a database migration.

| Check       | Displayed            | Method                                    | Present when                   |
| ----------- | -------------------- | ----------------------------------------- | ------------------------------ |
| `primary`   | "Web Interface"      | An HTTP request to its own bridge address | Always                         |
| `migration` | "Database Migration" | `GET /api/entry-page` on the same address | A version-1 database was found |

The web check reaches the service over the LXC bridge — its own address on the internal network — rather than through a name, so it does not depend on DNS or the Tor layer. Before that address resolves it reports `starting` rather than failing, so a service still being wired up does not look broken.

**The migration check is the one to pay attention to.** An install carrying a version-1 database is marked at update time, and Uptime Kuma then converts it on its first start. That conversion can take a long time on a database with a lot of history, and the check reports `loading` with an explicit **do not restart** the whole time — restarting mid-conversion is what corrupts it. The check clears itself, and disappears for good, the moment the app answers.

A `primary` failure outside a migration is the app itself, and the service logs name the cause.

## Backups and Restore

The `main` volume is copied wholesale — `sdk.Backups.ofVolumes('main')`. No dump step and nothing excluded.

- **Included:** the SQLite database with every monitor, its full history, notification providers, status pages, and accounts; uploaded icons; and `db-config.json`.
- **Restore:** complete. The root CA file is regenerated on the first start rather than restored from the backup, so a restore onto a different server trusts that server's authority, not the old one's.
- **Monitors resume immediately** on restore, including any that were notifying — expect notifications for anything still down.

## Limitations and Differences

1. **SQLite only.** The database type is pinned, so Uptime Kuma's MariaDB option is not offered.
2. **The first visitor completes setup.** There is no generated admin credential and no task; the window between install and your first login is open.
3. **Status pages share the admin address.** There is no separate interface for them.
4. **Reset Password targets the single admin account** and is recovery, not user management.
5. **A version-1 database migrates on first start** and must not be interrupted; the dedicated health check exists to say so.
6. **The CA trust file is regenerated every start** and cannot be replaced by hand.
7. **No riscv64 build.** x86_64 and aarch64 only.

---

## Quick Reference for AI Consumers

```yaml
package_id: uptime-kuma
image: louislam/uptime-kuma
architectures:
  - x86_64
  - aarch64
subcontainers:
  - main # the running daemon
  - reset-password # temporary; the Reset Password action
volumes:
  main: /app/data
file_models:
  - /app/data/db-config.json
startos_managed_env_vars:
  - NODE_EXTRA_CA_CERTS # StartOS root CA, so monitors trust other services' HTTPS
dependencies: []
interfaces:
  ui: { type: ui, port: 3001 }
actions:
  - reset-password
tasks: []
health_checks:
  - primary # displayed "Web Interface"; self-check over the LXC bridge
  - migration # displayed "Database Migration"; only while a v1 database is converting
```
