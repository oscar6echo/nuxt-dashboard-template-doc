# Install

To build a dashboard from the [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template) install the following software. 

## yarn

[yarn](https://yarnpkg.com/en/) is a package manager for Javascript.  
It allows to download, install and use the Javascript [npm packages](https://www.npmjs.com/) listed in the [package.json](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/package.json) at the root of the [nuxt-dashboard-template](TBD) repo - and their own dependencies.  
It is the standard tool for modern web development, compatible with [npm](https://www.npmjs.com/package/npm) but faster, more secure, more reliable.

Cf. the [official yarn install instructions](https://yarnpkg.com/en/docs/install#mac-stable).

## Python

Python is usually not required for frontend web development.  
However the **nuxt-dashboard-template** is specific in several respect:

- It caters to unusual single file deployments  
    While suboptimal in some constrained corporate context this may be the only option
- It contains 2 CSS frameworks to choose from
- It manages the dashboard companion static files

This entails extra file manipulation not covered by yarn.  
So Python is used to copy/move/merge files on disk.

A fast and convenient way to install Python is to use the **Miniconda** distribution.

Cf. the [official Miniconda install instructions](https://docs.conda.io/en/latest/miniconda.html).

## VS Code

Any text editor can do but [VS Code]((https://code.visualstudio.com/)) is so powerful and flexible that it can significantly improve your workflow - beyond just the **nuxt-dashboard-template** case, of course.  
In particular see the [Debug section](../workflow/debug).  

