'use strict'

module.exports = {
  clientDetails: clientDetails,
  updateClientDetails: updateClientDetails,
  updateClientsCards: updateClientsCards,
  getClientsCards: getClientsCards,
  getClientPreferences: getClientPreferences,
  clientCardDetails: clientCardDetails,
  clientAccountCardsDetail: clientAccountCardsDetail,
  blockCard: blockCard,
  replaceCard: replaceCard
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
    'AdditionalPhoneList': [ {
      'AdditionalPhoneType': 'BUS',
      'AdditionalPhoneNumber': '(011) 4724050'
    }, {
      'AdditionalPhoneType': 'CELL',
      'AdditionalPhoneNumber': '27998016307'
    }, {
      'AdditionalPhoneType': 'HOME',
      'AdditionalPhoneNumber': '(082) 8566440'
    } ],
    'Address': {
      'AddressLines': [ {
        'AddressLine': '3 EAGLE ROCK'
      }, {
        'AddressLine': 'EASTWOOD AVENUE'
      }, {
        'AddressLine': 'RANDPARK RIDGE'
      } ],
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
  res.json([ {
    'Template': 'Sample text',
    'Title': 'Sample text',
    'Heading': 'Sample text',
    'CardData': {}
  } ])
}

function updateClientsCards (req, res, next) {
  res.json({})
}

function getClientPreferences (req, res, next) {
  res.json([ {
    'PreferenceKey': 'LayoutView',
    'PreferenceValue': 'default'
  }, {
    'PreferenceKey': 'PreferredName',
    'PreferenceValue': 'Heineken'
  }, {
    'PreferenceKey': 'DefaultAccount',
    'PreferenceValue': '21'
  }, {
    'PreferenceKey': 'FirstRunFinished',
    'PreferenceValue': 'true'
  } ])
}

function clientCardDetails (req, res, next) {
  res.json({
    'MetaData': {
      'ResultCode': 'R00',
      'Message': '',
      'InvalidFieldList': null,
      'result': {
        'resultCode': 0,
        'resultMessage': ''
      }
    },
    'Data': [ {
      'CamsPlasNbr': '558294 0000078511',
      'CamsPlasStatus': 'Active',
      'CamsPlasType': 'MJ3',
      'DCIndicator': 'C',
      'CardPlCustRelCd': 'ADI',
      'CamsPlasStockCode': 'MJ3',
      'PlCurStatRsnCd': 'AAA',
      'PlasBranchNumber': '11',
      'CamsNameLn': 'DR PAUL JOHN FOADEN',
      'PlasExpiryDate': '2020-11-30 12:00:00 AM',
      'PlasIssueDate': 'To be issued',
      'PlasticTypeDescrip': 'MASTERCARD GOLD BUSINESS CREDIT',
      'AllowBlock': true,
      'AllowReplace': true,
      'CardAccNumber': '589846 076124789 9',
      'Owner': false,
      'AvailBalance': 3250.0,
      'AllowATMLimit': true,
      'AllowBranch': true
    }, {
      'CamsPlasNbr': '558294 0000981219',
      'CamsPlasStatus': 'Active',
      'CamsPlasType': 'MJ3',
      'DCIndicator': 'C',
      'CardPlCustRelCd': 'ADI',
      'CamsPlasStockCode': 'MJ3',
      'PlCurStatRsnCd': '',
      'PlasBranchNumber': '13',
      'CamsNameLn': 'MASTER ROBIN SHUN HIP',
      'PlasExpiryDate': '2020-11-30 12:00:00 AM',
      'PlasIssueDate': '2017-11-07 12:00:00 AM',
      'PlasticTypeDescrip': 'MASTERCARD GOLD BUSINESS CREDIT',
      'AllowBlock': true,
      'AllowReplace': false,
      'CardAccNumber': '589846 076124789 9',
      'Owner': false,
      'AvailBalance': 3250.0,
      'AllowATMLimit': true,
      'AllowBranch': true
    } ]
  })
}

function clientAccountCardsDetail (req, res, next) {
  res.json({
    'MetaData': {
      'ResultCode': 'R00',
      'Message': '',
      'InvalidFieldList': null,
      'result': {
        'resultCode': 0,
        'resultMessage': ''
      }
    },
    'Data': [ {
      'CamsPlasNbr': '558294 0000981219',
      'CamsPlasStatus': 'Active',
      'CamsPlasType': 'MJ3',
      'DCIndicator': 'C',
      'CardPlCustRelCd': 'ADI',
      'CamsPlasStockCode': 'MJ3',
      'PlCurStatRsnCd': '',
      'PlasBranchNumber': '13',
      'CamsNameLn': 'MASTER ROBIN SHUN HIP',
      'PlasExpiryDate': '2020-11-30 12:00:00 AM',
      'PlasIssueDate': '2017-11-07 12:00:00 AM',
      'PlasticTypeDescrip': 'MASTERCARD GOLD BUSINESS CREDIT',
      'AllowBlock': true,
      'AllowReplace': false,
      'CardAccNumber': '589846 076124789 9',
      'Owner': false,
      'AvailBalance': 3250.0,
      'AllowATMLimit': true,
      'AllowBranch': true
    } ]
  })
}

function blockCard (req, res, next) {
  res.json({
    'MetaData': {
      'ResultCode': 'R00',
      'Message': '',
      'InvalidFieldList': null,
      'result': {
        'resultCode': 0,
        'resultMessage': 'Block card request recieved'
      }
    }
  })
}

function replaceCard (req, res, next) {
  res.json({
    'MetaData': {
      'ResultCode': 'R00',
      'Message': '',
      'InvalidFieldList': null,
      'result': {
        'resultCode': 0,
        'resultMessage': 'Replace card request recieved'
      }
    }
  })
}
