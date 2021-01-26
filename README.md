[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/zentala/eu.zentala.io) [![Website status](https://img.shields.io/uptimerobot/status/m787025974-4e422831aded279b03c05d57?logo=statuspage)](https://stats.uptimerobot.com/rB392tAOkQ)

# EU 2030
## Overview
Bunch of ideas of how we could reform and modernize an European Union in the spirit of Information Economy and 4th Industrial Revolution. You are welcomed to read them all [on the website](https://ue.zentala.io/). This document contains documentation for futher developers and contributors only.

## About the setup
* serverless setup with [Gatsby](https://www.gatsbyjs.org)
* website status with [UptimeRobot](https://uptimerobot.com/)
* staticaly served via [GitHub Pages](https://pages.github.com/)

## Main branches
* `develop` constains source code - this is where you want to merge you Pull Requests
* `main` contains built package that is served to the end user - don't touch it

## Where is the content?
You can find source markdown in the [content](content/) directory.
## Editing online
[Gitpod](https://gitpod.io/) provides easy way to edit the repository without need of setting up the environment. Just click [here](https://gitpod.io/#https://github.com/zentala/eu.zentala.io) (or on the GitPod button on the very top of this README), register with your GitHub account if needed and start editing. No setup is required but there is also no way to get live preview.
## Editing locally
### Prerequisites
I suggest to install and use [Node Version Manager](https://github.com/nvm-sh/nvm) in order to get proper [Node.js](https://nodejs.org/en/) version. Alternatively you can manually get and install Node 14.x. In this case just skip `nvm use .` command in the next section.

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
When ready deply it with:
``` console
npm deploy
```

This will build the package and push it to the `main` branch.

## Known issues
* submenus are not expandable
* text logo (idea) needed
* improve mobile menu

## Desired features
* comments to the specyfic part of text
* versioned webpage
* header string in logo
* light swith to the right or remove it for now
* na pewno che aby dalo sie przyczytac ot szybko, "przeczytal cala ksiazke w 20min" po streszczeniach czy cos
* na pewno chce aby to mialo charkater wiki, interaktuwnej mapy, etc.
* fajnym feature byloby gdybys mogl zaznaczac co przeczytales, ale jak aby to bylo uxowe?
