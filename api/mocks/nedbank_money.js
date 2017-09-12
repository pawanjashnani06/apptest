'use strict'

module.exports = {
  NedApp_NedAppTermsAndConditionsAccept: acceptTermsAndConditions,
  NedbankId_NedbankIdCredentials: validateNedbankIdUserNameAndPassword,
  NedbankId_NedbankIdCredentialsProfile: validatePinProfilePassword,
  NedbankId_NedbankIdCredentialsProfileCard: validateCardAndPin,
  NedbankId_NedbankIdCredentialsAuth: initiateApproveIT,
  NedbankId_NedbankIdCredentialsAuthsPin: initiateApproveITWithPin,
  NedbankId_NedbankIdEnrolments: enroll
}

const authReference = '76be859d-2d23-45bf-8630-b5a9f7715585'

function acceptTermsAndConditions (req, res) {
  res.json(new Response())
}

function validateNedbankIdUserNameAndPassword (req, res) {
  let response
  if (req.swagger.params.request.value.username === 'blocked') {
    response = new Response(5, 'User blocked')
    response.authenticated = false
    response.authReference = ''
  } else {
    response = new Response()
    response.createAlias = req.swagger.params.request.value.username === 'notFederated'
    response.authReference = authReference
    response.authenticated = true
  }
  res.json(response)
}

function validatePinProfilePassword (req, res) {
  let response = new Response()
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
  response.authReference = authReference
  response.authenticated = true
  res.json(response)
}

function validateCardAndPin (req, res) {
  let response
  if (req.swagger.params.request.value.pan === '4321432143214321') {
    response = new Response(2, 'Invalid PAN')
  } else {
    response = new Response()
  }
  res.json(response)
}

function initiateApproveIT (req, res) {
  let response = new Response()
  if (req.swagger.params.request.value.authReference !== authReference) {
    response = new Response(1, 'Not valid authReference')
  }
  res.json(response)
}

function initiateApproveITWithPin (req, res) {
  res.json(new Response())
}

function enroll (req, res) {
  res.json(new Response())
}

function Response (resultCode = 0, resultMessage = 'success') {
  this.result = {
    'resultCode': resultCode,
    'resultMessage': resultMessage
  }
}
