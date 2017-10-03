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
    'CisNumber': 110052140105,
    'FirstName': 'Pamela',
    'SecondName': 'Zoltan',
    'Surname': 'Mackor',
    'FullNames': 'Ms Pamela Zoltan Mackor',
    'CellNumber': '+27745879190',
    'EmailAddress': '',
    'BirthDate': '1969-03-21T22:00:00Z',
    'FicaStatus': 701,
    'SegmentId': 'FAAZZZ',
    'IdOrTaxIdNo': 6903220006083,
    'SecOfficerCd': '32713',
    'AdditionalPhoneList': [
      {
        'AdditionalPhoneType': 'BUS',
        'AdditionalPhoneNumber': '(018) 2944527'
      },
      {
        'AdditionalPhoneType': 'CELL',
        'AdditionalPhoneNumber': '+27745879190'
      },
      {
        'AdditionalPhoneType': 'FAX',
        'AdditionalPhoneNumber': '(018) 2973683'
      },
      {
        'AdditionalPhoneType': 'HOME',
        'AdditionalPhoneNumber': '(018) 2943431'
      }
    ],
    'Address': {
      'AddressLines': [
        {
          'AddressLine': ''
        },
        {
          'AddressLine': '88 DR JAMES MOROKA DRIVE'
        },
        {
          'AddressLine': 'POTCHEFSTROOM'
        }
      ],
      'AddressPostalCode': '02531',
      'AddressProvince': 'NORTH WEST'
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
      'PreferenceValue': '1'
    },
    {
      'PreferenceKey': 'FirstRunFinished',
      'PreferenceValue': 'true'
    }
  ])
}
