module.exports = {
    extends: [
        'eslint-config-airbnb/base',
        '@jenkins-cd/eslint-config-jenkins/rules/jenkins'
    ].map(require.resolve),
    rules: {}
};