import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  input: 'src/isObject.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'rv',
  },
  plugins: [resolve({ module: true }), isProduction && uglify()],
};
