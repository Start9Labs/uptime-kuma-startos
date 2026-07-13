# Updating the upstream version

Uptime Kuma is shipped as a single prebuilt Docker image; there is no Git submodule or local build of upstream source. The image tag in the manifest is the only upstream pin.

## Determining the upstream version

- **Uptime Kuma** ([louislam/uptime-kuma](https://github.com/louislam/uptime-kuma)) — latest GitHub release:

  ```sh
  gh release view -R louislam/uptime-kuma --json tagName -q .tagName
  ```

  Cross-check against the Docker Hub tags actually published for [louislam/uptime-kuma](https://hub.docker.com/r/louislam/uptime-kuma) (only a tag that exists here can be pinned):

  ```sh
  curl -fsSL "https://hub.docker.com/v2/repositories/louislam/uptime-kuma/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

  The current pin is `images.main.source.dockerTag` in `startos/manifest/index.ts` — read it there rather than trusting a version quoted in this file.

## Applying the bump

- **`startos/manifest/index.ts`** — update `images.main.source.dockerTag` to `louislam/uptime-kuma:<new version>`.
