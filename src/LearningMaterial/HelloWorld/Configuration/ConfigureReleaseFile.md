#### Configure the release Profile
Configuring the release profile to optimize the contract build is critical. Soroban contracts have a maximum size of 256KB. Rust programs, even small ones, without these configurations almost always exceed this size.

Add the following to your Cargo.toml and use the release profile when building.
```
[profile.release]
opt-level = "z"
overflow-checks = true
debug = 0
strip = "symbols"
debug-assertions = false
panic = "abort"
codegen-units = 1
lto = true
```