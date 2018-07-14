import curry from 'ramda/es/curry';
import pipe from 'ramda/es/pipe';
import length from 'ramda/es/length';

export default curry((len, value) => length(value) <= len);
