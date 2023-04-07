Next we will increment the count, save the count, and then return the count to the caller. 

To do this, we will use the following code.

```
// Increment the count.
count += 1;

// Save the count.
env.storage().set(&COUNTER, &count);

// Return the count to the caller.
count
```