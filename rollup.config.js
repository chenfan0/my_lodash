import typescript from '@rollup/plugin-typescript'

export default {
  input: './index.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/bundle.cjs.js'
    },
    {
      format: 'es',
      file: 'dist/bundle.esm.js'
    }
  ],
  plugins: [typescript()]
}
