Now, open the Cargo.toml

This contains some identifying information like the name, version and edition.

#### Configure the Library Type
Add the create-type configuration, required for building contracts
```
[lib]
crate-type = [“cdylib”]
```