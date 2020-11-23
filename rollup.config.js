import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  input: './src/index.ts',
  output: [
    {
      file: `./dist/${pkg.main}`,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: `./dist/${pkg.module}`,
      format: 'es',
      sourcemap: true,
    },
    {
      file: `./dist/${pkg.browser}`,
      format: 'iife',
      name: 'lib',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    resolve(),
    commonjs(),
    postcss(),
    typescript({ tsconfig: 'tsconfig.build.json' }),
    terser(),
    copy({
      targets: [
        { src: 'LICENSE', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
        {
          src: 'package.json',
          dest: 'dist',
          transform: (content) => {
            const { scripts, devDependencies, husky, engines, ...keep } = JSON.parse(
              content.toString()
            );
            return JSON.stringify(keep, null, 2);
          },
        },
      ],
    }),
  ],
};
