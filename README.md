# Secure Code Game Action
Greet someone and call GitHub status page.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

### `get-token`

**Required** The GitHub token`.

## Outputs

### `time`

The time when we stole your token

### `status`

GitHub status page result

## Example usage

```yaml
uses: dduzgun-security/secure-code-game-action@v1.0
with:
  who-to-greet: 'Mona the Octocat'
  get-token: '123456789'
```
