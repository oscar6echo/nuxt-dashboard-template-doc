# Store

The [Vuex store](https://nuxtjs.org/guide/directory-structure#the-store-directory) contains 2 independent sections:
+ [dashboard.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/store/dashboard.js)
    - To keep track of the user navigation among tabs / sub-tabs
    - Not meant to be modified.  
    - See the [Routing section](./routing) for more info.
+ [globe.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/store/globe.js)
    - To store data owned by the `countries/globe` tab 
    - Provided as an example for a user component


Additional files with the same structure can be added to deal with:
- data retrieved from API to be shared 
- communication across user component data.
- etc.

