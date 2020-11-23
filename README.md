# React Library Boilerplate

This react library boilerplate uses the following:

- Typescript
- Rollup
- Prettier
- ESLint
- StyleLint
- Storybook
- SCSS
- Jest
- React Testing Library
- [Semantic-Release](https://semantic-release.gitbook.io/)
- Github Actions

## Setup

1. Edit the `package.json` file. Set you app's name, description, version, author, homepage, bugs, and repository fields with the correct information.
1. Run `yarn` to add all the project's dependencies.
1. You package.json file version should always be 0.0.0 since Semantic Release will automatically set this upon publishing.

## Basic Folder Structure

```
├── .storybook
├── scripts
├── src
│   ├── components
|   |   ├── Example
|   |   |   ├── __tests__
|   |   |   |   ├── Example.test.tsx
|   |   |   ├── example.scss
|   |   |   ├── Example.stories.tsx
|   |   |   ├── Example.tsx
|   |   |   ├── index.ts
|   |   ├── index.ts
|   ├── index.ts
├── LICENSE
├── package.json
├── README.md
```

## Add a new component

- add the new component directory in the `src/components` directory following this folder structure

```
├── MyComponent
|   ├── __tests__
|   |   ├── MyComponent.test.tsx
|   ├── MyComponent.scss
|   ├── MyComponent.stories.tsx
|   ├── MyComponent.tsx
|   ├── index.ts

```

Once you have created your new component make sure you have exported it in the `src/components/index.ts` file. Doing so allows the component to be compiled into the final bundle using rollup.

```
// src/components/index.ts
export * from './MyComponent';
export * from './SomeOtherComponent';
```

You can develop your new component using storybook as your playground. Once you have added the `.stories.tsx` file for you new component, you can run `yarn storybook` to start the service.

## Tests

```
$ yarn test
```

With coverage

```
$ yarn test:coverage
```

Watch

```
$ yarn test:watch
```

## Prettier

```
$ yarn format
```

Validate project formatting

```
$ yarn format:check
```

## Lint

```
$ yarn lint
```

## Storybook

```
$ yarn storybook
```

## Building your library

```
$ yarn build
```

The build output will go into the `dist` directory

## Github Actions

This project contains a github action workflow called `ci.yaml`. This workflow runs a job that will test, lint, and build the code. If the code passes and you are on the `master` branch it will also run the publish job to send the new version off to npm.

## Publishing your Library on NPM

Once you have created an account on NPM create a publish key and add it to your github secrets as `NPM_TOKEN` [Semantic Release](https://semantic-release.gitbook.io/) will take care of the publishing and versioning for you via the `.github/workflows/ci.yaml` `Publish` job.

> Note: You will need to update the package.json name property with the correct name your library will be using on npm.

## Committing Code Changes

The commit messages are critical for allowing the [Semantic Releases](https://semantic-release.gitbook.io/) to work correctly. We use the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) commit message format. This is a small excerpt from the main docs:

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

1. **fix**: a commit of the type `fix` patches a bug in your codebase (this correlates with PATCH in semantic versioning).
2. **feat**: a commit of the type `feat` introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
3. **BREAKING CHANGE**: a commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A `BREAKING CHANGE` can be part of commits of any type.
4. types other than `fix:` and `feat:` are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
5. footers other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to git trailer format.

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in semantic versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays.`

#### Examples

##### Commit message with description and breaking change footer

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

##### Commit message with ! to draw attention to breaking change

```
refactor!: drop support for Node 6
```

##### Commit message with both ! and BREAKING CHANGE footer

```
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

##### Commit message with no body

```
docs: correct spelling of CHANGELOG
```

##### Commit message with scope

```
feat(lang): add polish language
```

##### Commit message with multi-paragraph body and multiple footers

```
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```
