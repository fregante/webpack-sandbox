import { PACKAGED } from 'tree-shaking-exports';
import { SINGLE } from './imports/single.js';
import * as star from './imports/star.js';

console.log('sup');

if (star.STAR) {
    console.log('`import * as star` not tree-shaken');
}

if (SINGLE) {
    console.log('`import { SINGLE }` not tree-shaken');
}

if (PACKAGED) {
    console.log('`import from "name"` not tree-shaken');
}
