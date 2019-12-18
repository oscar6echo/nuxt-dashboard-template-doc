# Phases


The [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template) makes is almost instant to start the **development** phase.

The **build** and **deploy** phases must be consistent: A specific build implies a specific deployment.  
They are also quick with the scripts provided.

## Dev

The develop phase is independent of the subsequent type of build/deploy.

First follow the instructions in the [Install section](../get-started/install).  
Then:

```bash
# clone repo
git clone https://github.com/oscar6echo/nuxt-dashboard-template.git

# choose CSS framework
python select_framework_vuetify.py    ## for vuetify
python select_framework_bootstrap.py  ## for bootstrap

# launch dev server
yarn dev-v   # for vuetify
yarn dev-v   # for bootstrap

# launch cdn server - in other terminal
# if dashboard has "companion" data files
yarn cdn
```

Open a browser to `http://localhost:3000`.  
With the "hot-reload" dev server running, the changes in the source code are instantly visible.

## Build

Two types of deployments are possible:
- as **directory** - standard practice in web development - provided by Nuxt
- as **single file** - to cater to specific corporate constraints - with extra scripts

Nuxt performs the build process for deployment as **directory**.  
The **single file** deployment is then performed, if necessary, by [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template) scripts.

After you have completed the dev phase you can choose of the build @ deploy paths below.

### Dir-Local

This means "directory local".  
The result of this build is folder `dist/` to be served under `/`.

```bash
# build
yarn build-dir-local-[f]  # [f] = b or v for resp. bootstrap or vuetify

# add companion files
python copy_cdn_static_to_dist.py

# deploy
yarn start
# or
cd python/scripts
python serve_dir_dist.py
```


### SF-Local

This means "single file local".  
The result of this build is folder `python/template/` to be served under `/`.  
It contains the dashboard as a single file `ìndex.html` and the companion files from `cdn/`.

```bash
# build
yarn build-dir-local-[f]  # [f] = b or v for resp. bootstrap or vuetify

# deploy
cd python/scripts
python serve_dir_template.py
```

### SF

This means "single file".  
In [nuxt.config.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/nuxt.config.js) adjust the following variables to your case:  
- `SF_SHORTNAME`
- `SF_SERVICE`
- `SF_PREFIX`

The result of this build is folder `python/template/` to be served under `/SF_SHORTNAME/`.  
It contains the dashboard as a single file `ìndex.html` and the companion files from `cdn/`.

```bash
# build
yarn build-dir-local-[f]  # [f] = b or v for resp. bootstrap or vuetify

# deploy
# specific to your organization
```

### GHP

This means "github pages".  
In [nuxt.config.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/nuxt.config.js) adjust the following variables to your case:  
- `GH_USERNAME`
- `GH_REPO`

The result of this build is folder `dist/` to be served under `/GH_REPO/`.  
The deploy script copies folder `dist/` to the root of the repo `gh-pages` branch.  
Which makes it available at `http://github.GH_USERNAME.io/GH_REPO`


```bash
# build
yarn build-ghp-[f]  # [f] = b or v for resp. bootstrap or vuetify

# add companion files
python copy_cdn_static_to_dist.py

# deploy
yarn deploy-ghp
```

