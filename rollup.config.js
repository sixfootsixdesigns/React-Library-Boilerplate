import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const globals = {
  classnames: 'classnames',
  react: 'React',
};

export default {
  input: './src/index.ts',
  external: {
    ...Object.keys(pkg.dependencies || {}),
  },
  output: [
    {
      file: `./dist/${pkg.main}`,
      format: 'cjs',
      globals,
    },
    {
      file: `./dist/${pkg.module}`,
      format: 'es',
      globals,
    },
    {
      file: `./dist/${pkg.browser}`,
      format: 'iife',
      name: 'lib',
      globals,
    },
  ],
  plugins: [postcss(), typescript(), terser()],
};
