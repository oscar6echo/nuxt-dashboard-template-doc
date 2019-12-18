# Get Started

After you have installed **yarn**, **Python** and **VSCode**, as described in the [Install section](./install) you can download and install the [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template) and start building your dashboard.

## Download

Download the [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template) Github repo:

```bash
# in your working directory
git clone /Users/Olivier/Documents/dev/nuxt-playground/nuxt-dashboard-template
```

Or better: Fork the github repo and `git clone` your fork so you can save your work.


## Install

### Javascript

Install all the node (i.e. Javascript) packages required:

```bash
# in your working directory
cd nuxt-dashboard-template
yarn install
```

This will create a folder `node_modules/` containing all the npm packages the **nuxt-dashboard-template** depends on, the direct dependencies of which are listed in the [package.json](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/package.json) file.

::: tip
This will save many thousand files in the folder `node_modules/`.  
So it is significantly faster on a local disk than a network drive.
:::

### Python

Install the `build_frontend` Python package:

```bash
# in your working directory
cd nuxt-dashboard-template/python/build-frontend
pip install . # for regular install
pip install -e . # for dev install
```

The difference between a regular install and dev install is:

- **Regular install**: the package files are copied to your `site-packages` directory. Use this command to find it: `python -c "import site; print(site.getsitepackages())"`.
- **Dev install**: An `.egg-link` file is created in the `site-packages` linking to the source directory. So that any change in the source is immediately effective (i.e. the next time you import the package, or immediately if you use the [autoreload](https://ipython.readthedocs.io/en/stable/config/extensions/autoreload.html) magic in a [Jupyter](https://jupyter.org/) notebook).

The Python package `build_frontend` contains the following helper modules:

- **select_framework**  
    - Substitute the top folders `components/`, `layouts/`, `pages/` by those under `/nuxt-dashboard-template/python/frameworks/(bootstrap|vuetify)`.  
    - The content of the substituted top folders is deleted in the process.  
- **copy_cdn_static_to_dist`**  
    - Copy files under folder `cdn/` to folder `dist/`.
- **build_single_file**  
    - Build a single `index.html` file out of the contents of folders `dist/` and `static/`.  
    - The folder `dist`is the product of the `yarn build-*` command.  
    - The single file is located in folder `python/template`.  
    - This also copies all files in `cdn/` to `python/template/`
- **serve_dir_dist**  
    - Start a web server in folder `dist/`.  
    - Equivalent of `yarn start`.
- **serve_single_file**  
    - Start a web server in folder `python/template/`.

## Choose Framework

Two CSS frameworks are available:

- [bootstrap](https://getbootstrap.com/) via [bootstrap-vue](https://bootstrap-vue.js.org/): The first and probably still most widely used framework.
- [vuetify](https://vuetifyjs.com/en/): The most popular and feature-complete in the [Vue](https://vuejs.org/) ecosystem.

Pick one:

```bash
# in your working directory
cd nuxt-dashboard-template/python/scripts
python select_framework_vuetify.py # for vuetify
python select_framework_bootstrap.py # for bootstrap
```

::: danger
This will replace the root folders `components/`, `layouts/`, `pages/` by those in folder `python/framework/vuetify` or `python/framework/bootstrap`.  
If you have updated these 3 root folders, save them before.
:::

## Start Dev

Launch the [nuxt dev server](https://nuxtjs.org/guide/commands/#list-of-commands):

```bash
# in your working directory
yarn dev
```

Launch the CDN server from another terminal:

```bash
# in your working directory
yarn cdn
```

Open browser to [http://localhost:3000](http://localhost:3000).

You can now adapt the source code to build your dashboard.  
For more info see the [Structure section](../structure/general).


## Demo

To see the demo dashboard built as single file:

```bash
# in your working directory
cd python/scripts
python serve_single_file.py
```

Open browser to [http://localhost:8080](http://localhost:8080).
