'use strict'

module.exports = {
  // updateUser: updateUser,
  retrieveUserDetails: retrieveUserDetails,
  addUser: addUser,
  renewToken: renewToken
}

function addUser (req, res, next) {
  res.json({response: 'addUser'})
}

// function updateUser (req, res, next) {
//   res.json({response: 'updateUser'})
// }

function retrieveUserDetails (req, res, next) {
  res.json({response: 'retrieveUserDetails'})
}

function renewToken (req, res, next) {
  res.json({
    'data': 'Sample text1',
    'metadata': {
      'data': {},
      'metadata': {
        'code': 'Sample text2',
        'desription': 'Sample text2',
        'InvalidFieldsList': [
          {
            'invalidFieldField': 'Sample text2',
            'invalidFieldMessageField': 'Sample text2'
          }
        ]
      }
    }
  })
}
