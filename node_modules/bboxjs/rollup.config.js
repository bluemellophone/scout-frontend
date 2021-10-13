import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/bbox.js',
  output: [{
    file: 'dist/index.js',
    format: 'cjs',
    strict: false
  },
  {
    file: 'dist/bbox.js',
    format: 'iife',
    name: 'bboxjs',
    strict: false
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ]
};