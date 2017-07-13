# Stub server [![CircleCI](https://circleci.com/gh/greenbank60days/banking-app-stubs/tree/master.svg?style=svg&circle-token=b73f1e6cf40c2149f30c5c9af5b089d61050950c)](https://circleci.com/gh/greenbank60days/banking-app-stubs/tree/master)

The purpose of this project is to provide a server that can be used during development and for automated testing of the banking application. It contains all known swagger contracts and uses swagger to mock api calls.
It is based on the swagger cli tool.

## Getting Started

1. Clone this repo locally:
  ```
  $ git clone git@github.com:greenbank60days/banking-app-stubs.git
  ```
2. Build project & docker image:
  ```
  $ cd banking-app-stubs
  $ ./build.sh
  $ docker build -t greenbank60days/banking-app-stubs .
  ```
3. Run docker image with the application
  ```
  $ docker run -p 10010:10010 greenbank60days/banking-app-stubs
  ```
4. Call application
  ```
  Request;
  Open postman;
  url: GET http://localhost:10010/api/services/v1/test
  headers;    Authorization: test
              X-IBM-Client-Id: 1234
              RoleName: test
  then send in postman

  Response;

  [
      {
          "todo_id": 0,
          "todo": "Get some milk",
          "author": "Luke Angel",
          "createddate": "2016-11-01T23:15:00.000Z",
          "duedate": "2016-11-08T08:00:00.000Z",
          "completed": false
      },
      {
          "todo_id": 1,
          "todo": "Get some cereal",
          "author": "Austin",
          "createddate": "2016-11-01T23:15:00.000Z",
          "duedate": "2016-11-08T08:00:00.000Z",
          "completed": false
      }
  ]
  ```

## Development

### Running locally

Dependencies:
 - latest version of node.js
 - docker

1. Go To folder and install project dependencies:
  ```
  $ cd banking-app-stubs
  $ npm i
  $ npm i -g swagger
  ```
2. Build `merge-yml` library and use it to build project:
  ```
  $ ./build.sh
  ```
3. Run swagger in edit mode on port `10011`
  ```
  $ swagger project edit -p 10011
  ```
4. Start application in mock mode on port `10010`
  ```
  $ swagger project start -m
  ```

### Updates

To mock service:
 - Add swagger contract to api/swagger/contracts
 - Reference contract in run.sh (in the merge-yaml part)

To mock endpoint:
 - Make sure swagger yaml file does not contain headers:
    ```
    basePath: /api/services/v1
    host: localhost:10010
    consumes:
    - application/json
    produces:
    - application/json
    schemes:
    - http
    - https
    ```

 - Add HTTP headers to swagger yaml:
    ```
    x-swagger-router-controller: "mock_controller_name"
    operationId: "mockFunctionToCall"
    ```

 - Create file `mock_controller_name.js` inside `api/mocks` directory. Exported functions from this controller are referenced by the `operationId` header above.

### Code style standard

 We are using [standardjs.com](https://standardjs.com/) as js code style.

 Linting is done during `test` by:

 ```
 $ npm test
 ```

 It is also run by CI.

 To fix Your code against standardjs just run:

 ```
 $ standard --fix
 ```

 or configure IDE to do it for You.

## Happy mocking!
