const _validateRules = (specs, rules, value) => {
  for (let rule of rules) {
    let results = rule(value, specs);
    if (!results) return results;
  }
};

export default _validateRules;
