(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{232:function(e,t,o){"use strict";o.r(t);var r=o(0),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"scripts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[e._v("#")]),e._v(" Scripts")]),e._v(" "),o("p",[e._v("The entry points to run commands to dev, buid or deploy the Nuxt app are:")]),e._v(" "),o("ul",[o("li",[e._v("file "),o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),o("OutboundLink")],1),e._v(" for Javascript scripts")]),e._v(" "),o("li",[e._v("folder "),o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/scripts",target:"_blank",rel:"noopener noreferrer"}},[e._v("python/scripts"),o("OutboundLink")],1),e._v(" for Python scripts")])]),e._v(" "),o("h2",{attrs:{id:"javascript"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[e._v("#")]),e._v(" Javascript")]),e._v(" "),o("p",[e._v("The following commands can be run in the "),o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuxt-dashboard-template"),o("OutboundLink")],1),e._v(" repo top folder."),o("br"),e._v("\n(where file "),o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),o("OutboundLink")],1),e._v(" is)")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("yarn cdn")]),e._v(" "),o("ul",[o("li",[e._v("Launch server for files in folder "),o("code",[e._v("cdn/")])]),e._v(" "),o("li",[e._v("Keep this command running while developing.")])])]),e._v(" "),o("li",[o("code",[e._v("yarn lint")]),e._v(" "),o("ul",[o("li",[e._v("Run linter to check for errors in source code.")]),e._v(" "),o("li",[e._v("Run every now and then. Most likely your editor does it too.")])])]),e._v(" "),o("li",[o("code",[e._v("yarn lintfix")]),e._v(" "),o("ul",[o("li",[e._v("Run linter to check for errors in source code and fix what can be automatically.")]),e._v(" "),o("li",[e._v("Run every now and then.")])])]),e._v(" "),o("li",[o("code",[e._v("dump-conf-[f]")]),e._v(" "),o("ul",[o("li",[e._v("Dump webpack config produced by Nuxt to file "),o("code",[e._v("nuxt-webpack-config-dump.json")]),e._v(".")]),e._v(" "),o("li",[e._v("Launch "),o("code",[e._v("nuxt dev")]),e._v(" and stop after dump.")])])]),e._v(" "),o("li",[o("code",[e._v("yarn dev-[f]")]),e._v(" "),o("ul",[o("li",[e._v("Launch "),o("code",[e._v("nuxt dev")]),e._v(" server, with hot reload.")]),e._v(" "),o("li",[e._v("Keep this command running while developping.")])])]),e._v(" "),o("li",[o("code",[e._v("yarn dev-debug-[f]")]),e._v(" "),o("ul",[o("li",[e._v("Launch "),o("code",[e._v("nuxt dev")]),e._v(" server in debug mode.")]),e._v(" "),o("li",[e._v("See the "),o("a",{attrs:{href:"./debug"}},[e._v("Debug section")]),e._v(" for the debug workflow with VS Code.")])])]),e._v(" "),o("li",[o("code",[e._v("yarn build-dir-local-[f]")]),e._v(" "),o("ul",[o("li",[e._v("Launch "),o("code",[e._v("nuxt build")]),e._v(" with "),o("a",{attrs:{href:"https://nuxtjs.org/api/configuration-router/#base",target:"_blank",rel:"noopener noreferrer"}},[e._v("router base"),o("OutboundLink")],1),e._v(" = "),o("code",[e._v("/")]),e._v(".")]),e._v(" "),o("li",[e._v("It creates folder "),o("code",[e._v("dist/")]),e._v(" which can be served from "),o("code",[e._v("/")]),e._v(".")]),e._v(" "),o("li",[e._v("It must be followed by script "),o("code",[e._v("serve_dir_dir.py")]),e._v(" or "),o("code",[e._v("yarn start")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("yarn build-sf-local-[f]")]),e._v(" "),o("ul",[o("li",[e._v("Launch "),o("code",[e._v("nuxt build")]),e._v(" with "),o("a",{attrs:{href:"https://nuxtjs.org/api/configuration-router/#base",target:"_blank",rel:"noopener noreferrer"}},[e._v("router base"),o("OutboundLink")],1),e._v(" = "),o("code",[e._v("/")]),e._v(".")]),e._v(" "),o("li",[e._v("This command only create "),o("code",[e._v("dist/")]),e._v(".")]),e._v(" "),o("li",[e._v("It must be followed by script "),o("code",[e._v("build_single_file.py")]),e._v(" and "),o("code",[e._v("serve_dir_template.py")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("yarn build-sf-[f]")]),e._v(" "),o("ul",[o("li",[e._v("Launch "),o("code",[e._v("nuxt build")]),e._v(" with "),o("a",{attrs:{href:"https://nuxtjs.org/api/configuration-router/#base",target:"_blank",rel:"noopener noreferrer"}},[e._v("router base"),o("OutboundLink")],1),e._v(" = "),o("code",[e._v("/[SF_SHORTNAME]/")]),e._v(".")]),e._v(" "),o("li",[e._v("This command only create "),o("code",[e._v("dist/")]),e._v(".")]),e._v(" "),o("li",[e._v("It must be followed by script "),o("code",[e._v("build_single_file.py")]),e._v(" and a deployment to a web server under "),o("code",[e._v("/[SF_SHORTNAME]/")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("yarn build-ghp-[f]")]),e._v(" "),o("ul",[o("li",[e._v("Launch "),o("code",[e._v("nuxt build")]),e._v(" with "),o("a",{attrs:{href:"https://nuxtjs.org/api/configuration-router/#base",target:"_blank",rel:"noopener noreferrer"}},[e._v("router base"),o("OutboundLink")],1),e._v(" = "),o("code",[e._v("/[GH_REPO]/")]),e._v(".")]),e._v(" "),o("li",[e._v("This command only create "),o("code",[e._v("dist/")]),e._v(".")]),e._v(" "),o("li",[e._v("It must be followed by script "),o("code",[e._v("deploy-ghp")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("yarn start")]),e._v(" "),o("ul",[o("li",[e._v("Launch "),o("code",[e._v("nuxt start")]),e._v(" to serve folder "),o("code",[e._v("dist/")]),e._v(" from "),o("code",[e._v("/")]),e._v(".")])])]),e._v(" "),o("li",[o("code",[e._v("yarn deploy-ghp")]),e._v(" "),o("ul",[o("li",[e._v("Copy folder "),o("code",[e._v("dist/")]),e._v(" to repo branch "),o("code",[e._v("gh-pages")]),e._v(" root.")]),e._v(" "),o("li",[e._v("Results in static site served from "),o("code",[e._v("https://oscar6echo.github.io/nuxt-dashboard-template")]),e._v(".")])])])]),e._v(" "),o("p",[e._v("In the scripts above "),o("code",[e._v("[f]")]),e._v(" is either:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("v")]),e._v(" for "),o("strong",[e._v("vuetify")])]),e._v(" "),o("li",[o("code",[e._v("b")]),e._v(" for "),o("strong",[e._v("bootstrap")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"python"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#python"}},[e._v("#")]),e._v(" Python")]),e._v(" "),o("p",[e._v("The following commands are available from the "),o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/tree/master/python/scripts",target:"_blank",rel:"noopener noreferrer"}},[e._v("python/scripts"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("To run these scripts you must have installed the "),o("code",[e._v("build_frontend")]),e._v(" Python package as described in the "),o("a",{attrs:{href:"../get-started/start"}},[e._v("Get Started section")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/analyze_dist.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("analyze_dist.py"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Displays number of distinct files and content size for "),o("code",[e._v(".html")]),e._v(" and "),o("code",[e._v(".js")]),e._v(" files in folder "),o("code",[e._v("dist/")]),e._v(".")]),e._v(" "),o("li",[e._v("Essentially it enables to check that all "),o("code",[e._v(".html")]),e._v(" files are identical and quickly view the name and sizes of the "),o("code",[e._v(".js")]),e._v(" files.")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/build_single_file.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("build_single_file.py"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Build a single "),o("code",[e._v(".html")]),e._v(" file that contains the app entirely.")]),e._v(" "),o("li",[e._v("This script\n"),o("ul",[o("li",[e._v("copies files "),o("code",[e._v("ìndex.html")]),e._v(", "),o("code",[e._v("app.js")]),e._v(", "),o("code",[e._v("commons.app.js")]),e._v(", "),o("code",[e._v("runtime.js")]),e._v(" from folder "),o("code",[e._v("dist/")]),e._v(" and file "),o("code",[e._v("favicon.ico")]),e._v(" from folder "),o("code",[e._v("static/")]),e._v(" to folder "),o("code",[e._v("python/workspace/")]),e._v(".")]),e._v(" "),o("li",[e._v("merge all these files into a single file "),o("code",[e._v("index.html")]),e._v(" saved in folder "),o("code",[e._v("python/template/")]),e._v(".")])])])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/copy_cdn_static_to_dist.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("copy_cdn_static_to_dist.py"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Copy all files in "),o("code",[e._v("cdn/")]),e._v(" to "),o("code",[e._v("dist/")]),e._v(".")]),e._v(" "),o("li",[e._v("This is useful to make the dashboard "),o("em",[e._v("companion")]),e._v(" files available in the case of the app is served from folder "),o("code",[e._v("dist/")]),e._v(".")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/select_framework_bootstrap.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("select_framework_bootstrap.py"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Deletes folders "),o("code",[e._v("components/")]),e._v(", "),o("code",[e._v("layouts/")]),e._v(", "),o("code",[e._v("pages/")]),e._v(" and replace them by the same named folders located in "),o("code",[e._v("python/framework/bootstrap/")]),e._v(".")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/select_framework_vuetify.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("select_framework_vuetify.py"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Deletes folders "),o("code",[e._v("components/")]),e._v(", "),o("code",[e._v("layouts/")]),e._v(", "),o("code",[e._v("pages/")]),e._v(" and replace them by the same named folders located in "),o("code",[e._v("python/framework/vuetify/")]),e._v(".")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/serve_dir_dist.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("serve_dir_dist.py"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Start a web server ("),o("code",[e._v("python -m http.server")]),e._v(") from folder "),o("code",[e._v("dist/")]),e._v(".")]),e._v(" "),o("li",[e._v("This folder typically contains the product of "),o("code",[e._v("nuxt build")]),e._v(" and a copy of the files in "),o("code",[e._v("cdn/")]),e._v(".")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/oscar6echo/nuxt-dashboard-template/blob/master/python/scripts/serve_dir_template.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("serve_dir_template.py"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("Start a web server ("),o("code",[e._v("python -m http.server")]),e._v(") from folder "),o("code",[e._v("python/template/")]),e._v(".")]),e._v(" "),o("li",[e._v("This folder should contain the product of "),o("code",[e._v("build_single_file.py")]),e._v(" and a copy of the files in "),o("code",[e._v("cdn/")]),e._v(".")])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);