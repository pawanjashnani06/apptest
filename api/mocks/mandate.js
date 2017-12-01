'use strict'

module.exports = {
  getMandates: getMandates,
  getMandateDetail: getMandateDetail,
  authorizeMandate: authorizeMandate
}

function getMandates (req, res) {
  res.json({
    'Data': [ {
      'DebtorName': 'User',
      'DebtorAccountNumber': '11111',
      'CreditorName': 'Tanisk',
      'MandateInitiationDate': '2017-11-21',
      'MandateStatus': 'Pending',
      'MandateReferenceNumber': '11',
      'MandateIdentifier': '1',
      'ContractReference': '12',
      'InstalmentAmount': 50.0,
      'MandateAuthenticationDate': ''
    } ]
  })
}

function getMandateDetail (req, res) {
  res.json({
    'Data': {
      'DebitValueType': 'USD',
      'FirstCollectionAmount': 50.0,
      'FirstCollectionDate': '2017-11-24',
      'InstalmentAmount': 50.0,
      'MaximumCollectionAmount': 300.0,
      'AdjustmentCategory': 'Pending',
      'AdjustmentRate': 9.5,
      'AdjustmentAmount': 100.0,
      'collectionDay': '',
      'Frequency': 'monthly',
      'DateAdjustmentRuleIndicator': '1',
      'UltimateCreditorName': '12',
      'CreditorAbbreviatedShortName': 'Tanisk',
      'ContractReference': '1222',
      'DebtorAccountNumber': '123456',
      'TrackingIndicator': 'T32',
      'MandateReferenceNumber': '1234',
      'MandateStatus': 'Active'
    }
  })
}

function authorizeMandate (req, res) {
  res.json({
    'MetaData': {
      'ResultCode': 'R00',
      'Message': 'dones',
      'InvalidFieldList': null,
      'result': {
        'resultCode': 0,
        'resultMessage': 'done'
      }
    }
  })
}
