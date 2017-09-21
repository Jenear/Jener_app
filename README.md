## react 技术栈
- react react-router4 redux react-redux
//yarn 和 npm  是一样的，但是比npm要快，不过要把install改为add才可以

## 初始化package.json
、、、
$ yarn init -y
、、、


## webpack
、、、
$ npm install webpack webpack-dev-server --save-dev
、、、

## babel
、、、
$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader style-loader less-loader html-webpack-plugin --save-dev
、、、

## react
、、、
$ npm install react redux react-redux react-router-dom react-dom --save
、、、

## fetch
、、、
$ npm install es6-promise whatwg-fetch  --save-dev
、、、

## express
、、、
$ npm install express --save
//$ yarn add express
、、、

## scripts
、、、
"start","webpack-dev-server --port 5000 --open --progress --colors",
"build","webpack -p"(p 是把代码全部压缩）aaaabbbbvvvv
、、、

## 目录结构
-components 组件(这样的组件只是获取组件，任别人调用，傻组件，木偶）
-containers 页面组件，或者自己的subpage目录下
    -Home
        -subpage（这个是智能组件，自己控制，去掉用component，
        -index.js
-index.js  用来控制显示哪个页面
