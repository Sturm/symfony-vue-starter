module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    indent: ['error', 2],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0, // temporary
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
        ],
      },
    ],
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       paths: ['assets'],
  //       extensions: ['.js'],
  //     },
  //   },
  // },
};
