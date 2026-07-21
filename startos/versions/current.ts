import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.4.0:3',
  releaseNotes: {
    en_US: `This release migrates the package to start-sdk 2.0 (requires StartOS 0.4.0-beta.10 or later). Uptime Kuma itself is unchanged (2.4.0).`,
    es_ES: `Esta versión migra el paquete a start-sdk 2.0 (requiere StartOS 0.4.0-beta.10 o posterior). Uptime Kuma no cambia (2.4.0).`,
    de_DE: `Diese Version stellt das Paket auf start-sdk 2.0 um (erfordert StartOS 0.4.0-beta.10 oder neuer). Uptime Kuma selbst ist unverändert (2.4.0).`,
    pl_PL: `Ta wersja przenosi pakiet na start-sdk 2.0 (wymaga StartOS 0.4.0-beta.10 lub nowszego). Uptime Kuma pozostaje bez zmian (2.4.0).`,
    fr_FR: `Cette version fait passer le paquet à start-sdk 2.0 (nécessite StartOS 0.4.0-beta.10 ou une version ultérieure). Uptime Kuma lui-même est inchangé (2.4.0).`,
  },
  migrations: {},
})
