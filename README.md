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

You can develope your new component using storybook as your playground. Once you have added the `.stories.tsx` file for you new component, you can run `yarn storybook` to start the service.

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

The commit messages are critical for allowing the [Semantic Releases](https://semantic-release.gitbook.io/) to work correctly. We use the `ESLINT` commit message format which is as follows:

```
Tag: Short description (fixes #1234)

Longer description here if necessary
```

The first line of the commit message (the summary) must have a specific format.

The `Tag` is one of the following:

- `Fix` - for a bug fix.
- `Update` - either for a backwards-compatible enhancement or for a rule change that adds reported problems.
- `New` - implemented a new feature.
- `Breaking` - for a backwards-incompatible enhancement or feature.
- `Docs` - changes to documentation only.
- `Build` - changes to build process only.
- `Upgrade` - for a dependency upgrade.
- `Chore` - for refactoring, adding tests, etc. (anything that isn't user-facing).

The message summary should be a one-sentence description of the change, and it must be 72 characters in length or shorter. If the pull request addresses an issue, then the issue number should be mentioned at the end. If the commit doesn't completely fix the issue, then use `(refs #1234)` instead of `(fixes #1234)`.

Here are some good commit message summary examples:

```
Build: Update Travis to only test Node 0.10 (refs #734)
Fix: Semi rule incorrectly flagging extra semicolon (fixes #840)
Upgrade: Esprima to 1.2, switch to using comment attachment (fixes #730)
```

The commit message format is important because these messages are used to create a changelog for each release. The tag and issue number help to create more consistent and useful changelogs.
