import _buildResults from './internal/_buildResults';
import _isNull from './internal/_isNull';
import shouldValidate from './internal/_shouldValidate';

const validateNull = value => _buildResults(_isNull(value));

export default shouldValidate(validateNull);
