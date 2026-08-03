# TODO

- Switch the root CA install in `startos/main.ts` to `sdk.getRootCa(effects)`
  once a start-sdk carrying it is released (Start9Labs/start-technologies#3619
  — the changelog entry sits under an unreleased 2.0.10; this package pins
  2.0.9). The install added in #12 mints a certificate it has no use for and
  takes the root as element `[2]` of the returned fullchain, because that was
  the only way to reach the root. `getRootCa` returns it directly, so both the
  hostname argument and the chain indexing go away.
- Revisit whether the CA install is needed at all if StartOS surfaces internal
  addresses in the interface UI (Start9Labs/start-technologies#3618): a user
  who can copy a service's `10.0.3.1:<port>` address reaches it over plain
  HTTP, with no certificate in the picture.
