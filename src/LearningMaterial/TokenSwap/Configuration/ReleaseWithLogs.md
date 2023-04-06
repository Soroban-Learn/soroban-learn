#### Configure the release-with-logs Profile
Configuring a release-with-logs profile can be useful for if you need to build a .wasm that has logs enabled for printing debug logs when using the [soroban-cli](https://google.com). Note that this is not necessary to access debug logs in tests or to use a step-through-debugger.

Add the following to your Cargo.toml and use the release-with-logs profile when you need logs.
```
[profile.release-with-logs]
inherits = "release"
debug-assertions = true
```