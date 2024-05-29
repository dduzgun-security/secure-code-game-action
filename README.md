# Secure Code Game GitHub Action
Greet someone and get GitHub's status page

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`

### `get-token`

**Required** The GitHub token

## Outputs

### `time`

The time the token was retrieved

### `status`

GitHub status page result

## Example usage

```yaml
uses: dduzgun-security/secure-code-game-action@v2.0
with:
  who-to-greet: 'Mona the Octocat'
  get-token: '123456789'
```
