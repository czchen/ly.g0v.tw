#!/usr/bin/env lsc -cj
author: 'Chia-liang Kao'
name: 'lyg0vtw'
description: 'ly.g0v.tw'
version: '0.2.0'
homepage: 'https://github.com/g0v/ly.g0v.tw'
repository:
  type: 'git'
  url: 'https://github.com/g0v/ly.g0v.tw'
engines:
  node: '0.10.x'
  npm: '1.3.x'
subdomain: 'lyg0vtw'
domains: <[ly.g0v.tw beta.ly.g0v.tw]>
scripts:
  republish: 'lsc -cj package.ls && lsc -cj bower.json.ls'
  build: 'bower i && brunch b -o && lsc -c server'
  start: 'node ./server/app.js'
  test: 'npm run build && ./node_modules/karma/bin/karma start --browsers PhantomJS --single-run true test/karma.conf.ls'
  utiltest: './node_modules/.bin/lsc -cbo out/ app/utils && node_modules/mocha/bin/mocha --compilers ls:LiveScript test/unit/util'
dependencies:
  express: '3.4.x'
  'prerender-node': '0.1.x'
  ejs: '0.8.x'
  request: '2.27.x'
devDependencies:
  LiveScript: '1.2.x'
  brunch: '1.7.x'
  'javascript-brunch': '1.7.x'
  'LiveScript-brunch': '1.6.x'
  'css-brunch': '1.7.x'
  'sass-brunch': '1.7.x'
  'auto-reload-brunch': '1.7.x'
  'uglify-js-brunch': '1.7.x'
  'clean-css-brunch': '1.7.x'
  'jade-angularjs-brunch': '1.1.1'
  'jsenv-brunch': '1.4.2'
  'karma': '>= 0.11.13'
  'karma-live-preprocessor': 'git://github.com/clkao/karma-live-preprocessor#patch-1'
  'karma-mocha': '~0.1.0'
  'karma-chai': '~0.0.2'
  'karma-ng-scenario': '0.1.0'
  'karma-phantomjs-launcher': '~0.1.0'
  'bower': '1.2.x'
  'mocha': '~1.14.0'
  'chai': '~1.8.0'
