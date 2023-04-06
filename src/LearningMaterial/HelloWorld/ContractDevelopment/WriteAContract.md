We have opened up the `lib.rs` file. This is where your contract code will live.

All contracts should begin with `#![no_std]` to ensure that the Rust standard library is not included in the build. The Rust standard library is large and not well suited to being deployed into small programs like those deployed to blockchains.

On line 1, enter `#![no_std]` and click next step.