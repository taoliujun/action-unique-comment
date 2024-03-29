# taoliujun/action-unique-comment

This unique comment Action creates or updates a unique comment in the same issue.

> **pull request** is also a specific issue.

## Action Name

**taoliujun/action-unique-comment**

> `taoliujun/action-unique-comment@v1` means use the major version tag "v1", which will be automatically updated with features and bug fixes.

> `taoliujun/action-unique-comment@v1.0.0` means use the fixed version tag "v1.0.0", which will not be automatically updated.

## Usage

```yml
name: test unique comment
on:
    pull_request:
        types: [opened, synchronize, reopened]
jobs:
  test1:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Create or update a comment
        uses: taoliujun/action-unique-comment@v1
        with:
            uniqueIdentifier: ${{ github.workflow }}
            body: |
                hello world.
```

## Inputs

| name | type | requirement | description | default |
| --- | --- | --- | --- | --- |
| token | string | optional | github token | `${{ github.token }}` |
| owner | string | optional | github repository owner | `${{ github.event.repository.owner.login }}` |
| repo | string | optional | github repository name | `${{ github.event.repository.name }}` |
| issue_number | string | optional | github issue number | `${{ github.event.number }}` |
| uniqueIdentifier | string | optional | unique identifier for the comment | `"unique-comment"` |
| body | string | optional | comment body | - |
