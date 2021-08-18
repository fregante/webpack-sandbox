import './dep-pure-a';
import './dep-side-effects-a';
import {logPureB} from './dep-pure-b';
import {logSideB} from './dep-side-effects-b';

console.log('In main', logPureB, logSideB);
