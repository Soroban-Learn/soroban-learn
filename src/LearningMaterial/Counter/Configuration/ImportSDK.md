#### Import soroban-sdk and Features
Add the following sections to the Cargo.toml that will import the soroban-sdk, and configure a set of features explained below.
```
[dependencies]
soroban-sdk = "0.6.0"

[dev_dependencies]
soroban-sdk = { version = "0.6.0", features = ["testutils"] }

[features]
testutils = ["soroban-sdk/testutils"]
```
The features list includes a testutils feature, which will cause additional test utilities to be generated for calling the contract in tests.