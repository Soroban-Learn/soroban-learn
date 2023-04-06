Now we are ready to define our swap function. In this function, we will swap token A for token B atomically.

```
pub struct AtomicSwapContract;

#[contractimpl]
impl AtomicSwapContract {
    pub fn swap(
        env: Env,
        a: Address,
        b: Address,
        token_a: BytesN<32>,
        token_b: BytesN<32>,
        amount_a: i128,
        min_b_for_a: i128,
        amount_b: i128,
        min_a_for_b: i128,
    ) {

    }
}
```