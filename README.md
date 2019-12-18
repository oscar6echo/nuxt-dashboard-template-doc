# Doc for nuxt-dashboard-template

This folder contains the source for the [VuePress](https://vuepress.vuejs.org/)-powered documentation for the [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template).

The built documentation is in folder [`./_build/`](./_build). It is copied to the branch `gh-pages`, from which it is [served as static content by Github](https://help.github.com/en/enterprise/2.13/user/articles/configuring-a-publishing-source-for-github-pages).

Link to documentation: [https://oscar6echo.github.io/nuxt-dashboard-template-doc/](https://oscar6echo.github.io/nuxt-dashboard-template-doc/).

## 1 - Install

From terminal:

```bash
# in folder ./
$ yarn install
```

## 2 - Develop

From terminal:

```bash
# in folder ./
$ yarn doc:dev
```

## 3 - Build

From terminal:

```bash
# in folder ./
$ yarn doc:build
```

## 4 - Deploy

### 4.1 - Manually

You can manually deploy as follows:

```bash
# in folder ./_build/
git add .
git commit -m 'deploy'
git push

# deploy to https://oscar6echo.github.io/nuxt-dashboard-template/
git push -f git@github.com:oscar6echo/nuxt-dashboard-template.git master:gh-pages
# or equivalently from top level
git subtree push --prefix _build/ origin gh-pages

# if necessary
git push origin --delete gh-pages
```

Or semi manually - simpler and faster:

```bash
# in folder ./
yarn doc:deploy
```

### 4.2 - Automatically

> TBD - with [Github Actions](https://github.com/features/actions)
