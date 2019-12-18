# General

For a general introduction to the Nuxt application directory structure, read their [official doc](https://nuxtjs.org/guide/directory-structure).  
Below is a description of the directory structure in the context of [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template).

## Api

The folder [api](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/api) contains functions to make HTTP requests.  
It has one example such functions to request static files located in folder [cdn/](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/cdn) and served from there by command `yarn cdn`.  
It also contains `api-[name]-dataclass.js` files to format the data received by an API to the user components interface. This enables to circumscribe data shaping to a single file.

This is not a Nuxt folder.  

## Assets

The folder [assets](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/assets) contains:

- folder [logo](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/assets/logo): images
- folder [scss](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/assets/scss): global SCSS variables
- d3 [d3](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/assets/d3): A manual aggregation of all [d3 sub-modules](https://github.com/d3/d3/blob/master/API.md) used in user components.

## Cdn

The folder [cdn](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/cdn) contains data files "companions" of the dashboard.  
Some times dashboards retrieve data directly from APIs. Other times, data files are built and posted on a CDN for consumption by the dashboard.  
The folder contains an example of data file in [json](https://jsonformatter.curiousconcept.com/), [markdown](https://en.wikipedia.org/wiki/Markdown), [jpg](https://en.wikipedia.org/wiki/JPEG) and [png](https://en.wikipedia.org/wiki/Portable_Network_Graphics) formats.

This is not a Nuxt folder.  

## Components

The folder [components](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/components) contains [Vue components](https://vuejs.org/v2/guide/components.html) files.  

The components in sub-folder [generic/](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/components/generic) are not meant to be changed, except `nav-bar.vue`and `footer.vue` once to adapt to your organization.

The other components are the contents of the tab / sub-tabs, a collection of examples to demonstrate usual patterns:

- To get data from a REST API with [axios](https://axios.nuxtjs.org/) see:
  - [tab-plot.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-plot.vue)
  - [tab-weather.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-weather.vue)
- To get data from a REST API with [fech](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) see:
  - [tab-bitcoin-plot.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-bitcoin-plot.js)
  - [tab-wiki-table.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-bitcoin-plot.js)
- To get data from a GraphQM API with [apollo](https://github.com/nuxt-community/apollo-module) see:
  - [tab-table-agg.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-table-agg.vue)
- To connect to a [Web Socket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) see:
  - [tab-table-agg.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-table-agg.vue)
- To display a table with [ag-grid](https://www.ag-grid.com/) see:
  - [tab-table-agg.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-table-agg.vue)
- To display a plot with [highcharts](https://www.highcharts.com/) see:
  - [tab-plot.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-plot.vue)
  - [tab-realtime.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-realtime.vue)
- To use Browser APIs see:
  - [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API):
    - [tab-map-globe.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-map-globe.vue)
    - [tab-map-globe.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-map-globe.js)
    - [tab-slider2d.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-slider2d.vue)
  - [geolocalisation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API):
    - [tab-slider2d.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-slider2d.vue)
  - [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API):
    - [tab-portrait.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-portrait.vue)
- To see [d3js](https://d3js.org/) examples see:
  - [tab-bitcoin-plot.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-bitcoin-plot.js)
  - [tab-map-globe.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-map-globe.js)
  - [tab-portrait.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-portrait.vue)
- To separate the `.js` part of a `.vue` file see:
  - [tab-map-globe.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-map-globe.vue)
  - [tab-map-globe.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-map-globe.js)
  - [tab-bitcoin-plot.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-bitcoin-plot.vue)
  - [tab-bitcoin-plot.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-bitcoin-plot.js)

## Credentials

The folder [credentials](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/credentials), if present, contains the software license used in the app.

This is not a Nuxt folder.  

## Dist

The folder [dist](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/dist), if present, contains the built application by command `yarn build-*`.  

It can be served by script `yarn start` or `serve_dir_dist.py`.  
It is the starting point of script `build_single_file.py`.  

## Js

The folder [js](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/js) contains the Javascript modules used in the app.  

The sub-folder [generic](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/js/generic) is not meant to be modified as it powers the 2-level dashboard system and the storage of app state in the query string of the url.  


:::warning
The sub-folder [conf](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/js/conf) contains the structure of the dashboard.  
This structure must be consistent with that of the [pages](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/pages) folder.
:::

This is not a Nuxt folder.  

## Layouts

The folder [layouts](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/layouts) contains the:

- Top level component of the app: [default.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/layouts/default.vue)
- Fallback component in case of error: [error.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/layouts/error.vue)

They are not meant to be modified.

## Middleware

The folder [layouts](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/middleware) contains Javascript modules to be executed before a route change.  

It contains a rerouting mechanism to go to the right sub-tab, where necessary.  

## Pages

The folder [pages](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/pages) contains the structure of the dashboard in tabs and sub-tabs.  

:::warning
The structure of folder [pages](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/pages) must match the [js/generic/conf/dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/js/conf/dashboard.js) file.
:::

Top level [index.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index.vue) is the component referenced in [default.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/layouts/default.vue) as `<nuxt />`.  
It is not meant to be changed.


### First Level Tab

To create a 1st-level tab  e.g. "slider2d" tab you need create the following files:

- [index/slider2d.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index/slider2d.vue)
- [index/slider2d/index.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index/slider2d/index.vue)

File **index/slider2d.vue** is a template with only param `path` to be adjusted:

```js
pathObj: { level: 2, path: 'slider2d' }
```

File **index/slider2d/index.vue** is a template with only the component imported (from folder [components](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/components)) and displayed to be adjusted.

```js
import TabSlider2D from '~/components/tab-slider2d';
```

### Second Level Tab

To create a 2nd-level tab e.g. "countries/map" tab you need create the following files:

- [index/countries.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index/countries.vue)
- [index/countries/index.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index/countries/index.vue)
- [index/countries/map.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index/countries/map.vue)

File **index/countries.vue** is a template with only param `path` to be adjusted:

```js
pathObj: { level: 2, path: 'countries' }
```

File **index/countries/index.vue** is a template.  
It only contains a rerouting function towards the sub-tabs of **/countries**.

```js
export default {
  middleware: 'active-route'
};
```

File **index/countries/map.vue** is a template with only the component imported (from folder [components](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/components)) and displayed to be adjusted.

```js
import TabMap from '~/components/tab-map';
```


## Plugins

The folder [plugins](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/plugins) contains various folders and `.js` files which are executed at app creation.  

They typically include configuration files for modules used throughout the app.


## Python

The folder [python](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python) contains several folders:
- [build-frontend](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/build-frontend): A Python package to perform various operations from building the app as a single file to launching web servers in specific folders.  
- [frameworks](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/frameworks): Contains folders [bootstrap](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/frameworks/bootstrap) and [vuetify](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/frameworks/vuetify) each with their versions of folders **components**, **layouts**, **pages**.  
- [scripts](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/scripts): Contains following scripts, most based on the [build_frontend](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/build-frontend/build_frontend) Python package:
    - analyze_dist.py
    - build_single_file.py
    - copy_cdn_static_to_dist.py
    - select_framework_bootstrap.py
    - select_framework_vuetify.py
    - serve_dir_dist.py
    - serve_dir_template.py
- [template](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/template): Contains the output of script **build_single_file.py**
- [workspace](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/template): Temporary folder created and used by script **build_single_file.py**

This is not a Nuxt folder.  


## Static

The folder [static](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/static) contains the favicon and potentially other files served "as is".  

The folder contains:
- the [favicon](https://en.wikipedia.org/wiki/Favicon)
- a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) `.js`file.


## Store

The folder [store](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/store) contains `.js` files managing the app [Vuex store](https://nuxtjs.org/guide/vuex-store):
- **dashboard.js** to manage dashboard default routes - See [Routing section](./routing).
- **globe.js** used by user component **tab-map-globe.vue** - as an example.


## nuxt.config.js

The file [nuxt.config.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/nuxt.config.js) is the configuration file for Nuxt.  
See the [Config section](../workflow/config) for more info.


## package.json

The file [package.json](TBD) is the [npm config file](https://docs.npmjs.com/creating-a-package-json-file) for the [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template) package.  


Essentially it contains the dependencies of this package, and those for its development, and a number of convenience scripts:
- `cdn`: Serve folder [cdn/](https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/cdn)
- `lint`: : [Lint](https://en.wikipedia.org/wiki/Lint_(software)) app source code
- `lintfix`: Lint and automatically fix what can be
- `dump-conf-[f]`: Dump webpack config produced by Nuxt
- `dev-[f]`:  Launch Nuxt dev server
- `dev-debug-[f]`: Launch Nuxt dev server in debug mode - See [Debug section](../workflow/debug)
- `build-dir-local-[f]`: Launch Nuxt build for local serve as directory
- `build-sf-local-[f]`: Launch Nuxt build for local serve as single file
- `build-sf-[f]`: Launch Nuxt build for production as directory
- `build-ghp-[f]`: Launch Nuxt build for [github-pages](https://pages.github.com/) deployment
- `start`: Launch server with root `dist/`
- `deploy-ghp`: Deploy `dist/` on the gh-pages branch of the repo

In the scripts above `[f]` means framework and can be:
- `b` for **bootstrap**
- `v` for **vuetify**


See the [Config section](./config) for more info.
