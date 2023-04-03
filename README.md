# secure-code-game-action
This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

### `give-me-your-token-now`

**Required** The GitHub token`.

## Outputs

### `time`

The time when we stole your token

### `status`

GitHub status page result

## Example usage

```yaml
uses: dduzgun-security/secure-code-game-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'
  give-me-your-token-now: '123456789'
```