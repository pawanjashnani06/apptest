'use strict'

module.exports = {
  idDocument: idDocument,
  addressDocument: addressDocument,
  address: address,
  profiles: profiles
}

function idDocument (req, res, next) {
  res.json({
    'firstname': 'Mark',
    'middlename': 'George',
    'lastname': 'Twain',
    'idNumber': '6281032',
    'timestamp': '1500026742'
  })
}

function addressDocument (req, res, next) {
  res.json({
    'responseMessage': 'success message'
  })
}

function address (req, res, next) {
  res.json({
    'data': {
      'confidenceLevel': 'confirmed',
      'addressConfirmed': 'Address conformation text'
    }
  })
}

function profiles (req, res, next) {
  res.json({
    'isMatch': true,
    'error': 'error text'
  })
}
