# Config

The single entry points to manage the Nuxt config is [nuxt.config.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/nuxt.config.js).

## Env Variables

The environment variables used by [nuxt.config.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/nuxt.config.js) are:
- `CSS` with possible values
   - `vuetify` (default)
   - `bootstrap`
- `MODE` with possible values
    - `DEV`: Development (default)
    - `DIR-LOCAL`: Local directory
    - `SF-LOCAL`: Local single file
    - `GHP`: Github Pages
    - `SF`: Single File
- `DUMP` with possible values
   - `false` (default)
   - `true`


These variables command the Nuxt configuration applied.  

To investigate how:
- Read carefully the contents of the [nuxt.config.js](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/nuxt.config.js)
- Look up the [configuration section](https://nuxtjs.org/guide/configuration) of the Nuxt official documentation.

To use them through preset scripts:
- See the [Scripts section](./scripts).
- See the "scripts" property in file [package.json](https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/package.json).

