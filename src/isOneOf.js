import curry from '../node_modules/ramda/es/curry';
import contains from 'ramda/es/contains';
import flip from 'ramda/es/flip';
import flatten from 'ramda/es/flatten';
import __ from '../node_modules/ramda/es/__';

// FIXMEreconsidering
//export default (...args) => contains(__, flatten(args));

export default flip(contains);
