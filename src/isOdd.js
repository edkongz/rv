import complement from 'ramda/es/complement';
import isDivisibleBy from './isDivisibleBy';

export default complement(isDivisibleBy(2));
