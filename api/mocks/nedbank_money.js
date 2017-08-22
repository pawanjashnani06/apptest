'use strict'

module.exports = {
  NedbankId_NedbankIdCredentials: loginByUserNameAndPassword,
  NedbankId_NedbankIdCredentialsProfileCard: loginByCardAndPin
}

function loginByUserNameAndPassword (req, res) {
  sendServiceResponse('NedbankIdCredentials', res)
}

function loginByCardAndPin (req, res) {
  sendServiceResponse('NedbankIdCredentialsProfileCard', res)
}

function sendServiceResponse (serviceRespondName, res) {
  serviceResponse.name = serviceRespondName
  res.json(serviceResponse)
}

var serviceResponse = {
  'response': {
    'createAlias': false,
    'authReference': '76be859d-2d23-45bf-8630-b5a9f7715585',
    'authenticated': true
  },
  'result': {
    'resultCode': 'string',
    'resultMessage': 'string'
  }
}
