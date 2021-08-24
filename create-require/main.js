import { createRequire } from 'module';
const require = createRequire(import.meta.url);
console.log(require('./file.json'));
