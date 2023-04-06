First, on Line of of `src/lib.rs` you want to define the token spec WASM.

```
mod token {
    soroban_sdk::contractimport!(file = "../soroban_token_spec.wasm");
}
```