Time to create the contract impl and our base function. To do this, we will use the following code:

```
pub struct IncrementContract;

#[contractimpl]
impl IncrementContract {
    pub fn increment(env: Env) -> u32 {

    }
}
```