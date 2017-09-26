'use strict'

module.exports = {
  contactCardsDetailsGet: contactCardsDetailsGet,
  contactCardsDetailsPost: contactCardsDetailsPost,
  contactCardGet: contactCardGet,
  contactCardPut: contactCardPut,
  contactCardGetLatest: contactCardGetLatest,
  contactCardDelete: contactCardDelete
}

function contactCardsDetailsGet (req, res, next) {
  res.statusCode = 204
  res.json()
}

function contactCardsDetailsPost (req, res, next) {
  res.json({
    'data': {
      'contactCardID': 103,
      'contactCardName': 'Nikola',
      'contactCardDetails': [
        {
          'accountType': 'CA',
          'beneficiaryName': 'Nikola_Bank',
          'accountNumber': '1940062772',
          'bankName': 'NEDBANK',
          'beneficiaryType': 'BNFINT',
          'myReference': 'ned123',
          'beneficiaryReference': 'Nikola_Bank_PAY'
        },
        {
          'beneficiaryName': 'Nikola_Bank',
          'accountNumber': '01050020017',
          'beneficiaryType': 'PPD',
          'myReference': 'ned123'
        },
        {
          'beneficiaryName': 'Nikola_Bank',
          'accountNumber': '01050020009',
          'beneficiaryType': 'PEL',
          'myReference': 'ned123'
        }
      ],
      'contactCardNotifications': [
        {
          'notificationAddress': '0712223333',
          'notificationType': 'SMS',
          'notificationDefault': true
        },
        {
          'notificationAddress': 'doryr@http123.com',
          'notificationType': 'EMAIL',
          'notificationDefault': false
        }
      ]
    },
    'metadata': {
      'resultData': [
        {
          'transactionID': '90',
          'resultDetail': [
            {
              'operationReference': 'BENEFICIARYSAVED',
              'result': 'R00',
              'status': 'SUCCESS'
            },
            {
              'operationReference': 'NOTIFICATION',
              'result': '0',
              'status': 'SUCCESS',
              'reason': 'Success'
            }
          ]
        },
        {
          'transactionID': '16',
          'resultDetail': [
            {
              'operationReference': 'BENEFICIARYSAVED',
              'result': 'R00',
              'status': 'SUCCESS'
            },
            {
              'operationReference': 'NOTIFICATION',
              'result': '0',
              'status': 'SUCCESS',
              'reason': 'Success'
            }
          ]
        },
        {
          'transactionID': '17',
          'resultDetail': [
            {
              'operationReference': 'BENEFICIARYSAVED',
              'result': 'R00',
              'status': 'SUCCESS'
            },
            {
              'operationReference': 'NOTIFICATION',
              'result': '0',
              'status': 'SUCCESS',
              'reason': 'Success'
            }
          ]
        }
      ]
    }
  })
}

function contactCardGet (req, res, next) {
  res.json({
    'data': {
      'contactCardID': 1001,
      'contactCardName': 'Mark Twain',
      'contactCardDetails': [
        {
          'beneficiaryID': 10101010,
          'beneficiaryName': 'Mark Twain',
          'accountNumber': '783421094571',
          'bankName': 'Green Bank',
          'branchCode': '110110',
          'beneficiaryType': 'BDF',
          'beneficiarySubType': 'INT',
          'myReference': 'My debit references',
          'beneficiaryReference': 'My creditor references'
        }
      ],
      'contactCardNotifications': [
        {
          'notificationAddress': '9886712834',
          'notificationType': 'mobile',
          'notificationDefault': true,
          'notificationParents': [
            {
              'beneficiaryID': 1,
              'beneficiaryType': 'Sample text',
              'beneficiarySubType': 'Sample text',
              'notificationID': 1
            }
          ]
        }
      ]
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

function contactCardPut (req, res, next) {
  res.json({
    'data': {
      'contactCardID': 77,
      'contactCardName': 'INVEST',
      'contactCardDetails': [
        {
          'accountType': 'DS',
          'beneficiaryID': 27,
          'beneficiaryName': 'INVEST',
          'accountNumber': '11951986-9993',
          'bankName': 'NEDBANK',
          'branchCode': '171338',
          'beneficiaryType': 'BNFINT',
          'myReference': 'INVEST_123555',
          'beneficiaryReference': 'INVEST',
          'valid': true
        }
      ],
      'contactCardNotifications': [
        {
          'notificationAddress': 'h@n.co.za',
          'notificationType': 'EMAIL',
          'notificationDefault': false,
          'notificationParents': [
            {
              'beneficiaryID': 27,
              'beneficiaryType': 'BNFINT',
              'notificationID': 5615520
            }
          ]
        },
        {
          'notificationAddress': '',
          'notificationType': 'FAX',
          'notificationDefault': false,
          'notificationParents': [
            {
              'beneficiaryID': 27,
              'beneficiaryType': 'BNFINT',
              'notificationID': 5615524
            }
          ]
        },
        {
          'notificationAddress': '0619883752',
          'notificationType': 'SMS',
          'notificationDefault': false,
          'notificationParents': [
            {
              'beneficiaryID': 27,
              'beneficiaryType': 'BNFINT',
              'notificationID': 5615234
            }
          ]
        }
      ]
    },
    'metadata': {
      'resultData': [
        {
          'resultDetail': [
            {
              'operationReference': 'BENEFICIARYSAVED',
              'result': 'SUCCESS',
              'status': 'SUCCESS'
            }
          ]
        }
      ]
    }
  })
}

function contactCardGetLatest (req, res, next) {
  res.json({
    'data': {
      'contactCardID': 77,
      'contactCardName': 'Manzini',
      'contactCardDetails': [
        {
          'accountType': 'CA',
          'beneficiaryID': 41,
          'beneficiaryName': 'Manzini',
          'accountNumber': '1010039288',
          'bankName': 'NEDBANK',
          'branchCode': '101009',
          'beneficiaryType': 'BNFINT',
          'myReference': 'test payment to Beneficiary',
          'beneficiaryReference': 'Black Tax',
          'valid': true
        }
      ],
      'contactCardNotifications': [
        {
          'notificationAddress': 'natashagov@nedbank.co.za',
          'notificationType': 'EMAIL',
          'notificationDefault': false,
          'notificationParents': [
            {
              'beneficiaryID': 41,
              'beneficiaryType': 'BNFINT',
              'notificationID': 5613418
            }
          ]
        }
      ],
      'BeneficiaryRecentTransactDetails': [
        {
          'paymentDate': '2017-01-19T00:00:00',
          'paymentAmount': 50,
          'acctNumber': '1009087231',
          'paymentDRNarration': 'test payment to Beneficiary',
          'paymentCRNarration': 'Black Tax',
          'execEngineRef': '000000489029381048'
        }
      ]
    },
    'metadata': {
      'resultData': []
    }
  })
}

function contactCardDelete (req, res, next) {
  res.json({
    'data': [
      {
        'contactCardID': 10,
        'contactCardName': 'IGF 000655',
        'contactCardDetails': [
          {
            'beneficiaryID': 6,
            'beneficiaryType': 'BNFEXT'
          }
        ]
      }
    ],
    'metadata': {
      'resultData': [
        {
          'transactionID': '6',
          'resultDetail': [
            {
              'operationReference': 'BENEFICIARYSAVED',
              'result': 'R00',
              'status': 'SUCCESS'
            }
          ]
        }
      ]
    }
  })
}
