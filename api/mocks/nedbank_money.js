'use strict'

module.exports = {
  NedApp_NedAppTermsAndConditions: returnTermsAndConditions,
  NedApp_NedAppTermsAndConditionsAccept: acceptTermsAndConditions,
  NedbankId_NedbankIdCredentials: validateNedbankIdUserNameAndPassword,
  NedbankId_NedbankIdCredentialsProfile: validatePinProfilePassword,
  NedbankId_NedbankIdCredentialsProfileCard: validateCardAndPin,
  NedbankId_NedbankIdCredentialsAuth: initiateApproveIT,
  NedbankId_NedbankIdCredentialsAuthsPin: initiateApproveITWithPin,
  NedbankId_NedbankIdEnrolments: enroll,
  NedbankId_NedbankIdRecoveriesUsername: recoverUserName,
  ClientsAccountsRefresh: refreshClientsAccounts,
  NedApp_Feedback: leaveFeedback
}

const authReference = '76be859d-2d23-45bf-8630-b5a9f7715585'

function returnTermsAndConditions (req, res) {
  let response = new Response()
  const version = req.swagger.params.version.value
  response.title = 'Terms&Conditions Title v' + version
  response.wording = 'Terms&Conditions Wording v' + version
  res.json(response)
}

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

function recoverUserName (req, res) {
  let response
  const identificationNumber = req.swagger.params.request.value.identificationNumber
  switch (req.swagger.params.request.value.identificationType) {
    case 'RSAIDENTITY':
      response = new Response()
      response.available = identificationNumber === '1234123412341'
      break
    case 'PASSPORT':
      if (req.swagger.params.request.value.countryCode === 'ZA') {
        response = new Response()
        response.available = identificationNumber === '1'
      } else {
        response = new Response(2, 'Invalid countryCode')
      }
      break
    default:
      response = new Response(1, 'Invalid identificationType')
  }
  res.json(response)
}

function refreshClientsAccounts (req, res) {
  res.json(new Response())
}

function leaveFeedback (req, res) {
  res.json(new Response())
}

function Response (resultCode = 0, resultMessage = 'success') {
  this.result = {
    'resultCode': resultCode,
    'resultMessage': resultMessage
  }
}
