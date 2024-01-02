// eslint-disable-next-line import/no-extraneous-dependencies
const defaultPlugin = require('@commitlint/config-conventional');

const getRules = (input) => {
    if (typeof input === 'string') {
        return [input];
    }
    return input;
};

const overrideRules = (ruleName, override, isOverride = false) => {
    const a = defaultPlugin.rules[ruleName];
    return {
        [ruleName]: [a[0], a[1], isOverride ? override : [...getRules(a[2]), ...override]],
    };
};

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        ...overrideRules('type-enum', ['RELEASING']),
        ...overrideRules('type-case', ['upper-case']),
        ...overrideRules('subject-case', [], true),
    },
};
