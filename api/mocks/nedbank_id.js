'use strict'

module.exports = {
  updateUser: updateUser,
  retrieveUserDetails: retrieveUserDetails,
  addUser: addUser,
  renewToken: renewToken
}

function addUser (req, res, next) {
  res.json({response: 'addUser'})
}

function updateUser (req, res, next) {
  res.json({response: 'updateUser'})
}

function retrieveUserDetails (req, res, next) {
  res.json({
    'data': {
      'UniqueUserID': 1,
      'Username': 'Sample text',
      'IdDetails': {
        'IdNumber': 'Sample text',
        'IdType': 'Sample text',
        'CountryCode': 'Sample text'
      },
      'FirstName': 'Sample text',
      'Surname': 'Sample text',
      'MobileNumber': 'Sample text',
      'EmailAddress': 'Sample text',
      'Title': 'Sample text',
      'Gender': 'Sample text',
      'DateOfBirth': 'Sample text'
    },
    'metadata': {
      'code': 'Sample text',
      'desription': 'Sample text',
      'InvalidFieldsList': [
        {
          'invalidFieldField': 'Sample text',
          'invalidFieldMessageField': 'Sample text'
        }
      ]
    }
  })
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
