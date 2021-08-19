import {logSideA} from './dep-side-effects-a';
import type {logSideB} from './dep-side-effects-b';

const regularImport: typeof logSideA = () => {};
const typeImport: typeof logSideB = () => {};
console.log('In main', regularImport, typeImport);
