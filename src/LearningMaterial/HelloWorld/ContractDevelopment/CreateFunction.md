Many of the types available in typical Rust programs, such as `std::vec::Vec`, are not available, as there is no allocator and no heap memory in Soroban contracts. The `soroban-sdk` provides a variety of types like `Vec`, `Map`, `Bytes`, `BytesN`, `Symbol`, that all utilize the Soroban environment's memory and native capabilities. Primitive values like `u128`, `i128`, `u64`, `i64`, `u32`, `i32`, and bool can also be used. Floats and floating point math are not supported.

With that in mind, lets implement our contract and funciton `hello`

```
pub struct Contract;

#[contractimpl]
impl Contract {
    pub fn hello(env: Env, to: Symbol) -> Vec<Symbol> {
        todo!()
    }
}
```

Contract functions live inside an `impl` for a struct. The `impl` block is annotated with `#[contractimpl]`. Contract functions must be given names that are no more than 10 characters long. Functions that are intended to be called externally should be marked with `pub` visibility. The first argument can be an `Env` argument to get a copy of the Soroban environment, which is necessary for most things.