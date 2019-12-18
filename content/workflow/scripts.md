# Scripts


The entry points to run commands to dev, buid or deploy the Nuxt app are:
- file [package.json](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/package.json) for Javascript scripts
- folder [python/scripts](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/scripts) for Python scripts


## Javascript

The following commands can be run in the [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template) repo top folder.  
(where file [package.json](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/package.json) is)


- `yarn cdn`
  - Launch server for files in folder `cdn/` 
  - Keep this command running while developing.
- `yarn lint`
  - Run linter to check for errors in source code.
  - Run every now and then. Most likely your editor does it too.
- `yarn lintfix`
  - Run linter to check for errors in source code and fix what can be automatically.
  - Run every now and then.
- `dump-conf-[f]`
  - Dump webpack config produced by Nuxt to file `nuxt-webpack-config-dump.json`.
  - Launch `nuxt dev` and stop after dump.
- `yarn dev-[f]`
  - Launch `nuxt dev` server, with hot reload.
  - Keep this command running while developping.
- `yarn dev-debug-[f]`
  - Launch `nuxt dev` server in debug mode.
  - See the [Debug section](./debug) for the debug workflow with VS Code.
- `yarn build-dir-local-[f]`
  - Launch `nuxt build` with [router base](https://nuxtjs.org/api/configuration-router/#base) = `/`.
  - It creates folder `dist/` which can be served from `/`.
  - It must be followed by script `serve_dir_dir.py` or `yarn start`.
- `yarn build-sf-local-[f]`
  - Launch `nuxt build` with [router base](https://nuxtjs.org/api/configuration-router/#base) = `/`.
  - This command only create `dist/`.  
  - It must be followed by script `build_single_file.py` and `serve_dir_template.py`.
- `yarn build-sf-[f]`
  - Launch `nuxt build` with [router base](https://nuxtjs.org/api/configuration-router/#base) = `/[SF_SHORTNAME]/`.
  - This command only create `dist/`.  
  - It must be followed by script `build_single_file.py` and a deployment to a web server under `/[SF_SHORTNAME]/`.
- `yarn build-ghp-[f]`
  - Launch `nuxt build` with [router base](https://nuxtjs.org/api/configuration-router/#base) = `/[GH_REPO]/`.
  - This command only create `dist/`.  
  - It must be followed by script `deploy-ghp`.
- `yarn start`
  - Launch `nuxt start` to serve folder `dist/` from `/`.
- `yarn deploy-ghp`
  - Copy folder `dist/` to repo branch `gh-pages` root.
  - Results in static site served from `https://oscar6echo.github.io/nuxt-dashboard-template`.


In the scripts above `[f]` is either:
- `v` for **vuetify**
- `b` for **bootstrap**.  


## Python


The following commands are available from the [python/scripts](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/scripts).

To run these scripts you must have installed the `build_frontend` Python package as described in the [Get Started section](../get-started/start).


- [analyze_dist.py](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/analyze_dist.py)  
  - Displays number of distinct files and content size for `.html` and `.js` files in folder `dist/`.
  - Essentially it enables to check that all `.html` files are identical and quickly view the name and sizes of the `.js` files.
- [build_single_file.py](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/build_single_file.py)  
  - Build a single `.html` file that contains the app entirely.
  - This script
    - copies files `ìndex.html`, `app.js`, `commons.app.js`, `runtime.js` from folder `dist/` and file `favicon.ico` from folder `static/` to folder `python/workspace/`.
    - merge all these files into a single file `index.html` saved in folder `python/template/`.
- [copy_cdn_static_to_dist.py](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/copy_cdn_static_to_dist.py)  
  - Copy all files in `cdn/` to `dist/`.
  - This is useful to make the dashboard *companion* files available in the case of the app is served from folder `dist/`.
- [select_framework_bootstrap.py](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/select_framework_bootstrap.py)  
  - Deletes folders `components/`, `layouts/`, `pages/` and replace them by the same named folders located in `python/framework/bootstrap/`.
- [select_framework_vuetify.py](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/select_framework_vuetify.py)  
  - Deletes folders `components/`, `layouts/`, `pages/` and replace them by the same named folders located in `python/framework/vuetify/`.
- [serve_dir_dist.py](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/serve_dir_dist.py)  
  - Start a web server (`python -m http.server`) from folder `dist/`.
  - This folder typically contains the product of `nuxt build` and a copy of the files in `cdn/`.
- [serve_dir_template.py](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/serve_dir_template.py)  
  - Start a web server (`python -m http.server`) from folder `python/template/`.
  - This folder should contain the product of `build_single_file.py` and a copy of the files in `cdn/`.
    

