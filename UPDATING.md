# Updating the upstream version

Uptime Kuma is shipped as a single prebuilt Docker image; there is no Git submodule or local build of upstream source. The image tag in the manifest is the only upstream pin.

## Determining the upstream version

- **Uptime Kuma** ([louislam/uptime-kuma](https://github.com/louislam/uptime-kuma)) — inspect GitHub tags and stable releases rather than relying on the “Latest” badge:

  ```sh
  gh api --paginate repos/louislam/uptime-kuma/tags --jq '.[].name'
  gh api --paginate repos/louislam/uptime-kuma/releases --jq '.[] | select(.prerelease == false and .draft == false) | .tag_name'
  ```

  Choose the newest stable application version with a published image. Uptime Kuma uses major.minor.patch version numbers; assess release impact according to the packaging guide.

  Cross-check against the Docker Hub tags actually published for [louislam/uptime-kuma](https://hub.docker.com/r/louislam/uptime-kuma) (only a tag that exists here can be pinned):

  ```sh
  curl -fsSL "https://hub.docker.com/v2/repositories/louislam/uptime-kuma/tags?page_size=20&ordering=last_updated" | jq -r '.results[].name'
  ```

  Verify the exact tag and both supported architectures before pinning it:

  ```sh
  curl -fsSL "https://hub.docker.com/v2/repositories/louislam/uptime-kuma/tags/<new version>" | jq '{name, images: [.images[] | {os, architecture, status}]}'
  ```

  The current pin is `images.main.source.dockerTag` in `startos/manifest/index.ts` — read it there rather than trusting a version quoted in this file.

## Applying the bump

- **`startos/manifest/index.ts`** — update `images.main.source.dockerTag` to `louislam/uptime-kuma:<new version>`.
