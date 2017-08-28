'use strict'

module.exports = {
  NedbankId_NedbankIdCredentials: validateNedbankIdUserNameAndPassword,
  NedbankId_NedbankIdEnrolments: enroll,
  NedbankId_NedbankIdCredentialsProfile: validatePinProfilePassword,
  NedbankId_NedbankIdCredentialsProfileCard: validateCardAndPin
}

function validateNedbankIdUserNameAndPassword (req, res) {
  var response = new Response()
  response.createAlias = false
  response.authReference = '76be859d-2d23-45bf-8630-b5a9f7715585'
  response.authenticated = true
  res.json(response)
}

function enroll (req, res) {
  res.json(new Response())
}

function validatePinProfilePassword (req, res) {
  var response = new Response()
  response.nedbankIdExist = true
  response.oneTimePassword = '12345abc'
  response.enterpriseCustomerNumber = 12345
  response.tempId = 0
  response.token = 'jas987adsuyhj2hjasd89sdjhdsaljkasd9sadjsadkj3'
  response.identificationNumber = '1234567890123'
  response.identificationType = 'RSAID'
  response.countryCode = 'ZA'
  response.dateOfBirth = '1950-01-01'
  response.title = 'Mr'
  response.emailAddress = 'test@test.com'
  response.firstName = 'Stephan'
  response.lastName = 'van Heerden'
  response.authReference = '76be859d-2d23-45bf-8630-b5a9f7715585'
  response.authenticated = true
  res.json(response)
}

function validateCardAndPin (req, res) {
  var response = new Response()
  response.nedbankIdExist = true
  response.token = 'jas987adsuyhj2hjasd89sdjhdsaljkasd9sadjsadkj3'
  response.authReference = '76be859d-2d23-45bf-8630-b5a9f7715585'
  response.authenticated = true
  res.json(response)
}

function Response () {
  this.result = {
    'resultCode': 0,
    'resultMessage': 'string'
  }
}
