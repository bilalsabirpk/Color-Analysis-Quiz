// Minifies public/quiz-logic.js -> public/quiz-logic.min.js (the file the
// site loads). Runs automatically before `npm run build` and `npm run dev`.
// Edit public/quiz-logic.js; never edit the .min.js file by hand.
import { readFile, writeFile } from 'node:fs/promises';
import { minify } from 'terser';

const src = await readFile(new URL('../public/quiz-logic.js', import.meta.url), 'utf8');
const out = await minify(src, { compress: true, mangle: true, format: { comments: false } });
if (!out.code) throw new Error('quiz-logic.js could not be minified');
await writeFile(new URL('../public/quiz-logic.min.js', import.meta.url), out.code + '\n');
console.log(`quiz-logic.min.js: ${src.length} -> ${out.code.length} bytes`);
