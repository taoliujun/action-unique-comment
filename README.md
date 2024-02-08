# taoliujun/action-unique-comment

This unique comment Action creates or updates a unique comment in the same issue.

> **pull request** is also a specific issue.

## Action Name

**taoliujun/action-unique-comment**

> Use the syntax "uses: taoliujun/action-unique-comment@1" instead of "uses: taoliujun/action-unique-comment@v1". Because "@v1" indicates a tag, it will not be automatically upgraded. "@1" indicates branch 1, which will be automatically upgraded.

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
        uses: taoliujun/action-unique-comment@1
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
