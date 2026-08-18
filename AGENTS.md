# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **`NODE_EXTRA_CA_CERTS` is what makes monitoring other StartOS services work.** Their HTTPS addresses carry certificates from the StartOS CA, which Node does not trust; without the root written into the volume every such monitor fails on certificate validation rather than reporting the service's real state. The certificate is the **third** element of the generated fullchain (leaf, intermediate, root) — a subcontainer cannot bind-mount the host copy, so it has to be written into `main`.
- **The self-check dials the service's own bridge address**, resolved from its host, not the retired `uptime-kuma.startos` name — so it no longer depends on the DNS or Tor layer. The map fn returns only the URL string, so `main` rebuilds when the binding changes and not on unrelated address churn.
- **`.migrating-v2` is written by the `2.4.0:1` migration and cleared by the health check, not by the migration.** Only the running app can tell when the v1→v2 database conversion finished, and interrupting it corrupts the database — which is why the check reports `loading` with an explicit do-not-restart rather than failing.
- **`db-config.json` pins SQLite to skip Uptime Kuma's database question in its first-run wizard.** Removing it reopens the MariaDB path, which nothing here provisions.
