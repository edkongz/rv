import curry from 'ramda/es/curry';
import length from 'ramda/es/length';

export default curry((len, value) => length(value) >= len);
