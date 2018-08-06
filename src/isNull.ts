import _isNull from './internal/_isNull';
import _buildResults from './internal/_resultsFactory';

export default () => value => _buildResults(value === null);