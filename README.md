# prettier-config

[![Build Status](https://img.shields.io/github/workflow/status/kensho-technologies/prettier-config/CI/main)](https://github.com/kensho-technologies/prettier-config/actions)
[![npm](https://img.shields.io/npm/v/@kensho-technologies/prettier-config.svg)](https://npm.im/@kensho-technologies/prettier-config)

Shared config for [Prettier](https://prettier.io).

## Install

```console
$ npm i -D prettier @kensho-technologies/prettier-config
```

## Usage

[Configure Prettier](https://prettier.io/docs/en/configuration.html#sharing-configurations) to use the config, e.g., by adding a key to the project's `package.json`:

```json
{
  "prettier": "@kensho-technologies/prettier-config"
}
```

Add scripts to `package.json` to format and validate files:

```json
{
  "scripts": {
    "fix": "prettier -w .",
    "test": "prettier -c ."
  }
}
```

## License

Licensed under the Apache 2.0 License. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

Copyright 2020-present Kensho Technologies, LLC. The present date is determined by the timestamp of the most recent commit in the repository.
