# State

The files managing the dashboard or state are:
+ [js/generic/app-state.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/js/generic/app-state.js)
+ The user component using function `updateStateInUrl()` i.e.:
    - [tab-bitcoin.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-bitcoin.vue)
    - [tab-map.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-map.vue)
+ The user component using function `getStateFromUrl()` i.e.:
    - [tab-bitcoin-plot.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-bitcoin-plot.vue)
    - [tab-bitcoin.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-bitcoin.vue)
    - [tab-map.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-map.vue)
    - [tab-map-globe.vue](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/components/tab-map-globe.vue)


## Url

The mechanism used by the dashboard to save app state is to use the <span style="color :red"> url as the source of truth </span>.  

The [path](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname) contains the current tab/sub-tab e.g.:
- `/countries/plot`
- `/slider2d`
- `/weather`
- `/wikitabe/modern`

The [query string](https://en.wikipedia.org/wiki/Query_string) contains the state pushed by user components flattened to fit into the url query string shape: `/my/current/path?param1=value1&param2=value2&param3=value3`

For example the following app state, while on the `countries/plot` sub-tab

```json
{
  "globe": {
    "selectedCountry": "Argentina",
    "tripTimeSec": "3"
  },
  "bitcoin": {
    "fieldSelected": "size"
  }
}
```

translates to the following url:

```
http://localhost:3000/countries/plot?globe.selectedCountry=Argentina&globe.tripTimeSec=3&bitcoin.fieldSelected=size
```

Note that the query string contains the state of the *entire* app, not just the current tab.  
Indeed the query string is propagated across tab/sub-tab with function `buildLinkn()` in [js/generic/app-state.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/js/generic/app-state.js).


## Actions

The app state derives from user actions (inputs, selections, etc).

In order for a param to be part of the state the following must be implemented:
+ The user action triggers an update to the query string
    - Use function `updateStateInUrl()` with the relevant params
+ The display component must retrieve its params from the state embedded in the url
    - Use function `getStateFromUrl()`
 
