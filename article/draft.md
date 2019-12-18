# Dashboarding with Nuxt
## Starter kit for non professional web devs


Quite often in corporate life one has to aggregate data and expose results it to some audience in the form of a dashboard, with text and tables and graphs.  

There is a continuum of tools to ease the creation of such dashboards, from Excel sheets and PowerPoint slides to Business Intelligence (BI) tools producing custom web pages. MS Office tools are easy to use, but web pages are far superior in terms of rendering and distribution. So the myriad of BI tools are essentially offering automated web page creation from a more of less restricted set or parameters. The less parameters the more usable but the less flexible, the simplest.  
Each proposes a valid tradeoff.  

Practical experience shows that the short term constraints of corporate life strongly favors immediate usability. People often choices that produce quick wins but gradually build technical debt, sometimes beyond reasonable. Think of the impact of bloated spreadsheets far outgrowing the Excel's natural scope, in organizations.

With this bias in mind, I have tried to write a dashboarding "framework" (Cf. [nxut-dashboard-template github repo](TBD), and its [documentation](TBD)) that offers enough guidance to deliver results quickly but cannot lead to a dead end which would force a rewrite from scratch. 

It is essentially built on [Nuxt](TBD), itself built on [Vue](TBD), it self on [web standards](TBD). Nuxt has a large community and a good momentum, Vue is one of the 3 dominant Javascript web frameworks and is impeccably documented. My own addition are small and optional. 

Now there is no magic. As opposed to many dashboarding solutions typically wrapping Javascript in Python - I even wrote one ([ezdashboard](TBD)) to appreciate the benefits and limits of this approach) - here the user must not shy away from direct contact with Javascript.

As a consequence the learning curve is undoubtedly steeper.  

However with recent evolution of the Javascript ecosystem, notably the Vue ecosystem, and the convenience of modern development tools ([VS Code](TBD) in particular) the hurdle is arguably not so high either. 

## Links

Check out the links:
+ demo dashboard: https://oscar6echo.github.io/nuxt-dashboard-template
+ Source code: https://github.com/oscar6echo/nuxt-dashboard-template
+ Documentation: https://oscar6echo.github.io/nuxt-dashboard-template-doc/

<image>

## Features

In short the nuxt-dashboard-template started out as a regular Nuxt app - built with the official create-nuxt-app. Then it was completed to offer the following features:

+ 1 or 2-level tab layout
    + So that a developer can cram a decent amount of data without scroll
+ Routing among tabs/sub-tabs
    + So that a developer only focuses on the content to display
+ App state management in url
    + So that a shared url leads a user right into a specific tab/sub-tab in a specific state
+ A store to manage
    + the routing state
    + any user component state
+ Demo (same) dashboards in 2 major CSS frameworks:
    + [vuetify](TBD) - the most feature complete
    + [bootstrap](TBD) - the incumbent

## Examples

Most dashboard retrieve data and display tables or graphs.
To help with these typical use cases the demo dashboards contain user components that:

Request to REST APIs with axios and fetch
Request to GraphQL API with apollo
Request to load static files with axios
Connect to Web Socket for real time data feed
Display grid/table with ag-grid
Display plots/graphs with highcharts
Use browser APIs (geolocalisation, canvas, worker)



## Conclusion

The [nuxt-dashboard-template](TBD) is more demanding on a user that the typical Python based helper tools that I have seen. To come back to the initial remark it is resolutely geared towards flexibility. So while it is not a tool for everybody, it can take a non-specialist but motivated engineer quite far - hopefully.


