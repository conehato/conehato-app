module.exports = {
  root: true,
  extends: ['universe', 'universe/native'],
  rules: {
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'index', 'sibling']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
  },
};
