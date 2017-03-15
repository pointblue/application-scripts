# pb-application-scripts
Internal install, build and deployment scripts for Point Blue applications

## Public Repository
for now, until we can figure out if we should make the vagrant user part of the deployers group or not

## Tags
Local git tags don't get pushed by default; be sure to use `git push --tags` when you increment the version number.

version numbers use [git tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

## Use
include this repo in your application's *package.json* like so:
```
  "scripts": {
      "prod": "gulp --production",
      "dev": "gulp watch",
      "build": "./node_modules/pb-application-scripts/BUILD",
      "deploy": "./node_modules/pb-application-scripts/DEPLOY",
      "install-app": "./node_modules/pb-application-scripts/INSTALL",
      "api-gen": "echo tbd"
    },
    
  ... 
  
  "dependencies": {
      ... 
      "pb-application-scripts": "git@github.com:pointblue/pb-application-scripts.git#master"
      // or, for a specific version:
      "pb-application-scripts": "git@github.com:pointblue/pb-application-scripts.git#v0.1.2"
    }
```

then, from your application's directory, you can run:  
`npm run install-app`  
`npm run build`  
`npm run deploy`  
