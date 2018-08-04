import _isNull from './internal/_isNull';
import _buildResults from './internal/_buildResults';

export default () => value => _buildResults(value === null);