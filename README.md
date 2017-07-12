# Stub server [![CircleCI](https://circleci.com/gh/greenbank60days/banking-app-stubs/tree/master.svg?style=svg&circle-token=b73f1e6cf40c2149f30c5c9af5b089d61050950c)](https://circleci.com/gh/greenbank60days/banking-app-stubs/tree/master)

The purpose of this project is to provide a server that can be used during development and for automated testing of the banking application. It contains all known swagger contracts and uses swagger to mock api calls.
It is based on the swagger cli tool.

## Getting Started

1. Clone the repo locally:
```
git clone git@github.com:greenbank60days/banking-app-stubs.git
```
2. Update dependencies:
```
cd banking-app-stubs
docker build -t <your-username>/test .
```
3. Start the application
```
docker run -p 10010:10010 -p 10011:10011 <your-username>/test
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

5. View documentation on
```
locahost:10011
```

## Running locally
### Dependencies
 - latest version of node.js
 - Swagger cli please run 'npm install -g swagger'
 - latest version of java and maven

1. Go To folder and update dependencies
```
> cd banking-app-stubs
> npm i
```

2. Run shell script
```
> ./run.sh
```

3. Start application
```
> swagger project start -m
```

## Updates

To mock service;

 - Add swagger contract to api/swagger/contracts
 - Reference contract in run.sh (in the merge-yaml part)

To mock endpoint;

 - Make sure swagger yaml file does not contain headers (basePath: /api/services/v1
                                                         consumes:
                                                         - application/json
                                                         produces:
                                                         - application/json
                                                         schemes:
                                                         - http
                                                         - https)
 - Add headers to swagger yaml ( operationId: "SuperMock" and x-swagger-router-controller: "SuperMock")
 - Create file "SuperMock.js" inside api/mocks directory, this file is referenced by the operatioId header above

 ## Development

 We are using [standardjs.com](https://standardjs.com/) for linting.

 Linting is done during `test`.

 To fix Your code against standardjs just run:

 ```
 standard --fix
 ```

 or configure IDE to do it for You.

## Happy mocking!
