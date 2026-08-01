import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.4.0:6',
  releaseNotes: {
    en_US: `This release adds support for self-signed certificate supporting services running on the same machine. Uptime Kuma itself is unchanged (2.4.0).`,
    es_ES: `Esta versión añade soporte para servicios con certificados autofirmados que se ejecutan en la misma máquina. Uptime Kuma no cambia (2.4.0).`,
    de_DE: `Diese Version fügt Unterstützung für Dienste mit selbstsignierten Zertifikaten hinzu, die auf demselben Rechner laufen. Uptime Kuma selbst ist unverändert (2.4.0).`,
    pl_PL: `Ta wersja dodaje obsługę usług z certyfikatami samopodpisanymi działającymi na tej samej maszynie. Uptime Kuma pozostaje bez zmian (2.4.0).`,
    fr_FR: `Cette version ajoute la prise en charge des services utilisant des certificats auto-signés exécutés sur la même machine. Uptime Kuma lui-même est inchangé (2.4.0).`,
  },
  migrations: {},
})
