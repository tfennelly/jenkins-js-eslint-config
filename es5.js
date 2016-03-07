module.exports = {
    extends: [
        'eslint-config-airbnb/legacy',
        '@jenkins-cd/eslint-config-jenkins/rules/jenkins'
    ].map(require.resolve),
    rules: {}
};