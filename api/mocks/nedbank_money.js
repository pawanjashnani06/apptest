'use strict'

module.exports = {
  NedbankId_NedbankIdCredentials: loginByUserNameAndPassword
}

function loginByUserNameAndPassword (req, res) {
  res.json({
    'name': 'NedbankIdCredentials',
    'response': {
      'createAlias': false,
      'authReference': '76be859d-2d23-45bf-8630-b5a9f7715585',
      'authenticated': true
    },
    'result': {
      'resultCode': 'string',
      'resultMessage': 'string'
    }
  })
}
