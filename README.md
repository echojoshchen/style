# ESLint config

This package provides an .eslintrc based on `eslint-config-airbnb-base` as an extensible shared
config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-airbnb-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "eslint-config-airbnb-base@latest" peerDependencies
  ```

  ```sh
  npx install-peerdeps --dev eslint-config-airbnb-base
  ```

1. Add `"extends": "airbnb-base"` to your .eslintrc.
