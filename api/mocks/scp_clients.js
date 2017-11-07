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
    'CisNumber': 110238016307,
    'FirstName': 'Rizah',
    'SecondName': '',
    'Surname': 'Kodzaga',
    'FullNames': 'Mr Rizah Kodzaga',
    'CellNumber': '27998016307',
    'EmailAddress': '',
    'BirthDate': '1968-05-31T22:00:00Z',
    'FicaStatus': 701,
    'SegmentId': 'AAAZZZ',
    'IdOrTaxIdNo': 6806016600086,
    'PassportNo': '24946300000000',
    'SecOfficerCd': '36300',
    'AdditionalPhoneList': [
      {
        'AdditionalPhoneType': 'BUS',
        'AdditionalPhoneNumber': '(011) 4724050'
      },
      {
        'AdditionalPhoneType': 'CELL',
        'AdditionalPhoneNumber': '27998016307'
      },
      {
        'AdditionalPhoneType': 'HOME',
        'AdditionalPhoneNumber': '(082) 8566440'
      }
    ],
    'Address': {
      'AddressLines': [
        {
          'AddressLine': '3 EAGLE ROCK'
        },
        {
          'AddressLine': 'EASTWOOD AVENUE'
        },
        {
          'AddressLine': 'RANDPARK RIDGE'
        }
      ],
      'AddressCity': 'JOHANNESBURG',
      'AddressPostalCode': '02169'
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
    {
      'PreferenceKey': 'LayoutView',
      'PreferenceValue': 'default'
    },
    {
      'PreferenceKey': 'PreferredName',
      'PreferenceValue': 'Heineken'
    },
    {
      'PreferenceKey': 'DefaultAccount',
      'PreferenceValue': '21'
    },
    {
      'PreferenceKey': 'FirstRunFinished',
      'PreferenceValue': 'true'
    }
  ])
}
