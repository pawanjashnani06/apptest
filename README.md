# Stub server

The purpose of this project is to provide a server that can be used during development and for automated testing of the banking application. It contains all known swagger contracts and uses swagger-mock to create and serve stubs.

## Repo Overview

This is a node project with the following structure;

* **/docs** = swagger-combine settings file. All yaml contracts referenced here. Only swagger.yaml should be in here
* **/contract** = all swagger contract file added here
* **server.json** = main node file
* **package.json** = manages dependencies
* **README.md** = start here

## Getting Started

1. Clone the repo locally:
```
git clone
git@github.com:greenbank60days/banking-api-mocks.gi
```
2. Update NPM dependencies:
```
cd banking-app-stubs
npm i
```
3. Start the application
```
node server.js
```

## Interractions

* To view combined contract
```
http://localhost:8000/swagger.yaml
```
* API
```
http://localhost:8000/api/<service-name>/..
```

## Known Issues

* (RangeError: Maximum call stack size exceeded) thrown when application starts as a result of supporting library
    but app should still start up regardless.



## TODO

* Create Docker container
* Add swagger-ui

