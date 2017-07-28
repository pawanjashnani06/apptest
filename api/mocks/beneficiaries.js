'use strict'

module.exports = {
  beneficiariesDetailsGet: beneficiariesDetailsGet,
  beneficiariesDetailsPost: beneficiariesDetailsPost,
  beneficiariesGroupPut: beneficiariesGroupPut,
  beneficiariesGroupsGet: beneficiariesGroupsGet,
  beneficiariesGroupsPost: beneficiariesGroupsPost,
  beneficiaryGet: beneficiaryGet,
  beneficiaryPut: beneficiaryPut,
  beneficiaryGroupGet: beneficiaryGroupGet
}

function beneficiariesDetailsGet (req, res, next) {
  res.json({
    'data': {
      'bfDetails': [
        {
          'beneficiaryID': 819201932819,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Mark Twain',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 719281932800,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Charlie Harper',
          'bank': 'Standard Bank',
          'sortCode': '211101',
          'acctType': 'BD',
          'acctNumber': '719281932800',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 997971112131,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Andre Istvan',
          'bank': 'African Bank',
          'sortCode': '',
          'acctType': 'BD',
          'acctNumber': '997971112131',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 561820990120,
          'bfTypeID': 'PPD',
          'bfType': 'PPD',
          'bfState': 'ACT',
          'bfName': 'Jason Bourne',
          'bank': '',
          'sortCode': '',
          'acctType': 'TD',
          'acctNumber': '9012318910',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': false,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 164819391010,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Adam Sandler',
          'bank': 'Green Bank',
          'sortCode': '',
          'acctType': 'BD',
          'acctNumber': '164819391010',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 810938183910,
          'bfTypeID': 'PPD',
          'bfType': 'PPD',
          'bfState': 'ACT',
          'bfName': 'AA Smith',
          'bank': '',
          'sortCode': '',
          'acctType': 'TD',
          'acctNumber': '8719371908',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': false,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 381204910271,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Black Stone',
          'bank': 'African Bank',
          'sortCode': '211845',
          'acctType': 'BD',
          'acctNumber': '381204910271',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 291038192391,
          'bfTypeID': 'PPD',
          'bfType': 'PPD',
          'bfState': 'ACT',
          'bfName': 'Bane',
          'bank': '',
          'sortCode': '',
          'acctType': 'TD',
          'acctNumber': '7970102030',
          'defaultDrNarrative': 'Debit statement for mobile account',
          'defaultCrNarrative': 'Credit beneficiary details',
          'instantPayment': true,
          'creditCard': false,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 530918900198,
          'bfTypeID': 'PPD',
          'bfType': 'PPD',
          'bfState': 'ACT',
          'bfName': 'Jake Jones',
          'bank': '',
          'sortCode': '',
          'acctType': 'TD',
          'acctNumber': '8719371908',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': false,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 661294917281,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Berta Hudson',
          'bank': 'African Bank',
          'sortCode': '211845',
          'acctType': 'BD',
          'acctNumber': '661294917281',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        },
        {
          'beneficiaryID': 188665109195,
          'bfTypeID': 'PPD',
          'bfType': 'PPD',
          'bfState': 'ACT',
          'bfName': 'Christopher',
          'bank': '',
          'sortCode': '',
          'acctType': 'TD',
          'acctNumber': '8866510919',
          'defaultDrNarrative': 'Debit statement for mobile account',
          'defaultCrNarrative': 'Credit beneficiary details',
          'instantPayment': true,
          'creditCard': false,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        }
      ],
      'bfSortOrder': {
        'custPrefField': 'BENF_NO',
        'custPrefOrder': 'ASC'
      }
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiariesDetailsPost (req, res, next) {
  res.json({
    'data': {
      'bfDetails': [
        {
          'beneficiaryID': 1,
          'bfTypeID': 'ALL',
          'bfType': 'BDF',
          'bfState': 'ACT',
          'bfName': 'Mark Twain',
          'bank': 'Green Bank',
          'sortCode': '001101',
          'acctType': 'BD',
          'acctNumber': '787970102030',
          'defaultDrNarrative': 'My Statement Details',
          'defaultCrNarrative': 'My Beneficiary Statements',
          'instantPayment': true,
          'creditCard': true,
          'notificationDetails': [
            {
              'notificationType': 'NONE',
              'notificationAddress': '',
              'notificationId': 1,
              'notificationDefaultInd': true
            }
          ],
          'bfRecentPayDetail': [
            {
              'paymentDate': '2017-07-11',
              'paymentAmount': 1,
              'acctNumber': '787970102030',
              'paymentDRNarration': 'Debit statement',
              'paymentCRNarration': 'Credit statement',
              'execEngineRef': ''
            }
          ],
          'ElectricityMeterDetails': {
            'municipality': 'Area Code',
            'customerName': 'John Dow',
            'customerAddress': 'Address Details'
          }
        }
      ],
      'bfSortOrder': {
        'custPrefField': 'BENF_NO',
        'custPrefOrder': 'ASC'
      }
    },
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiariesGroupPut (req, res, next) {
  res.json({
    'data': [
      {
        'bfListID': 1,
        'bfListName': 'Sample text',
        'bfListMember': [
          {
            'bfTypeID': 'ALL',
            'bfType': 'BDF',
            'beneficiaryID': '789034561210'
          },
          {
            'bfTypeID': 'BNF',
            'bfType': 'INT',
            'beneficiaryID': '907856341012'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ]
    }
  })
}

function beneficiariesGroupsGet (req, res, next) {
  res.json({
    'data': [
      {
        'bfListID': 1,
        'bfListName': 'AccountDetails',
        'bfListMember': [
          {
            'bfTypeID': 'ALL',
            'bfType': 'BDF',
            'beneficiaryID': '789034561210'
          },
          {
            'bfTypeID': 'BNF',
            'bfType': 'INT',
            'beneficiaryID': '907856341012'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiariesGroupsPost (req, res, next) {
  res.json({
    'data': [
      {
        'bfListID': 1,
        'bfListName': 'AccountDetails',
        'bfListMember': [
          {
            'bfTypeID': 'ALL',
            'bfType': 'BDF',
            'beneficiaryID': '789034561210'
          },
          {
            'bfTypeID': 'BNF',
            'bfType': 'INT',
            'beneficiaryID': '907856341012'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': 'Sample text',
          'transactionID': 'Sample text',
          'recInstrID': 'Sample text',
          'resultDetail': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ]
        }
      ]
    }
  })
}

function beneficiaryGet (req, res, next) {
  res.json({
    'data': [
      {
        'beneficiaryID': 9283787651423,
        'bfTypeID': 'ALL',
        'bfType': 'BDF',
        'bfState': 'ACT',
        'bfName': 'Mark Twain',
        'bank': 'Green Bank',
        'sortCode': '001101',
        'acctType': 'BD',
        'acctNumber': '787970102030',
        'defaultDrNarrative': 'My Statement Details',
        'defaultCrNarrative': 'My Beneficiary Statements',
        'instantPayment': true,
        'creditCard': true,
        'notificationDetails': [
          {
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationId': 1,
            'notificationDefaultInd': true
          }
        ],
        'bfRecentPayDetail': [
          {
            'paymentDate': '2017-07-11',
            'paymentAmount': 1,
            'acctNumber': '787970102030',
            'paymentDRNarration': 'Debit statement',
            'paymentCRNarration': 'Credit statement',
            'execEngineRef': ''
          }
        ],
        'ElectricityMeterDetails': {
          'municipality': 'Area Code',
          'customerName': 'John Dow',
          'customerAddress': 'Address Details'
        }
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiaryPut (req, res, next) {
  res.json({
    'data': [
      {
        'beneficiaryID': 1,
        'bfTypeID': 'ALL',
        'bfType': 'BDF',
        'bfState': 'ACT',
        'bfName': 'Mark Twain',
        'bank': 'Green Bank',
        'sortCode': '001101',
        'acctType': 'BD',
        'acctNumber': '787970102030',
        'defaultDrNarrative': 'My Statement Details',
        'defaultCrNarrative': 'My Beneficiary Statements',
        'instantPayment': true,
        'creditCard': true,
        'notificationDetails': [
          {
            'notificationType': 'NONE',
            'notificationAddress': '',
            'notificationId': 1,
            'notificationDefaultInd': true
          }
        ],
        'bfRecentPayDetail': [
          {
            'paymentDate': '2017-07-11',
            'paymentAmount': 1,
            'acctNumber': '787970102030',
            'paymentDRNarration': 'Debit statement',
            'paymentCRNarration': 'Credit statement',
            'execEngineRef': ''
          }
        ],
        'ElectricityMeterDetails': {
          'municipality': 'Area Code',
          'customerName': 'John Dow',
          'customerAddress': 'Address Details'
        }
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}

function beneficiaryGroupGet (req, res, next) {
  res.json({
    'data': [
      {
        'bfListID': 123,
        'bfListName': 'AccountDetails',
        'bfListMember': [
          {
            'bfTypeID': 'ALL',
            'bfType': 'BDF',
            'beneficiaryID': '789034561210'
          },
          {
            'bfTypeID': 'BNF',
            'bfType': 'INT',
            'beneficiaryID': '907856341012'
          }
        ]
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 1,
      'pageLimit': 1,
      'resultData': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ],
      'resultSets': [
        {
          'batchID': '',
          'transactionID': '',
          'recInstrID': '',
          'resultDetail': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ],
          'execEngineRef': '',
          'resultDetails': [
            {
              'operationReference': '',
              'result': '',
              'status': '',
              'reason': ''
            }
          ]
        }
      ]
    }
  })
}
