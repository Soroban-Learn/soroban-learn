Now we will create the `move_token` function. This will handle the movement of tokens for the swap.

```
fn move_token(
    env: &Env,
    token: BytesN<32>,
    from: &Address,
    to: &Address,
    approve_amount: i128,
    xfer_amount: i128,
) {

}
```

On line X create two variables: `token` and `contract_address`. 

```
let token = token::Client::new(&env, &token);
let contract_address = env.current_contract_address();
```

The swap itself is implemented via two token moves: from `a` to `b` and from `b` to `a`. The token move is implemented via allowance: the users don't need to know each other in order to perform the swap, and instead they authorize the swap contract to spend the necessary amount of token on their behalf via `incr_allow`. Soroban auth framework makes sure that the `incr_allow` signatures would have the proper context, and they won't be usable outside the swap contract invocation.