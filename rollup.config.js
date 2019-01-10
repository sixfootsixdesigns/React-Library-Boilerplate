import typescript from 'rollup-plugin-typescript2';
import packageJson from 'rollup-plugin-generate-package-json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const globalLibs = {
  "classnames": "classnames",
  "react": "React"
};
const externalLibs = [
  'classnames',
  'react'
];

export default {
  input: './src/index.ts',
  external: externalLibs,
  output: [
    { name: 'lib', globals: globalLibs, file: `./dist/${pkg.browser}`, format: 'umd' },
    { name: 'lib', globals: globalLibs, file: `./dist/${pkg.main}`, format: 'cjs' },
    { name: 'lib', globals: globalLibs, file: `./dist/${pkg.module}`, format: 'es' }
  ],
  plugins: [
    postcss({
      modules: false
    }),
    resolve(),
    commonjs(),
    typescript({
      declaration: true,
      exclude: [
        './src/**/*.spec.*',
        './src/**/*.stories.*'
      ]
    }),
    packageJson({
      inputFile: './package.json',
      outputFolder: './dist',
      baseContents: {
        "name": pkg.name,
        "version": pkg.version,
        "description": pkg.description,
        "author": pkg.author,
        "homepage": pkg.homepage,
        "license": pkg.license,
        "repository": pkg.repository,
        "bugs": pkg.bugs,
        "private": false,
        "main": pkg.main,
        "module": pkg.module,
        "browser": pkg.browser,
        "types": pkg.types,
        "peerDependencies": pkg.peerDependencies
      }
    })
  ]
};
