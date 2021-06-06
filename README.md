
# Microfrontends using Single-SPA


This is a example repository to demonstrate microfrontends coexist within a single page using Angular, react and vue sample apps. 

It uses [single-spa](https://single-spa.js.org) to pull this off, which means that you can even add React, Vue, or other frameworks as
additional microfrontends.


## An important note
This github repository has six projects all in one repo. But when you do this yourself, **you'll want to have one git repo per
 application**. The root-config project should also be in its own repo. This is what lets different teams and developers be in
charge of different microfrontends.

With single-spa, it is preferred to run `ng serve` in only one single-spa application at a time, while using a deployed
version of the other applications. This makes for an awesome developer experience where you can boot up just one
microfrontend at a time, not even having to clone, npm install, or boot up all of the other ones.


To try this out, clone the repo and run the following commands:

# First terminal tab
```
cd root-config
npm i
npm run build
npm start
```


# Second terminal tab
```
cd homepage
npm i
npm run build
npm start
```


# Third terminal tab
```
cd navbar
npm i
npm run build
npm start
```


# Fourth terminal tab
```
cd react
npm i
npm run build
npm start
```


# Fifth terminal tab
```
cd angular
npm i
npm run build
npm start
```


# Sixth terminal tab
```
cd vue
npm i
npm run build
npm run serve
```



##  To run the application
Now go to http://localhost:9000 in a browser. Note that you can change any of the ports for the projects by modifying the Import Map inside of
root-config/index.ejs.
