const _specFactory = Object.assign.bind(null, { isRommel: true });

const isOptional = () => _specFactory({ allowUndefined: true });
const isRequired = () => _specFactory({ allowUndefined: false });
const allowUndefined = isOptional;
const rejectUndefined = isRequired;
const allowNull = () => _specFactory({ allowNull: true });
const rejectNull = () => _specFactory({ allowNull: false });
const shouldCast = shouldCast => _specFactory({ shouldCast });

export default _specFactory;