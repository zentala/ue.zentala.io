

# EU 2020 [![Website status](https://img.shields.io/uptimerobot/status/m787025974-4e422831aded279b03c05d57)](https://stats.uptimerobot.com/rB392tAOkQ) [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/zentala/eu.zentala.io)
## Overview
Bunch of ideas of how we could reform and modernize the European Union in the spirit of Green Sustainability, Information Economy and 4th Industrial Revolution. You are welcomed to read them all [on the website](https://ue.zentala.io/). This document contains documentation for futher developers and contributors only.

## Quick start (online development)
Start ready-to-code development environment for this project directly from your browser:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/...)

Just click the button above and register with your GitHub account if needed. After a while (building time) your IDE will be ready for development. No manual setup is required.

### Where is the content?
You can find source markdown in the [content](content/) directory.

### Main branches
* `develop` constains source code - this is where you want to merge you Pull Requests
* `deploy` contains built package that is served to the end user - don't touch it

## About the setup
Serverless setup with:
* [Gatsby](https://www.gatsbyjs.org) - markdown static page generator
* [GitHub Pages](https://pages.github.com/) - static site hosting service
* [GitPod](https://gitpod.com/) - ready-to-code development environment
* [UptimeRobot](https://uptimerobot.com/) - website status every 5 minutes

## Editing locally
### Prerequisites
I suggest to install and use [Node Version Manager](https://github.com/nvm-sh/nvm) in order to get proper [Node.js](https://nodejs.org/en/) version. Alternatively you can manually get and install Node 10.x (recommended). In this case just skip `nvm use .` command in the next section.

### Setting up
Execute in the console:
``` console
git clone git@github.com:zentala/eu.zentala.io.git
cd ue.zentala.io/
nvm use .
npm install
npm run start
```

After a while local server should be running under [http://localhost:8000/](http://localhost:8000/).

## Deployment
When ready, deploy it with:
``` console
npm run deploy
```

This will build the package and push it to the `deploy` branch that is statically served via [GitHub Pages](https://pages.github.com/).

## Future development

### Known issues
* submenus are not expandable
* text logo (idea) needed
* improve mobile menu

## Desired features
* comments to the specyfic part of text
* versioned webpage (releases)
* header string in logo
* light swith to the right or remove it for now
* _read the book in 20 minutes_ - summaries
* wiki, interactive map character
* you can see what you already saw/readed
* mindmap, maybe embbed?
