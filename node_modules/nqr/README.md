# NPM Quick Run

A simple zero-dependency, [2 line](https://github.com/dboskovic/nqr/blob/master/nqr), bash script that proxies `npm run` to `nqr` to make npm scripts just a little easier to run.

## Install
```bash
npm i nqr --save-dev
```

## Usage
```bash
# before
npm run do-something

# after
nqr do-something
```

## package.json usage

#### Before
```json
{
  "name": "your-package",
  "scripts": {
    "foo": "echo \"foo\"",
    "bar": "echo \"bar\"",
    "foobar": "npm run foo && npm run bar"
  }
}

```

#### Before
```json
{
  "name": "your-package",
  "scripts": {
    "foo": "echo \"foo\"",
    "bar": "echo \"bar\"",
    "foobar": "nqr foo && nqr bar"
  }
}
```
