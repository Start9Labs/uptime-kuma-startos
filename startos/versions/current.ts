import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.5.8:0',
  releaseNotes: {
    en_US:
      'Updated Uptime Kuma to 2.5.8. Fixes an admin-only remote code execution vulnerability and Docker response validation. TCP Port monitors no longer support SSL/STARTTLS, certificate expiry checks, or expected TLS alerts; existing monitors now check plain TCP connectivity only. Review any monitors relying on those checks after updating. Updated start-sdk to 3.1.1. Full release notes: https://github.com/louislam/uptime-kuma/releases/tag/2.5.8',
    es_ES:
      'Uptime Kuma actualizado a 2.5.8. Corrige una vulnerabilidad de ejecución remota de código accesible solo para administradores y la validación de respuestas de Docker. Los monitores de puerto TCP ya no admiten SSL/STARTTLS, comprobaciones de caducidad de certificados ni alertas TLS esperadas; los monitores existentes ahora solo comprueban la conectividad TCP sin cifrar. Revise los monitores que dependan de esas comprobaciones después de actualizar. start-sdk actualizado a 3.1.1. Notas de la versión completas: https://github.com/louislam/uptime-kuma/releases/tag/2.5.8',
    de_DE:
      'Uptime Kuma auf 2.5.8 aktualisiert. Behebt eine nur für Administratoren zugängliche Sicherheitslücke zur Remotecodeausführung und die Validierung von Docker-Antworten. TCP-Port-Monitore unterstützen kein SSL/STARTTLS, keine Zertifikatsablaufprüfungen und keine erwarteten TLS-Warnmeldungen mehr; bestehende Monitore prüfen jetzt nur die unverschlüsselte TCP-Verbindung. Prüfen Sie nach dem Update alle Monitore, die auf diesen Prüfungen beruhen. start-sdk auf 3.1.1 aktualisiert. Vollständige Versionshinweise: https://github.com/louislam/uptime-kuma/releases/tag/2.5.8',
    pl_PL:
      'Zaktualizowano Uptime Kuma do 2.5.8. Naprawia lukę umożliwiającą zdalne wykonanie kodu dostępną tylko dla administratorów oraz walidację odpowiedzi Dockera. Monitory portów TCP nie obsługują już SSL/STARTTLS, sprawdzania ważności certyfikatów ani oczekiwanych alertów TLS; istniejące monitory sprawdzają teraz wyłącznie nieszyfrowaną łączność TCP. Po aktualizacji sprawdź monitory korzystające z tych funkcji. Zaktualizowano start-sdk do 3.1.1. Pełne informacje o wydaniu: https://github.com/louislam/uptime-kuma/releases/tag/2.5.8',
    fr_FR:
      'Uptime Kuma mis à jour vers 2.5.8. Corrige une vulnérabilité d’exécution de code à distance accessible uniquement aux administrateurs et la validation des réponses Docker. Les moniteurs de port TCP ne prennent plus en charge SSL/STARTTLS, les contrôles d’expiration des certificats ni les alertes TLS attendues ; les moniteurs existants vérifient désormais uniquement la connectivité TCP non chiffrée. Vérifiez après la mise à jour les moniteurs qui dépendent de ces contrôles. start-sdk mis à jour vers 3.1.1. Notes de version complètes : https://github.com/louislam/uptime-kuma/releases/tag/2.5.8',
  },
  migrations: {},
})
