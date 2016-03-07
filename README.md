[ESLint](http://eslint.org/) configurations for Jenkins JavaScript projects.

We are hoping that people will try taking these and using them as they are. It would be nice
for all Jenkins related JavaScript code to follow the same standards as much as possible.

> __Note__: If using `@jenkins-cd/js-builder`, there's typically no need to specify a `.eslintrc` file. `@jenkins-cd/js-builder` will automatically lint using one of the following configurations, using the builder instance `lang` setting (default `es6`), or will use `react` if it detects `.jsx` files in the builder source paths. 

# ES6

`.eslintrc`:
```javascript
{
    "extends": "@jenkins-cd/jenkins/es6"
}
```

> __Note__: Applied by default if using `@jenkins-cd/js-builder` i.e. no need to specify the `.eslintrc` file. 

# ES5

`.eslintrc`:
```javascript
{
    "extends": "@jenkins-cd/jenkins/es5"
}
```

> __Note__: Applied by `@jenkins-cd/js-builder` if the builder instance lang is `es5` (`builder.lang('es5')`). 

# React

`.eslintrc`:
```javascript
{
    "extends": "@jenkins-cd/jenkins/react"
}
```

> __Note__: Applied by `@jenkins-cd/js-builder` if the builder instance lang is `react` (`builder.lang('react')`), or if `.jsx` files are detected in any of the source paths. 
