# Installing

```
npm install
npm run preinstall
react-native run-android # or react-native run-ios
```

# Development

## Navigation

For native navigation we use [react-navigation](https://reactnavigation.org/).

## Code style

For code style formatting [prettier](https://prettier.io) is used.

1.  [Usual installation](https://prettier.io/docs/en/install.html)
2.  [Installation for WebStorm](https://prettier.io/docs/en/webstorm.html)
3.  [Installation for Sublime Text](https://github.com/danreeves/sublime-prettier)

## Project structure

```
src
├── App.js - project start point
├── common - common components/dataViews/HOCs and so on
├── containers - all screen views
│   └── [Screen]
│   ├── [Screen]Page.js - page container
│      ├── [Screen]PageView.js - page view
│      └── index.js - exports tab descriptor
└── store - all store(redux) staff
   └── [storeEntity]
      ├── [storeEntity]ActionTypes.js
      ├── [storeEntity]Actions.js
      ├── [storeEntity]Reducer.js
      └── index.js - store entity descriptor
```
