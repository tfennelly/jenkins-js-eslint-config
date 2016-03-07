module.exports = {
    extends: [
        'eslint-config-airbnb',
        '@jenkins-cd/eslint-config-jenkins/rules/jenkins'
    ].map(require.resolve),
    rules: {}
};