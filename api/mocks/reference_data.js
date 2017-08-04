'use strict'

module.exports = {
  getBankDetails: getBankDetails,
  getBranches: getBranches,
  getBankDefinedBeneficiaries: getBankDefinedBeneficiaries,
  getNotificationTypes: getNotificationTypes,
  getServiceProviders: getServiceProviders,
  getServiceProviderProducts: getServiceProviderProducts,
  getFrequency: getFrequency,
  getDrawResults: getDrawResults,
  getLottoJackpot: getLottoJackpot,
  getLottoMetadata: getLottoMetadata,
  getStopPaymentReasons: getStopPaymentReasons,
  getDisputeDebitOrderReasons: getDisputeDebitOrderReasons
}

function getBankDetails (req, res, next) {
  res.json({
    'data': [
      {
        'bankCode': 'NBL211113',
        'bankName': 'Nedbank Limited',
        'universalCode': '211113',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'New Town',
            'branchCode': '213157'
          }
        ]
      },
      {
        'bankCode': 'IBL211171',
        'bankName': 'Investec bank Limited',
        'universalCode': '211171',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Old City',
            'branchCode': '223178'
          }
        ]
      },
      {
        'bankCode': 'SB217192',
        'bankName': 'Standard Bank',
        'universalCode': '217192',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Baker Street',
            'branchCode': '211101'
          }
        ]
      },
      {
        'bankCode': 'AB213421',
        'bankName': 'African Bank',
        'universalCode': '213421',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Malibu Town',
            'branchCode': '211845'
          }
        ]
      },
      {
        'bankCode': 'FB219876',
        'bankName': 'First National Bank',
        'universalCode': '219876',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Old Gallery',
            'branchCode': '219891'
          }
        ]
      },
      {
        'bankCode': 'BB210130',
        'bankName': 'Bidvest Bank',
        'universalCode': '210130',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Green Park',
            'branchCode': '211122'
          }
        ]
      },
      {
        'bankCode': 'TB214488',
        'bankName': 'Teba Bank',
        'universalCode': '214488',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'New Town',
            'branchCode': '214400'
          }
        ]
      },
      {
        'bankCode': 'NL891301',
        'bankName': 'National Bank Limited',
        'universalCode': '891301',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Aztec',
            'branchCode': '891399'
          }
        ]
      },
      {
        'bankCode': 'NR661032',
        'bankName': 'National Reserve Bank',
        'universalCode': '661032',
        'rTC': true,
        'branchCodes': [
          {
            'branchName': 'Downtown',
            'branchCode': '661991'
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

function getBranches (req, res, next) {
  res.json({
    'data': {
      'branchName': 'Model Town',
      'branchCode': 'GB211120'
    },
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

function getBankDefinedBeneficiaries (req, res, next) {
  res.json(
    {
      'data': [
        {
          'bDFID': '792010293471',
          'bDFName': 'Mark Twain',
          'sortCode': 1
        },
        {
          'bDFID': '792010293472',
          'bDFName': 'Steve Muller',
          'sortCode': 2
        },
        {
          'bDFID': '920326934730',
          'bDFName': 'Park Steven',
          'sortCode': 3
        },
        {
          'bDFID': '972890363232',
          'bDFName': 'Barb Oliver',
          'sortCode': 4
        },
        {
          'bDFID': '132010290213',
          'bDFName': 'Jack Balmer',
          'sortCode': 5
        },
        {
          'bDFID': '819379173209',
          'bDFName': 'Charlie Harper',
          'sortCode': 6
        },
        {
          'bDFID': '671010317829',
          'bDFName': 'Steve Gibson',
          'sortCode': 7
        },
        {
          'bDFID': '662010386973',
          'bDFName': 'Mathew Marvel',
          'sortCode': 8
        },
        {
          'bDFID': '912011386970',
          'bDFName': 'John Dow',
          'sortCode': 9
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
    }
  )
}

function getNotificationTypes (req, res, next) {
  res.json({
    'data': {
      'notificationType': 'EMAIL'
    },
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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

function getServiceProviders (req, res, next) {
  res.json({
    'data': [
      {
        'serviceProviderCode': 'MTN',
        'serviceProviderName': 'MTN',
        'accountInfo': {
          'accountType': 'Current',
          'accountNumber': '784567912056',
          'sortCode': '110110',
          'chargeAccountNr': '784567912056',
          'chargeAccountType': 'current',
          'chargeSortCode': '110110',
          'supportContactNr': '9812785678'
        }
      },
      {
        'serviceProviderCode': 'VCD',
        'serviceProviderName': 'Vodacom',
        'accountInfo': {
          'accountType': 'BDF',
          'accountNumber': '891199190192',
          'sortCode': '210210',
          'chargeAccountNr': '891199190192',
          'chargeAccountType': 'BDF',
          'chargeSortCode': '210210',
          'supportContactNr': '9980102010'
        }
      },
      {
        'serviceProviderCode': 'TKM',
        'serviceProviderName': 'Telkom',
        'accountInfo': {
          'accountType': 'Current',
          'accountNumber': '916710018199',
          'sortCode': '310310',
          'chargeAccountNr': '916710018199',
          'chargeAccountType': 'current',
          'chargeSortCode': '310310',
          'supportContactNr': '8910293089'
        }
      },
      {
        'serviceProviderCode': 'CEC',
        'serviceProviderName': 'Cell C',
        'accountInfo': {
          'accountType': 'BDF',
          'accountNumber': '453219023890',
          'sortCode': '410410',
          'chargeAccountNr': '453219023890',
          'chargeAccountType': 'BDF',
          'chargeSortCode': '410410',
          'supportContactNr': '8910382190'
        }
      },
      {
        'serviceProviderCode': 'VGM',
        'serviceProviderName': 'Virgin Mobile',
        'accountInfo': {
          'accountType': 'Current',
          'accountNumber': '781290187650',
          'sortCode': '510510',
          'chargeAccountNr': '781290187650',
          'chargeAccountType': 'current',
          'chargeSortCode': '510510',
          'supportContactNr': '9081927649'
        }
      }
    ],
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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

function getServiceProviderProducts (req, res, next) {
  res.json({
    'data': {
      'productCode': 'PAI',
      'productDescription': 'Prepaid Airtime',
      'minAmount': 100,
      'maxAmount': 1000,
      'allowPurchaseNow': true,
      'allowFutureDated': true,
      'allowRecurring': true,
      'voucherTopupInstructions': 'Recharge code description',
      'productDetails': [
        {
          'amountValue': 100,
          'bundleList': 'Gigabytes',
          'bundleValue': 2
        }
      ]
    },
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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

function getFrequency (req, res, next) {
  res.json({
    'data': {
      'reoccurrenceFrequency': 'WEEKLY',
      'reoccFreqLimPeriod': 1,
      'recValidWeekList': [
        {
          'recDayName': 'MONDAY',
          'recDayNum': '1',
          'recDayType': 'B'
        }
      ],
      'recValidMonthItems': [
        {
          'recValDays': '04'
        }
      ]
    },
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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

function getDrawResults (req, res, next) {
  res.json({
    'data': {
      'drawName': 'SuperLotto',
      'drawDate': '2017-07-13',
      'nextDrawDate': '2017-07-13',
      'drawNumber': 345127809256,
      'ballDetails': [
        {
          'sequenceNumber': '567',
          'ballNumber': 1
        }
      ],
      'winnerDetails': [
        {
          'divisionNumber': 12,
          'payoutAmount': 1000,
          'numberOfWinners': 10
        }
      ],
      'rolloverAmount': 10,
      'rolloverNumber': 10,
      'totalPrizePoolAmount': 100000,
      'totalSalesAmount': 1000,
      'estimatedJackpotAmount': 10000,
      'guaranteedJackpotAmount': 1000,
      'drawMachineName': 'LottoBowl',
      'ballSetNumber': '777',
      'powerBallDrawMachineName': 'LottoPower',
      'powerballSetNumber': '999',
      'provincialWinners': {}
    },
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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

function getLottoJackpot (req, res, next) {
  res.json({
    'data': [
      {
        'game': 'PowerBall',
        'nextDrawDate': '2017-07-13',
        'drawNumber': 777,
        'jackpotAmount': 1000000
      }
    ],
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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

function getLottoMetadata (req, res, next) {
  res.json({
    'data': {
      'gameType': 2,
      'gameTypeName': 'PowerBall',
      'startTime': '2017-07-13',
      'cutOffTimes': [
        {
          'dayNumber': 7,
          'dayName': 'Sunday',
          'time': '17:00'
        }
      ],
      'drawDays': [
        {
          'drawDayNumber': 7,
          'drawDayName': 'Sunday'
        }
      ],
      'postponed': true,
      'boardPrice': 1000,
      'lottoPlusPrice': 10,
      'maxNumberOfBoardsAllowed': 100,
      'maxNumberOfDrawsAllowed': 10,
      'minimumNumberOfBoardsAllowed': 10,
      'minimumNumberOfDrawsAllowed': 2
    },
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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

function getStopPaymentReasons (req, res, next) {
  res.json({
    'data': [
      {
        'channelTechType': 'StopPayment',
        'code': '1133213',
        'description': 'Stop payment'
      }
    ],
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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

function getDisputeDebitOrderReasons (req, res, next) {
  res.json({
    'data': [
      {
        'channelTechType': 'debitOrderReasons',
        'code': '1332333',
        'description': 'Dispute debit order reasons'
      }
    ],
    'metadata': {
      'Page': 1,
      'PageSize': 1,
      'PageLimit': 1,
      'ResultData': [
        {
          'BatchID': 'Sample text',
          'TransactionID': 'Sample text',
          'RecInstrID': 'Sample text',
          'ResultDetail': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'ExecEngineRef': 'Sample text'
        }
      ],
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
              'operationReference': 'Sample text',
              'result': 'Sample text',
              'status': 'Sample text',
              'reason': 'Sample text'
            }
          ],
          'execEngineRef': 'Sample text',
          'resultDetails': [
            {
              'OperationReference': 'Sample text',
              'Result': 'Sample text',
              'Status': 'Sample text',
              'Reason': 'Sample text',
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
