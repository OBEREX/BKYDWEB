
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, './src'),
        'figma:asset/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png': path.resolve(__dirname, './src/assets/3c60352fc04f4c23b7ff3320566bb0abf5635e82.png'),
        'figma:asset/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png': path.resolve(__dirname, './src/assets/348d8f61d0da43ecb3eb0cb2c4444d0d03c87b09.png'),
        'figma:asset/15a3ea5e5cc29b422a71f64488406c0fb8976143.png': path.resolve(__dirname, './src/assets/15a3ea5e5cc29b422a71f64488406c0fb8976143.png'),
        'figma:asset/0be3546621a0c82f467a1065092444bbcf328c11.png': path.resolve(__dirname, './src/assets/0be3546621a0c82f467a1065092444bbcf328c11.png'),
        'figma:asset/127beeb9b5071e3939c158f9bf65908c054cbadc.png': path.resolve(__dirname, './src/assets/127beeb9b5071e3939c158f9bf65908c054cbadc.png'),
        'figma:asset/b20258fa30547b825decc6e7cca13dc27e17bfba.png': path.resolve(__dirname, './src/assets/b20258fa30547b825decc6e7cca13dc27e17bfba.png'),
        'figma:asset/ecdf2ef4526036646ca20c1a56e7d8cb806f4378.png': path.resolve(__dirname, './src/assets/ecdf2ef4526036646ca20c1a56e7d8cb806f4378.png'),
        'figma:asset/f347921dcfe3a7a62552cd9726521a8fb8479237.png': path.resolve(__dirname, './src/assets/f347921dcfe3a7a62552cd9726521a8fb8479237.png'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });