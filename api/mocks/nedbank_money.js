'use strict'

module.exports = {
  NedbankId_NedbankIdCredentials: validateNedbankIdUserNameAndPassword,
  NedbankId_NedbankIdEnrolments: enrollByNedbankIdUserNameAndPassword,
  NedbankId_NedbankIdCredentialsProfileCard: loginByCardAndPin
}

function validateNedbankIdUserNameAndPassword (req, res) {
  response.createAlias = false
  response.authReference = '76be859d-2d23-45bf-8630-b5a9f7715585'
  response.authenticated = true
  res.json(response)
}

function enrollByNedbankIdUserNameAndPassword (req, res) {
  res.json(response)
}

function loginByCardAndPin (req, res) {
  sendResponse('NedbankIdCredentialsProfileCard', res)
}

function sendResponse (respondName, res) {
  response.name = respondName
  res.json(response)
}

var response = {
  'result': {
    'resultCode': 0,
    'resultMessage': 'string'
  }
}
