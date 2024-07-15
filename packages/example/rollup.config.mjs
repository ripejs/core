import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].js',

    },
    external: [
        'negotiator',
        'ipaddr.js',
        'dayjs',
        'http-status-emojis',
        'mime',
    ],
    plugins: [nodeResolve(), typescript()],
};