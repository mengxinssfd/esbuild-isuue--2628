const esbuild = require('esbuild');

const resolve = (p) => require('path').resolve(__dirname, '../' + p);

const entryFile = resolve('src/index.ts');
const outfile = resolve(`dist/index.cjs.js`);
const tsconfig = resolve('tsconfig.json');

esbuild.build({
    entryPoints: [entryFile],
    bundle: true,
    outfile,
    format: 'cjs',
//    target: 'es2017',
    tsconfig,
});
