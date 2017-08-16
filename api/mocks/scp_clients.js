'use strict'

module.exports = {
  clientDetails: clientDetails,
  updateClientDetails: updateClientDetails,
  updateClientsCards: updateClientsCards,
  getClientsCards: getClientsCards,
  getClientPreferences: getClientPreferences
}

function clientDetails (req, res, next) {
  res.json({
    'CisNumber': 110003663906,
    'FirstName': 'William',
    'SecondName': 'Jack',
    'Surname': 'Mitchell',
    'FullNames': 'Mr William Jack Mitchell',
    'AdditionalCellNumber': '',
    'CellNumber': '+27993663906',
    'EmailAddress': 'test@test.co.za',
    'FicaStatus': 1,
    'BirthDate': '2017-07-12',
    'SegmentId': 'Sample text',
    'IdOrTaxIdNo': 1,
    'PassportNo': 'Sample text',
    'SecOfficerCd': 'Sample text',
    'AdditionalPhoneList': [
      {
        'AdditionalPhoneType': 'Sample text',
        'AdditionalPhoneNumber': 'Sample text'
      }
    ],
    'Address': {
      'AddressLines': [
        {
          'AddressLine': 'Sample text'
        }
      ],
      'AddressCity': 'Sample text',
      'AddressPostalCode': 'Sample text',
      'AddressProvince': 'Sample text',
      'AddressCountry': 'Sample text'
    }
  })
}

function updateClientDetails (req, res, next) {
  res.json({
    'CellNumber': '+27993663906',
    'EmailAddress': 'test@test.co.za'
  })
}

function getClientsCards (req, res, next) {
  res.json([
    {
      'Template': 'Sample text',
      'Title': 'Sample text',
      'Heading': 'Sample text',
      'CardData': {}
    }
  ])
}

function updateClientsCards (req, res, next) {
  res.json({})
}

function getClientPreferences (req, res, next) {
  res.json([
    [
      {
        'PreferenceKey': 'Default Account',
        'PreferenceValue': '4'
      }
    ]
  ])
}
