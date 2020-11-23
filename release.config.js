module.exports = {
  branches: ['master', 'next'],
  repositoryUrl: 'https://github.com/sixfootsixdesigns/React-Library-Boilerplate',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'eslint',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'eslint',
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist',
      },
    ],
  ],
};
