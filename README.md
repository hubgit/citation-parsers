## Usage

1. Install [Now CLI](https://zeit.co/download).
1. Run [`yarn`](https://yarnpkg.com/) to install dependencies.
1. Edit these values:
   * `package.json`: `name`
   * `now.json`: `name`, `alias`
   * `webpack.config.js`: `title`
1. Run `now dev` to start serving the app locally.
1. Run `now --target production` to deploy the app via [Now](https://now.sh).

## Upgrading dependencies

Run `yarn upgrade-interactive --latest` to choose which dependencies to upgrade.

## Bundle analysis

1. `npm -g install webpack-bundle-analyzer`
2. `yarn run --silent webpack --profile --json > stats.json`
3. `webpack-bundle-analyzer stats.json`
