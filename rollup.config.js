import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/isObject.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'rv',
  },
  plugins: [
    resolve({
      module: true,
    }),
  ],
};
