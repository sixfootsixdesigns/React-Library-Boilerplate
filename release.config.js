module.exports = {
  branches: ['master', 'next'],
  repositoryUrl: 'https://github.com/sixfootsixdesigns/React-Library-Boilerplate',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist',
      },
    ],
  ],
};
