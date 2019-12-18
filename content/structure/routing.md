# Routing

The files managing the routing between tabs in the [nuxt-dashboard-template](https://github.com/oscar6echo/nuxt-dashboard-template), on top of Nuxt built-in features, are:
+ [components/generic/manage-tabs.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/generic/manage-tabs.vue)
+ [js/conf/dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/js/conf/dashboard.js)
+ [js/generic/dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/js/generic/dashboard.js)
+ [middleware/active-route.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/middleware/active-route.js)
+ [store/dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/store/dashboard.js)


## Config

The initial dashboard configuration in [js/conf/dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/js/conf/dashboard.js) contains the initial dashboard state:
```js
// conf/dashboard.js

const obj = {
// ...

// MANUALCONFIG
// SET DEFAULT TAB
// FOR ALL TAB WITH SUBTABS SET DEFAULT SUBTAB
activeTab: { tab: 0, sub: { 0: 0, 4: 0 } },

// ...
}
```

It must be understood as follows:  
- `activeTab.tab` is the active tab upon start - zero for the first tab.  
- `activeTab.sub[i]` is the active sub-tab for tab `i` upon start
    - Only makes sense if tab `i` has sub-tabs.  

## Store

As the user navigates the dashboard a same-shaped data structure is kept up to date in the store:

```js
// store/dashboard.js

export const state = () => ({
  // from js/conf.dashboard.js
  conf: null, 
  // activeTab initialized js/conf.dashboard.js
  activeTab: { tab: null, sub: null }
});
```

The component [components/generic/manage-tabs.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/generic/manage-tabs.vue) in charge of tracking and updating the store.  
It does so by:
- watching the route i.e. the current url
- extracting the current tab/sub-tab
- pushing this info into the store


## Redirect


When a user lands on a url that has no content like:
- `/`
- `/countries`
- `/wikitable`


Then middleware [middleware/active-route.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/middleware/active-route.js) present in pages [pages/index/countries/index](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index/countries/index.vue) and [pages/index/wikitable/index](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index/wikitable/index.vue) automatically redirects the user to a page with content resp.:
- `/countries` then `/countries/table`
- `/countries/table`
- `/wikitable/ancient`

Assuming the initial condition in [js/conf/dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/js/conf/dashboard.js).  
More generally the sub-tab redirected to is the store ([store/dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/store/dashboard.js)) i.e. in the the latest visited.

The function selecting such redirect route is `defaultRoute()` in [js/conf/dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/js/conf/dashboard.js).  
It is called in 2 distinct context:
+ [pages/index.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/pages/index.vue) for the top level redirect upon page reload ie. route:
    - `/`
+ in [middleware/active-route.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/middleware/active-route.js) for each tab with sub-tabs i.e. routes:
    - `/countries`
    - `/wikitable`



## Mode

The [Nuxt router](https://nuxtjs.org/api/configuration-router/#mode), wrapping a [Vue router](https://router.vuejs.org/api/#mode), can be in either mode:
- **hash**  
    e.g. `http://localhost:3000/#/countries/plot`
- **history**  
    e.g. `http://localhost:3000/countries/plot`

The hash symbol `#` means that only the route before it (`http://localhost:3000` in the example above) need be served.  
Without this symbol the exact route must be served.  

So **hash** mode is the only option for a single file build, while **history** is possible for a regular build.  
See the [Build](./build) and [Deploy](./deploy) sections for more info.

