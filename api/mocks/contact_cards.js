'use strict'

module.exports = {
  contactCardsDetailsGet: contactCardsDetailsGet,
  contactCardsDetailsPost: contactCardsDetailsPost,
  contactCardGet: contactCardGet,
  contactCardPut: contactCardPut,
  contactCardGetLatest: contactCardGetLatest
}

function contactCardsDetailsGet (req, res, next) {
  res.json({
    'data': [
      {
        'contactCardID': 2,
        'contactCardName': 'Clark Kent',
        'contactCardDetails': [
          {
            'accountType': 'SA',
            'beneficiaryID': 1,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '2010155092',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SwaDRChnaged1',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          },
          {
            'accountType': 'CC',
            'beneficiaryID': 222,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '09991020008',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'DRChnaged',
            'beneficiaryReference': 'CRChnaged',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-08T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'SwaDRChnaged1',
            'paymentCRNarration': 'SwaCRChanged1',
            'execEngineRef': '000000489043657427'
          },
          {
            'paymentDate': '2017-07-25T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'SwaDRChnaged1',
            'paymentCRNarration': 'SwaCRChanged1',
            'execEngineRef': '000000489042150795'
          },
          {
            'paymentDate': '2017-07-21T00:00:00',
            'paymentAmount': 20,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'SwaDRChnaged1',
            'paymentCRNarration': 'SwaCRChanged1',
            'execEngineRef': '000000489042113932'
          }
        ]
      },
      {
        'contactCardID': 4,
        'contactCardName': 'TswaneFBEMeterzzz',
        'contactCardDetails': [
          {
            'accountType': 'SA',
            'beneficiaryID': 991,
            'beneficiaryName': 'TswaneFBEMeterzzz',
            'accountNumber': '2010155001',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'DRChnaged',
            'beneficiaryReference': 'CRChanged',
            'valid': true
          },
          {
            'accountType': 'CC',
            'beneficiaryID': 2,
            'beneficiaryName': 'TswaneFBEMeterzzz',
            'accountNumber': '01050020008',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'FBE',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-14T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'FBE',
            'paymentCRNarration': '0002174977 03046131 N',
            'execEngineRef': '000000489044656473'
          },
          {
            'paymentDate': '2017-05-19T00:00:00',
            'paymentAmount': 400,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Alpha Numeric Meter Input',
            'paymentCRNarration': '0001470158 03036065 N',
            'execEngineRef': '000000489035140837'
          },
          {
            'paymentDate': '2017-01-20T00:00:00',
            'paymentAmount': 40,
            'acctNumber': '2698133198',
            'paymentDRNarration': 'Test',
            'paymentCRNarration': '0001149450 02926973 N',
            'execEngineRef': '000000489029383277'
          }
        ]
      },
      {
        'contactCardID': 7,
        'contactCardName': 'heinTEST_PPD',
        'contactCardDetails': [
          {
            'accountType': 'SA',
            'beneficiaryID': 1,
            'beneficiaryName': 'heinTEST_PPD',
            'accountNumber': '2010189011',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'DebitChanged',
            'beneficiaryReference': 'CreditChanged',
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 4,
            'beneficiaryName': 'heinTEST_PPD',
            'accountNumber': '0829806622',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'heinTEST_PPD',
            'beneficiaryReference': 'heinTEST_PPD',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-04-05T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009087231',
            'paymentDRNarration': 'heinTEST_PPD',
            'paymentCRNarration': '00829806622 178910 29178910 N',
            'execEngineRef': '000000489031737395'
          },
          {
            'paymentDate': '2016-08-24T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'heinTEST_PPD',
            'paymentCRNarration': '0829806622',
            'execEngineRef': '000000489025563015'
          }
        ]
      },
      {
        'contactCardID': 8,
        'contactCardName': 'Absa_MySelf',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 4,
            'beneficiaryName': 'Absa_MySelf',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Absa_MySelf_EXT',
            'beneficiaryReference': 'Absa_MySelf_EXT',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0715712967',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 4,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614754
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-06-20T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '377090000346086',
            'paymentDRNarration': 'Absa_MySelf_EXT',
            'paymentCRNarration': 'Absa_MySelf_EXT',
            'execEngineRef': '000000489041687077'
          }
        ]
      },
      {
        'contactCardID': 9,
        'contactCardName': 'f1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 5,
            'beneficiaryName': 'f1',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'absa123',
            'beneficiaryReference': '321absa',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 5,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614764
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 5,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614763
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 10,
        'contactCardName': 'Vodacom',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 5,
            'beneficiaryName': 'Vodacom',
            'accountNumber': '0829806621',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'VodacomPPD',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0829806621',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 5,
                'beneficiaryType': 'PPD',
                'notificationID': 16766
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-06-28T00:00:00',
            'paymentAmount': 87,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'VodacomPPD',
            'paymentCRNarration': '00829806621 177633 29177633 Y',
            'execEngineRef': '000000489024147605'
          }
        ]
      },
      {
        'contactCardID': 11,
        'contactCardName': 'Igor_Contact555',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 6,
            'beneficiaryName': 'Igor_Contact555',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'absa123',
            'beneficiaryReference': '321absa',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 6,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 20738
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 6,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 20737
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-04-03T00:00:00',
            'paymentAmount': 300,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489031724981'
          },
          {
            'paymentDate': '2017-03-30T00:00:00',
            'paymentAmount': 300,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489031583764'
          }
        ]
      },
      {
        'contactCardID': 12,
        'contactCardName': 'PrepaidforIgor555',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 6,
            'beneficiaryName': 'PrepaidforIgor555',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 6,
                'beneficiaryType': 'PPD',
                'notificationID': 20734
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 6,
                'beneficiaryType': 'PPD',
                'notificationID': 20733
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 14,
        'contactCardName': 'PrepaidforIgor2555',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 7,
            'beneficiaryName': 'PrepaidforIgor2555',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 7,
                'beneficiaryType': 'PPD',
                'notificationID': 20736
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 7,
                'beneficiaryType': 'PPD',
                'notificationID': 20735
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 16,
        'contactCardName': 'f4',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 8,
            'beneficiaryName': 'f4',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 8,
                'beneficiaryType': 'PPD',
                'notificationID': 5614758
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 8,
                'beneficiaryType': 'PPD',
                'notificationID': 5614757
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 17,
        'contactCardName': 'f5',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 9,
            'beneficiaryName': 'f5',
            'accountNumber': '01050020003',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'MeterFBETsswane',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 9,
                'beneficiaryType': 'PEL',
                'notificationID': 5614760
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 9,
                'beneficiaryType': 'PEL',
                'notificationID': 5614759
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 18,
        'contactCardName': '20Jan17',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 9,
            'beneficiaryName': '20Jan17',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'capitec123',
            'beneficiaryReference': '321capitec',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 9,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615455
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 9,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615456
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 19,
        'contactCardName': 'Prepaid20Jan17',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 10,
            'beneficiaryName': 'Prepaid20Jan17',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 10,
                'beneficiaryType': 'PPD',
                'notificationID': 5613440
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 10,
                'beneficiaryType': 'PPD',
                'notificationID': 5613439
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 20,
        'contactCardName': '20Jan17',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 10,
            'beneficiaryName': '20Jan17',
            'accountNumber': '1012108910',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'ned123',
            'beneficiaryReference': 'NED_CA',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 10,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613452
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 10,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613451
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 21,
        'contactCardName': 'Prepaid20Jan172',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 11,
            'beneficiaryName': 'Prepaid20Jan172',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 11,
                'beneficiaryType': 'PPD',
                'notificationID': 5613442
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 11,
                'beneficiaryType': 'PPD',
                'notificationID': 5613441
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 22,
        'contactCardName': 'Test1Investment',
        'contactCardDetails': [
          {
            'accountType': 'DS',
            'beneficiaryID': 11,
            'beneficiaryName': 'Test1Investment',
            'accountNumber': '33600639996',
            'bankName': 'NEDBANK',
            'branchCode': '138537',
            'beneficiaryType': 'BNFINT',
            'myReference': 'string',
            'beneficiaryReference': 'string',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'string',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 11,
                'beneficiaryType': 'BNFINT',
                'notificationID': 20555
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 23,
        'contactCardName': 'MTN',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 12,
            'beneficiaryName': 'MTN',
            'accountNumber': '0839000128',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'MTN PPD',
            'beneficiaryReference': 'MTN PPD',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 24,
        'contactCardName': '20Jan17',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 12,
            'beneficiaryName': '20Jan17',
            'accountNumber': '62003019503',
            'branchCode': '222726',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'FNB123',
            'beneficiaryReference': '321fnb234',
            'valid': false
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 12,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5613453
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 12,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5613454
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 26,
        'contactCardName': 'f6',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 13,
            'beneficiaryName': 'f6',
            'accountNumber': '01050020009',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'MeterEskom',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 13,
                'beneficiaryType': 'PEL',
                'notificationID': 5614762
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 13,
                'beneficiaryType': 'PEL',
                'notificationID': 5614761
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-05-23T00:00:00',
            'paymentAmount': 700,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'azerty',
            'paymentCRNarration': '0001476812 03043936 Y',
            'execEngineRef': '000000489035291992'
          }
        ]
      },
      {
        'contactCardID': 27,
        'contactCardName': 'Nedbank_Benef',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 14,
            'beneficiaryName': 'Nedbank_Benef',
            'accountNumber': '1012108910',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Ned_MyDesc',
            'beneficiaryReference': 'FNed_YourDesc',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0823334444',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 14,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613577
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-07-06T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Ned_MyDesc',
            'paymentCRNarration': 'FNed_YourDesc',
            'execEngineRef': '000000489041907368'
          },
          {
            'paymentDate': '2017-05-10T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Ned_MyDesc',
            'paymentCRNarration': 'FNed_YourDesc',
            'execEngineRef': '000000489034155887'
          },
          {
            'paymentDate': '2017-05-10T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Ned_MyDesc',
            'paymentCRNarration': 'FNed_YourDesc',
            'execEngineRef': '000000489034155508'
          }
        ]
      },
      {
        'contactCardID': 28,
        'contactCardName': 'Telkom mobile',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 14,
            'beneficiaryName': 'Telkom mobile',
            'accountNumber': '0614991507',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Telkome Mobile',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 29,
        'contactCardName': 'Riste',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 15,
            'beneficiaryName': 'Riste',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'RisteQA',
            'beneficiaryReference': 'RisteQA',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '+38970833334',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 15,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 21015
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 30,
        'contactCardName': 'Testing PUT',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 15,
            'beneficiaryName': 'Testing PUT',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'PPD_Benef',
            'beneficiaryReference': 'PPD_IBR_L',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 32,
        'contactCardName': 'PPD_IBR',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 16,
            'beneficiaryName': 'PPD_IBR',
            'accountNumber': '0715712967',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'PPD_IBR_H',
            'beneficiaryReference': 'PPD_IBR_H',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0820921011',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 16,
                'beneficiaryType': 'PPD',
                'notificationID': 16957
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 33,
        'contactCardName': 'DS_DEL',
        'contactCardDetails': [
          {
            'accountType': 'DS',
            'beneficiaryID': 17,
            'beneficiaryName': 'DS_DEL',
            'accountNumber': '1009959939',
            'bankName': 'NEDBANK',
            'branchCode': '106012',
            'beneficiaryType': 'BNFINT',
            'myReference': 'DS_DEL',
            'beneficiaryReference': 'DS_DEL',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 34,
        'contactCardName': 'PPD_IBR',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 17,
            'beneficiaryName': 'PPD_IBR',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'PPD_IBR_L',
            'beneficiaryReference': 'PPD_IBR_L',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 35,
        'contactCardName': 'HeinTestQAEskom',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 18,
            'beneficiaryName': 'HeinTestQAEskom',
            'accountNumber': '01050020009',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'azerty',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-08-23T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'qwerty',
            'paymentCRNarration': '0001044806 02924839 Y',
            'execEngineRef': '000000489025537743'
          }
        ]
      },
      {
        'contactCardID': 36,
        'contactCardName': 'PSST1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 18,
            'beneficiaryName': 'PSST1',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'absa123',
            'beneficiaryReference': '321absa',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 18,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5612991
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 18,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5612990
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 37,
        'contactCardName': 'Agnes Review',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 19,
            'beneficiaryName': 'Agnes Review',
            'accountNumber': '01050020009',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'beneficiaryReference': 'Agnes Review',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0788216968',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 19,
                'beneficiaryType': 'PEL',
                'notificationID': 17155
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-11-22T00:00:00',
            'paymentAmount': 23,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'azerty',
            'paymentCRNarration': '0001121949 02926321 Y',
            'execEngineRef': '000000489028390130'
          },
          {
            'paymentDate': '2016-11-22T00:00:00',
            'paymentAmount': 23,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'azerty',
            'paymentCRNarration': '0001121947 02926319 Y',
            'execEngineRef': '000000489028390129'
          },
          {
            'paymentDate': '2016-10-07T00:00:00',
            'paymentAmount': 55,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'defect test',
            'paymentCRNarration': '0001085443 02925818 Y',
            'execEngineRef': '000000489027113434'
          }
        ]
      },
      {
        'contactCardID': 38,
        'contactCardName': 'PSST2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 19,
            'beneficiaryName': 'PSST2',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'capitec123',
            'beneficiaryReference': '321capitec',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 19,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5612993
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 19,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5612992
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 39,
        'contactCardName': 'AlphaNumericMeter',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 20,
            'beneficiaryName': 'AlphaNumericMeter',
            'accountNumber': 'ABC20035',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'Alpha Numeric Meter',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-10-07T00:00:00',
            'paymentAmount': 75,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'test for defect',
            'paymentCRNarration': '0001085408 02925812 Y',
            'execEngineRef': '000000489027113405'
          },
          {
            'paymentDate': '2016-08-30T00:00:00',
            'paymentAmount': 25,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'Eskom Token Review',
            'paymentCRNarration': '0001048700 02924877 N',
            'execEngineRef': '000000489025651647'
          }
        ]
      },
      {
        'contactCardID': 40,
        'contactCardName': 'Kristijan Cvetkovikj',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 20,
            'beneficiaryName': 'Kristijan Cvetkovikj',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Kristijan payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 41,
        'contactCardName': 'heinTEST_PPD1231',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 21,
            'beneficiaryName': 'heinTEST_PPD1231',
            'accountNumber': '0829806622',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'heinTEST_PPD1',
            'beneficiaryReference': 'heinTEST_PPD1',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 42,
        'contactCardName': 'Austin Powers',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 21,
            'beneficiaryName': 'Austin Powers',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Austin payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 43,
        'contactCardName': 'Ambros Best FBE',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 22,
            'beneficiaryName': 'Ambros Best FBE',
            'accountNumber': '01050020008',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'Ambros Best FBE',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0788216968',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 22,
                'beneficiaryType': 'PEL',
                'notificationID': 17121
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-10-17T00:00:00',
            'paymentAmount': 150,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'FBE',
            'paymentCRNarration': '0001097174 02925898 Y',
            'execEngineRef': '000000489027227225'
          },
          {
            'paymentDate': '2016-10-17T00:00:00',
            'paymentAmount': 150,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'FBE',
            'paymentCRNarration': '0001097163 02925894 Y',
            'execEngineRef': '000000489027227224'
          },
          {
            'paymentDate': '2016-10-07T00:00:00',
            'paymentAmount': 39,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'Ambros Best FBE',
            'paymentCRNarration': '0001085412 02925816 Y',
            'execEngineRef': '000000489027113407'
          }
        ]
      },
      {
        'contactCardID': 44,
        'contactCardName': 'Petko Petkovski',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 22,
            'beneficiaryName': 'Petko Petkovski',
            'accountNumber': '13213123',
            'bankName': 'BNP PARIBAS',
            'branchCode': '688000',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Petko payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 45,
        'contactCardName': 'Branko Crvenkovski',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 23,
            'beneficiaryName': 'Branko Crvenkovski',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Branko payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 46,
        'contactCardName': 'CellCPrepaid',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 23,
            'beneficiaryName': 'CellCPrepaid',
            'accountNumber': '0622210987',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'asd',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-14T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Send money',
            'paymentCRNarration': '0622210987',
            'execEngineRef': '000000489044656467'
          },
          {
            'paymentDate': '2017-06-20T00:00:00',
            'paymentAmount': 12,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'asd',
            'paymentCRNarration': '00622210987 423247 06423247 Y',
            'execEngineRef': '000000489041676379'
          },
          {
            'paymentDate': '2017-06-09T00:00:00',
            'paymentAmount': 10,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'asd',
            'paymentCRNarration': '00622210987 423196 06423196 N',
            'execEngineRef': '000000489041480365'
          }
        ]
      },
      {
        'contactCardID': 48,
        'contactCardName': 'Nikola Gruevski',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 24,
            'beneficiaryName': 'Nikola Gruevski',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Nikola payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 49,
        'contactCardName': 'test money',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 25,
            'beneficiaryName': 'test money',
            'accountNumber': '0788216968',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'test money',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 50,
        'contactCardName': 'NedbankTestAccount',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 25,
            'beneficiaryName': 'NedbankTestAccount',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'NedbankTestAccount payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-05-05T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'onceoff_pay_ext',
            'paymentCRNarration': 'onceoff_pay_ext',
            'execEngineRef': '000000489033291934'
          }
        ]
      },
      {
        'contactCardID': 51,
        'contactCardName': 'Luchos Matadores',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 26,
            'beneficiaryName': 'Luchos Matadores',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Luchos payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 52,
        'contactCardName': '4321',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 26,
            'beneficiaryName': '4321',
            'accountNumber': '0712345679',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 53,
        'contactCardName': 'kiko_contact',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 27,
            'beneficiaryName': 'kiko_contact',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'kiko_contact payment',
            'beneficiaryReference': 'payment',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 27,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5613153
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 54,
        'contactCardName': 'Prepaidfordora2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 27,
            'beneficiaryName': 'Prepaidfordora2',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 27,
                'beneficiaryType': 'PPD',
                'notificationID': 5613470
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 27,
                'beneficiaryType': 'PPD',
                'notificationID': 5613469
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 55,
        'contactCardName': 'HL-Beneficiary',
        'contactCardDetails': [
          {
            'accountType': 'HL',
            'beneficiaryID': 28,
            'beneficiaryName': 'HL-Beneficiary',
            'accountNumber': '8000026000101',
            'bankName': 'NEDBANK',
            'branchCode': '760005',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Post beneficiary for saving ac',
            'beneficiaryReference': 'Post for beneficiary2',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'paras.jain@nihilent.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 28,
                'beneficiaryType': 'BNFINT',
                'notificationID': 16878
              }
            ]
          },
          {
            'notificationAddress': '0823334444',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 28,
                'beneficiaryType': 'BNFINT',
                'notificationID': 19416
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 56,
        'contactCardName': 'PPD_IBR123',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 28,
            'beneficiaryName': 'PPD_IBR123',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'PPD_IBR_L',
            'beneficiaryReference': 'PPD_IBR_L',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 57,
        'contactCardName': 'f4',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 29,
            'beneficiaryName': 'f4',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 29,
                'beneficiaryType': 'PPD',
                'notificationID': 5614770
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 29,
                'beneficiaryType': 'PPD',
                'notificationID': 5614769
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 58,
        'contactCardName': 'kiko_contact',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 29,
            'beneficiaryName': 'kiko_contact',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'kiko_contact payment',
            'beneficiaryReference': 'payment',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 29,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5613154
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 59,
        'contactCardName': 'kiko_contact',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 30,
            'beneficiaryName': 'kiko_contact',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'kiko_contact payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 30,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613155
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 60,
        'contactCardName': 'DELETETshwaneFBE',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 30,
            'beneficiaryName': 'DELETETshwaneFBE',
            'accountNumber': '01050020003',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'DELETETshwaneFBE',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-03-28T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'MeterFBETsswane',
            'paymentCRNarration': '0001261854 02927639 Y',
            'execEngineRef': '000000489031124298'
          },
          {
            'paymentDate': '2017-03-28T00:00:00',
            'paymentAmount': 10,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'MeterFBETsswane',
            'paymentCRNarration': '0001261821 02927637 Y',
            'execEngineRef': '000000489031124297'
          }
        ]
      },
      {
        'contactCardID': 61,
        'contactCardName': 'f5',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 31,
            'beneficiaryName': 'f5',
            'accountNumber': '01050020003',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'MeterFBETsswane',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 31,
                'beneficiaryType': 'PEL',
                'notificationID': 5614772
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 31,
                'beneficiaryType': 'PEL',
                'notificationID': 5614771
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 62,
        'contactCardName': 'kiko_contact1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 31,
            'beneficiaryName': 'kiko_contact1',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'kiko_contact1 payment',
            'beneficiaryReference': 'payment',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 63,
        'contactCardName': 'kiko_ctaont8 test',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 32,
            'beneficiaryName': 'kiko_ctaont8 test',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'kiko_ctaont8 payment',
            'beneficiaryReference': 'payment',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 64,
        'contactCardName': 'PPD_IBR123',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 32,
            'beneficiaryName': 'PPD_IBR123',
            'accountNumber': '0715712967',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'PPD_IBR_H',
            'beneficiaryReference': 'PPD_IBR_H',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 65,
        'contactCardName': 'f6',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 33,
            'beneficiaryName': 'f6',
            'accountNumber': '01050020009',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'MeterEskom',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 33,
                'beneficiaryType': 'PEL',
                'notificationID': 5614774
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 33,
                'beneficiaryType': 'PEL',
                'notificationID': 5614773
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 66,
        'contactCardName': 'kiko_ctaont8 test',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 33,
            'beneficiaryName': 'kiko_ctaont8 test',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'kiko_ctaont8 payment',
            'beneficiaryReference': 'payment',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 67,
        'contactCardName': 'kiko_ctaont8 test',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 34,
            'beneficiaryName': 'kiko_ctaont8 test',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'kiko_ctaont8 payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 68,
        'contactCardName': 'Prepaidfordora24',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 34,
            'beneficiaryName': 'Prepaidfordora24',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 34,
                'beneficiaryType': 'PPD',
                'notificationID': 5613596
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 34,
                'beneficiaryType': 'PPD',
                'notificationID': 5613595
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 69,
        'contactCardName': 'Investec',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 35,
            'beneficiaryName': 'Investec',
            'accountNumber': '10010038878',
            'bankName': 'INVESTEC BANK LIMITED',
            'branchCode': '580105',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Investec Bank',
            'beneficiaryReference': 'Investec',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 70,
        'contactCardName': 'Prepaidfordora24',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 35,
            'beneficiaryName': 'Prepaidfordora24',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 35,
                'beneficiaryType': 'PPD',
                'notificationID': 5613598
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 35,
                'beneficiaryType': 'PPD',
                'notificationID': 5613597
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 71,
        'contactCardName': 'kiko_ctaont8 test',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 36,
            'beneficiaryName': 'kiko_ctaont8 test',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'kiko_ctaont8 payment',
            'beneficiaryReference': 'payment',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 36,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5613157
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 72,
        'contactCardName': 'kiko_ctaont8 test',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 37,
            'beneficiaryName': 'kiko_ctaont8 test',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'kiko_ctaont8 payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 37,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613158
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 73,
        'contactCardName': 'asdf zxcv',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 38,
            'beneficiaryName': 'asdf zxcv',
            'accountNumber': '1012266990',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'asdf payment',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 75,
        'contactCardName': 'Bankee2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 39,
            'beneficiaryName': 'Bankee2',
            'accountNumber': '0632468910',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'MTN Prepaid',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'ambroseb@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 39,
                'beneficiaryType': 'PPD',
                'notificationID': 5613771
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 39,
                'beneficiaryType': 'PPD',
                'notificationID': 5613770
              }
            ]
          },
          {
            'notificationAddress': '0788216968',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 39,
                'beneficiaryType': 'PPD',
                'notificationID': 5613769
              }
            ]
          }
        ]
      },
      {
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
      {
        'contactCardID': 78,
        'contactCardName': 'Qa_Scp_mobile Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 41,
            'beneficiaryName': 'Qa_Scp_mobile Prepaid 1',
            'accountNumber': '0740033923',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Qa_Scp_mobile',
            'beneficiaryReference': 'Prepaidclc',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 79,
        'contactCardName': 'Manzini',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 42,
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
                'beneficiaryID': 42,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613425
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 80,
        'contactCardName': 'Qa_Scp_imali',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 42,
            'beneficiaryName': 'Qa_Scp_imali',
            'accountNumber': '0715712967',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Qa_Scp_imali',
            'beneficiaryReference': 'Imali',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 81,
        'contactCardName': 'HeinSelf',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 43,
            'beneficiaryName': 'HeinSelf',
            'accountNumber': '0715712967',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'self',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-04-05T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1009087231',
            'paymentDRNarration': 'self',
            'paymentCRNarration': '0715712967',
            'execEngineRef': '000000489031737394'
          },
          {
            'paymentDate': '2017-04-04T00:00:00',
            'paymentAmount': 200,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'changed_ref',
            'paymentCRNarration': '0829806622',
            'execEngineRef': '000000489031737367'
          },
          {
            'paymentDate': '2017-04-04T00:00:00',
            'paymentAmount': 110,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'IMALI4April2017',
            'paymentCRNarration': '0715712967',
            'execEngineRef': '000000489031737366'
          }
        ]
      },
      {
        'contactCardID': 82,
        'contactCardName': 'Sash Lee',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 43,
            'beneficiaryName': 'Sash Lee',
            'accountNumber': '1010039288',
            'bankName': 'NEDBANK',
            'branchCode': '101009',
            'beneficiaryType': 'BNFINT',
            'myReference': 'test payment to Beneficiary',
            'beneficiaryReference': 'Fees',
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
                'beneficiaryID': 43,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613426
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-01-20T00:00:00',
            'paymentAmount': 150,
            'acctNumber': '1009087231',
            'paymentDRNarration': 'test payment to Beneficiary',
            'paymentCRNarration': 'Fees',
            'execEngineRef': '000000489029382426'
          }
        ]
      },
      {
        'contactCardID': 83,
        'contactCardName': 'FNB Test',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 44,
            'beneficiaryName': 'FNB Test',
            'accountNumber': '50021147993',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'FNB Account',
            'beneficiaryReference': 'FNB Account',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'danisam@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 44,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 16955
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 84,
        'contactCardName': 'Nedbank_Benef',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 45,
            'beneficiaryName': 'Nedbank_Benef',
            'accountNumber': '1012108910',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Ned_MyDesc',
            'beneficiaryReference': 'FNed_YourDesc',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0823334444',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 45,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613578
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 85,
        'contactCardName': 'QAQA',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 46,
            'beneficiaryName': 'QAQA',
            'accountNumber': '1012108910',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Ned_MyDesc',
            'beneficiaryReference': 'FNed_YourDesc',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0823334444',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 46,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613581
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 88,
        'contactCardName': 'f4',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 48,
            'beneficiaryName': 'f4',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 48,
                'beneficiaryType': 'PPD',
                'notificationID': 5614596
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 48,
                'beneficiaryType': 'PPD',
                'notificationID': 5614595
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 89,
        'contactCardName': 'Regression Current',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 48,
            'beneficiaryName': 'Regression Current',
            'accountNumber': '1725156903',
            'bankName': 'NEDBANK',
            'branchCode': '192405',
            'beneficiaryType': 'BNFINT',
            'myReference': 'My desc',
            'beneficiaryReference': 'Beneficiary state',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-06-01T00:00:00',
            'paymentAmount': 90,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'My desc',
            'paymentCRNarration': 'Beneficiary state',
            'execEngineRef': '000000489023923585'
          }
        ]
      },
      {
        'contactCardID': 92,
        'contactCardName': 'RisstePPD_QA',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 50,
            'beneficiaryName': 'RisstePPD_QA',
            'accountNumber': '38970833334',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'RisstePPD_QA',
            'beneficiaryReference': 'RisstePPD_QA',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-12-09T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'RisstePPD_QA',
            'paymentCRNarration': '38970833334',
            'execEngineRef': '000000489028722242'
          }
        ]
      },
      {
        'contactCardID': 93,
        'contactCardName': 'Bankee3',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 51,
            'beneficiaryName': 'Bankee3',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'EXT_Acc Capitec BNF',
            'beneficiaryReference': ' EXT Account Capitec Bnf',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'ambroseb@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 51,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5613777
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 51,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5613776
              }
            ]
          },
          {
            'notificationAddress': '0788216968',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 51,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5613775
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 94,
        'contactCardName': 'PrepaidforPSST1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 51,
            'beneficiaryName': 'PrepaidforPSST1',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 51,
                'beneficiaryType': 'PPD',
                'notificationID': 5612983
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 51,
                'beneficiaryType': 'PPD',
                'notificationID': 5612982
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 95,
        'contactCardName': 'PrepaidforPSST2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 52,
            'beneficiaryName': 'PrepaidforPSST2',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 52,
                'beneficiaryType': 'PPD',
                'notificationID': 5612985
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 52,
                'beneficiaryType': 'PPD',
                'notificationID': 5612984
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 96,
        'contactCardName': 'Reg Edit',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 52,
            'beneficiaryName': 'Reg Edit',
            'accountNumber': '2043019422',
            'bankName': 'NEDBANK',
            'branchCode': '104309',
            'beneficiaryType': 'BNFINT',
            'myReference': 'My State Edit',
            'beneficiaryReference': 'Benf state edit',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 97,
        'contactCardName': 'investTestIBR2',
        'contactCardDetails': [
          {
            'accountType': 'DS',
            'beneficiaryID': 53,
            'beneficiaryName': 'investTestIBR2',
            'accountNumber': '33600639996',
            'bankName': 'NEDBANK',
            'branchCode': '138537',
            'beneficiaryType': 'BNFINT',
            'myReference': 'investTestIBR2',
            'beneficiaryReference': 'investTestIBR2',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 98,
        'contactCardName': 'ABSA_Benef',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 54,
            'beneficiaryName': 'ABSA_Benef',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'onceoff_pay_ext',
            'beneficiaryReference': 'onceoff_pay_ext',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'Heinoo@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 54,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615393
              }
            ]
          },
          {
            'notificationAddress': '0715712967',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 54,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615394
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-15T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'onceoff_pay_ext',
            'paymentCRNarration': 'onceoff_pay_ext',
            'execEngineRef': '000000489044678852'
          },
          {
            'paymentDate': '2017-08-14T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'onceoff_pay_ext',
            'paymentCRNarration': 'onceoff_pay_ext',
            'execEngineRef': '000000489044657661'
          },
          {
            'paymentDate': '2017-08-14T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'onceoff_pay_ext',
            'paymentCRNarration': 'onceoff_pay_ext',
            'execEngineRef': '000000489044656465'
          }
        ]
      },
      {
        'contactCardID': 99,
        'contactCardName': 'Bankee4',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 55,
            'beneficiaryName': 'Bankee4',
            'accountNumber': '1940062772',
            'bankName': 'NEDBANK',
            'branchCode': '194037',
            'beneficiaryType': 'BNFINT',
            'myReference': 'INT BNF',
            'beneficiaryReference': 'INT Account ABSA Bnf',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'ambroseb@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 55,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613780
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 55,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613779
              }
            ]
          },
          {
            'notificationAddress': '0788216968',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 55,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5613778
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 100,
        'contactCardName': 'Im Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 55,
            'beneficiaryName': 'Im Prepaid 1',
            'accountNumber': '123123123',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Im payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 55,
                'beneficiaryType': 'PPD',
                'notificationID': 5613144
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 101,
        'contactCardName': 'Im Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 56,
            'beneficiaryName': 'Im Prepaid 1',
            'accountNumber': '123123123',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Im payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 56,
                'beneficiaryType': 'PPD',
                'notificationID': 5613145
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 102,
        'contactCardName': 'Standard B',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 56,
            'beneficiaryName': 'Standard B',
            'accountNumber': '2504014',
            'bankName': 'STANDARD BANK SOUTH AFRICA',
            'branchCode': '051001',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'STANDARD BANK',
            'beneficiaryReference': 'STANDARD BANK',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-05-17T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Calvin payment',
            'paymentCRNarration': 'payment',
            'execEngineRef': '000000489035072330'
          }
        ]
      },
      {
        'contactCardID': 103,
        'contactCardName': 'ABC SHOE (PTY) LTD',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 57,
            'beneficiaryName': 'ABC SHOE (PTY) LTD',
            'accountNumber': '0000000064',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'ABC Shoes',
            'beneficiaryReference': 'Beneficiary state11',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-08T00:00:00',
            'paymentAmount': 200,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'ABC Shoes',
            'paymentCRNarration': 'Beneficiary state11',
            'execEngineRef': '000000489043657711'
          },
          {
            'paymentDate': '2017-08-08T00:00:00',
            'paymentAmount': 200,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'ABC Shoes',
            'paymentCRNarration': 'Beneficiary state11',
            'execEngineRef': '000000489043657710'
          },
          {
            'paymentDate': '2017-08-08T00:00:00',
            'paymentAmount': 200,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'ABC Shoes',
            'paymentCRNarration': 'Beneficiary state11',
            'execEngineRef': '000000489043657707'
          }
        ]
      },
      {
        'contactCardID': 104,
        'contactCardName': 'Im Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 57,
            'beneficiaryName': 'Im Prepaid 1',
            'accountNumber': '123123123',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Im payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 57,
                'beneficiaryType': 'PPD',
                'notificationID': 5613146
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 105,
        'contactCardName': 'ABC TELESALES',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 58,
            'beneficiaryName': 'ABC TELESALES',
            'accountNumber': '0000007843',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'MyState1',
            'beneficiaryReference': 'Beneficiary state1',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-07-30T00:00:00',
            'paymentAmount': 150,
            'acctNumber': '5412830000570821',
            'paymentDRNarration': 'MyState1',
            'paymentCRNarration': 'Beneficiary state1',
            'execEngineRef': '000000489025307189'
          },
          {
            'paymentDate': '2016-07-23T00:00:00',
            'paymentAmount': 150,
            'acctNumber': '5412830000570821',
            'paymentDRNarration': 'MyState1',
            'paymentCRNarration': 'Beneficiary state1',
            'execEngineRef': '000000489025102658'
          },
          {
            'paymentDate': '2016-07-16T00:00:00',
            'paymentAmount': 150,
            'acctNumber': '5412830000570821',
            'paymentDRNarration': 'MyState1',
            'paymentCRNarration': 'Beneficiary state1',
            'execEngineRef': '000000489024938886'
          }
        ]
      },
      {
        'contactCardID': 106,
        'contactCardName': 'Im Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 58,
            'beneficiaryName': 'Im Prepaid 1',
            'accountNumber': '123123123',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Im payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 58,
                'beneficiaryType': 'PPD',
                'notificationID': 5613147
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 108,
        'contactCardName': 'Im Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 59,
            'beneficiaryName': 'Im Prepaid 1',
            'accountNumber': '123123123',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Im payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 59,
                'beneficiaryType': 'PPD',
                'notificationID': 5613148
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 109,
        'contactCardName': 'Jazz Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 60,
            'beneficiaryName': 'Jazz Prepaid 1',
            'accountNumber': '123123123',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Jazz payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 60,
                'beneficiaryType': 'PPD',
                'notificationID': 5613149
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 110,
        'contactCardName': 'Marius',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 60,
            'beneficiaryName': 'Marius',
            'accountNumber': '2970727072',
            'bankName': 'NEDBANK',
            'branchCode': '197005',
            'beneficiaryType': 'BNFINT',
            'myReference': 'test',
            'beneficiaryReference': 'test',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 111,
        'contactCardName': 'Arthurany Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 61,
            'beneficiaryName': 'Arthurany Prepaid 1',
            'accountNumber': '321321321',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Arthurany payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 61,
                'beneficiaryType': 'PPD',
                'notificationID': 5613150
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 112,
        'contactCardName': 'Bidvest',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 61,
            'beneficiaryName': 'Bidvest',
            'accountNumber': '1348019001',
            'bankName': 'BIDVEST BANK',
            'branchCode': '462005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Bidvest',
            'beneficiaryReference': 'Bidvest',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 113,
        'contactCardName': 'Luchos Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 62,
            'beneficiaryName': 'Luchos Prepaid 1',
            'accountNumber': '423432',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Luchos payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 114,
        'contactCardName': 'TestForPMR',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 62,
            'beneficiaryName': 'TestForPMR',
            'accountNumber': '62003019503',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'TestPMRAdd',
            'beneficiaryReference': 'TestPMRAdd',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'test@123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 62,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 16326
              }
            ]
          },
          {
            'notificationAddress': '0124445555',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 62,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 16327
              }
            ]
          },
          {
            'notificationAddress': '0712224444',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 62,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 16325
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-25T00:00:00',
            'paymentAmount': 123,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'TestPMRAdd',
            'paymentCRNarration': 'TestPMRAdd',
            'execEngineRef': '000000489022873324'
          },
          {
            'paymentDate': '2016-03-26T00:00:00',
            'paymentAmount': 123,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'TestPMRAdd',
            'paymentCRNarration': 'TestPMRAdd',
            'execEngineRef': '000000489021582308'
          },
          {
            'paymentDate': '2016-02-25T00:00:00',
            'paymentAmount': 123,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'TestPMRAdd',
            'paymentCRNarration': 'TestPMRAdd',
            'execEngineRef': '000000489020244966'
          }
        ]
      },
      {
        'contactCardID': 115,
        'contactCardName': 'AngularJS Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 63,
            'beneficiaryName': 'AngularJS Prepaid 1',
            'accountNumber': '432432432',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'AngularJS payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 116,
        'contactCardName': 'Qa_scp_extAcc',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 63,
            'beneficiaryName': 'Qa_scp_extAcc',
            'accountNumber': '62003019503',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Qa_scp_extAcc',
            'beneficiaryReference': 'Fnb',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'heinoo@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 63,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614127
              }
            ]
          },
          {
            'notificationAddress': '0715712967',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 63,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614126
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 117,
        'contactCardName': 'Invst123',
        'contactCardDetails': [
          {
            'accountType': 'DS',
            'beneficiaryID': 64,
            'beneficiaryName': 'Invst123',
            'accountNumber': '1009959939',
            'bankName': 'NEDBANK',
            'branchCode': '106012',
            'beneficiaryType': 'BNFINT',
            'myReference': 'asd',
            'beneficiaryReference': 'asd',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 118,
        'contactCardName': 'ReactJS Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 64,
            'beneficiaryName': 'ReactJS Prepaid 1',
            'accountNumber': '423432324',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'ReactJS payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 119,
        'contactCardName': 'Apple Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 65,
            'beneficiaryName': 'Apple Prepaid 1',
            'accountNumber': '323232',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Apple payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 120,
        'contactCardName': 'Master Credit card',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 65,
            'beneficiaryName': 'Master Credit card',
            'accountNumber': '5412830000253295',
            'branchCode': '000000',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'STANDARD BANK',
            'beneficiaryReference': 'STANDARD BANK',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 121,
        'contactCardName': 'kiko_contact Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 66,
            'beneficiaryName': 'kiko_contact Prepaid 1',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_contact payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 66,
                'beneficiaryType': 'PPD',
                'notificationID': 5613151
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 122,
        'contactCardName': 'Morkels',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 66,
            'beneficiaryName': 'Morkels',
            'accountNumber': '2849933',
            'branchCode': '016641',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'CouchPay',
            'beneficiaryReference': 'ONCE-OFF ADD AS BENEFICIARY PR',
            'valid': false
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2014-09-05T00:00:00',
            'paymentAmount': 150,
            'acctNumber': '5412830000570821',
            'paymentDRNarration': 'updated sms notification',
            'paymentCRNarration': 'ONCE-OFF ADD AS BENEFICIARY PR',
            'execEngineRef': '000000488975975420'
          },
          {
            'paymentDate': '2014-09-05T00:00:00',
            'paymentAmount': 150,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'updated sms notification',
            'paymentCRNarration': 'ONCE-OFF ADD AS BENEFICIARY PR',
            'execEngineRef': '000000488975975417'
          },
          {
            'paymentDate': '2014-08-28T00:00:00',
            'paymentAmount': 20.31,
            'acctNumber': '1933198443',
            'paymentDRNarration': 'updated sms notification',
            'paymentCRNarration': 'Beneficiary Payments_Fax_Curre',
            'execEngineRef': '000000488974834009'
          }
        ]
      },
      {
        'contactCardID': 123,
        'contactCardName': 'kiko_contact Prepaid 2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 67,
            'beneficiaryName': 'kiko_contact Prepaid 2',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_contact payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 67,
                'beneficiaryType': 'PPD',
                'notificationID': 5613152
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 124,
        'contactCardName': 'Invest321',
        'contactCardDetails': [
          {
            'accountType': 'DS',
            'beneficiaryID': 67,
            'beneficiaryName': 'Invest321',
            'accountNumber': '1009959939',
            'bankName': 'NEDBANK',
            'branchCode': '106012',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Invest321',
            'beneficiaryReference': 'Shdhhdud',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 125,
        'contactCardName': 'kiko_contactprepaid1 Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 68,
            'beneficiaryName': 'kiko_contactprepaid1 Prepaid 1',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_contactprepaid1 payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 126,
        'contactCardName': 'TELKOM-Hein123444',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 68,
            'beneficiaryName': 'TELKOM-Hein123444',
            'accountNumber': '0000000028',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'TELKOM-Hein123',
            'beneficiaryReference': '8636491499019182011',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-07-27T00:00:00',
            'paymentAmount': 44,
            'acctNumber': '1012108910',
            'paymentDRNarration': '8636491499019182011 TELKOM',
            'paymentCRNarration': '8636491499019182011',
            'execEngineRef': '000000489025139998'
          },
          {
            'paymentDate': '2016-07-27T00:00:00',
            'paymentAmount': 33,
            'acctNumber': '1012108910',
            'paymentDRNarration': '8636491499019182011 TELKOM',
            'paymentCRNarration': '8636491499019182011',
            'execEngineRef': '000000489025139522'
          }
        ]
      },
      {
        'contactCardID': 127,
        'contactCardName': 'kiko_contact3 Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 69,
            'beneficiaryName': 'kiko_contact3 Prepaid 1',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_contact3 payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 128,
        'contactCardName': 'Homeloan',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 69,
            'beneficiaryName': 'Homeloan',
            'accountNumber': '8001951300101',
            'bankName': 'NEDBANK - PEOPLES MORTGAGE LTD',
            'branchCode': '760005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Home loan',
            'beneficiaryReference': 'HOMELOAN',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 129,
        'contactCardName': 'kiko_contact3 Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 70,
            'beneficiaryName': 'kiko_contact3 Prepaid 1',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_contact3 payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 130,
        'contactCardName': 'testbenef',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 70,
            'beneficiaryName': 'testbenef',
            'accountNumber': '1012108910',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'testbenef',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-10-31T00:00:00',
            'paymentAmount': 300,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'test',
            'paymentCRNarration': 'SwaCRChanged1',
            'execEngineRef': '000000489027975545'
          },
          {
            'paymentDate': '2016-10-31T00:00:00',
            'paymentAmount': 300,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'test',
            'paymentCRNarration': 'SwaCRChanged1',
            'execEngineRef': '000000489027975544'
          },
          {
            'paymentDate': '2016-06-03T00:00:00',
            'paymentAmount': 60,
            'acctNumber': '5412830000253295',
            'paymentDRNarration': 'testbenef',
            'paymentCRNarration': 'SwaCRChanged1',
            'execEngineRef': '000000489023955129'
          }
        ]
      },
      {
        'contactCardID': 131,
        'contactCardName': 'kiko_contact5 Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 71,
            'beneficiaryName': 'kiko_contact5 Prepaid 1',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_contact5 payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 133,
        'contactCardName': 'kiko_ctaont8 Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 72,
            'beneficiaryName': 'kiko_ctaont8 Prepaid 1',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_ctaont8 payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 134,
        'contactCardName': 'SAVINGS ACCOUNT NED',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 72,
            'beneficiaryName': 'SAVINGS ACCOUNT NED',
            'accountNumber': '2010155092',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'SA Nedbank',
            'beneficiaryReference': 'SAVINGS account',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 135,
        'contactCardName': 'kiko_ctaont8 Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 73,
            'beneficiaryName': 'kiko_ctaont8 Prepaid 1',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_ctaont8 payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 136,
        'contactCardName': 'Natasha Galloway',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 73,
            'beneficiaryName': 'Natasha Galloway',
            'accountNumber': '2849933',
            'branchCode': '016641',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Natasha Galloway',
            'beneficiaryReference': 'ONCE-OFF ADD AS BENEFICIARY PR',
            'valid': false
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 137,
        'contactCardName': 'kiko_ctaont8 Prepaid 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 74,
            'beneficiaryName': 'kiko_ctaont8 Prepaid 1',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'kiko_ctaont8 payment',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'kristijan.cvetkovikj@one-inside.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 74,
                'beneficiaryType': 'PPD',
                'notificationID': 5613156
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 138,
        'contactCardName': 'LESOTHO EXT',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 74,
            'beneficiaryName': 'LESOTHO EXT',
            'accountNumber': '21000020092',
            'bankName': 'NEDBANK LESOTHO LIMITED',
            'branchCode': '390261',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'LESOTHO TEST',
            'beneficiaryReference': 'LESOTHO',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 139,
        'contactCardName': 'Inest456',
        'contactCardDetails': [
          {
            'accountType': 'DS',
            'beneficiaryID': 75,
            'beneficiaryName': 'Inest456',
            'accountNumber': '1009959939',
            'bankName': 'NEDBANK',
            'branchCode': '106012',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Inest456',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-04-04T00:00:00',
            'paymentAmount': 200,
            'acctNumber': '1009087231',
            'paymentDRNarration': 'Inest456',
            'paymentCRNarration': 'payment',
            'execEngineRef': '000000489031737182'
          }
        ]
      },
      {
        'contactCardID': 140,
        'contactCardName': 'Prepaidfordora',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 75,
            'beneficiaryName': 'Prepaidfordora',
            'accountNumber': '0821112234',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 75,
                'beneficiaryType': 'PPD',
                'notificationID': 5613294
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 75,
                'beneficiaryType': 'PPD',
                'notificationID': 5613293
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 141,
        'contactCardName': 'Prepaidfordora',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 76,
            'beneficiaryName': 'Prepaidfordora',
            'accountNumber': '0827778790',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'prepaidDRRefonly1',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 76,
                'beneficiaryType': 'PPD',
                'notificationID': 5613296
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 76,
                'beneficiaryType': 'PPD',
                'notificationID': 5613295
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 142,
        'contactCardName': 'SaveBF',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 76,
            'beneficiaryName': 'SaveBF',
            'accountNumber': '1009035940',
            'bankName': 'NEDBANK',
            'branchCode': '100909',
            'beneficiaryType': 'BNFINT',
            'myReference': 'My Desv',
            'beneficiaryReference': 'My Cr',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-07-30T00:00:00',
            'paymentAmount': 80,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'My Desv',
            'paymentCRNarration': 'My Cr',
            'execEngineRef': '000000489025307182'
          }
        ]
      },
      {
        'contactCardID': 143,
        'contactCardName': 'LESOTHO EXT',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 77,
            'beneficiaryName': 'LESOTHO EXT',
            'accountNumber': '21000020092',
            'bankName': 'NEDBANK LESOTHO LIMITED',
            'branchCode': '390261',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'LESOTHO TEST',
            'beneficiaryReference': 'LESOTHO',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 144,
        'contactCardName': 'ABSA CARD LIST',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 78,
            'beneficiaryName': 'ABSA CARD LIST',
            'accountNumber': '0000007027',
            'branchCode': '390261',
            'beneficiaryType': 'BDF',
            'myReference': 'ABSA CARD',
            'beneficiaryReference': '4565460068741011',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 145,
        'contactCardName': 'NedCC',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 79,
            'beneficiaryName': 'NedCC',
            'accountNumber': '5412830000570821',
            'branchCode': '000000',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'NedCC',
            'beneficiaryReference': 'NedCC',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-06-01T00:00:00',
            'paymentAmount': 300,
            'acctNumber': '1012108910',
            'paymentDRNarration': 'NedCC',
            'paymentCRNarration': 'NedCC',
            'execEngineRef': '000000489023923581'
          }
        ]
      },
      {
        'contactCardID': 146,
        'contactCardName': 'ABC SHOE (PTY) LTD',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 80,
            'beneficiaryName': 'ABC SHOE (PTY) LTD',
            'accountNumber': '0000000064',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'asd',
            'beneficiaryReference': 'as',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-06-01T00:00:00',
            'paymentAmount': 10,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489038450387'
          },
          {
            'paymentDate': '2017-05-08T00:00:00',
            'paymentAmount': 10,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489034040373'
          },
          {
            'paymentDate': '2017-05-06T00:00:00',
            'paymentAmount': 10,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489033292071'
          }
        ]
      },
      {
        'contactCardID': 147,
        'contactCardName': 'ABC SHOE (PTY) LTD HEIN',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 81,
            'beneficiaryName': 'ABC SHOE (PTY) LTD HEIN',
            'accountNumber': '0000000064',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'Shoes',
            'beneficiaryReference': 'abcd1234',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 81,
                'beneficiaryType': 'BDF',
                'notificationID': 5614649
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 148,
        'contactCardName': 'ABC SHOE (PTY) LTD HEIN',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 82,
            'beneficiaryName': 'ABC SHOE (PTY) LTD HEIN',
            'accountNumber': '0000000064',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'Shoes',
            'beneficiaryReference': 'abcd1234',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 82,
                'beneficiaryType': 'BDF',
                'notificationID': 5614650
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-05-09T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'Shoes',
            'paymentCRNarration': 'abcd1234',
            'execEngineRef': '000000489034050763'
          }
        ]
      },
      {
        'contactCardID': 151,
        'contactCardName': 'f2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 85,
            'beneficiaryName': 'f2',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'capitec123',
            'beneficiaryReference': '321capitec',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 85,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614616
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 85,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614615
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 152,
        'contactCardName': 'ABSA CARD LIST',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 86,
            'beneficiaryName': 'ABSA CARD LIST',
            'accountNumber': '0000007027',
            'branchCode': '390261',
            'beneficiaryType': 'BDF',
            'myReference': 'ABSA CARD',
            'beneficiaryReference': '4565460068741011',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 153,
        'contactCardName': 'ABC SHOE (PTY) LTD',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 87,
            'beneficiaryName': 'ABC SHOE (PTY) LTD',
            'accountNumber': '0000000064',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'ABC Shoes',
            'beneficiaryReference': 'Beneficiary state11',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 154,
        'contactCardName': 'ABC SHOE (PTY) LTD',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 88,
            'beneficiaryName': 'ABC SHOE (PTY) LTD',
            'accountNumber': '0000000064',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'ABC Shoes',
            'beneficiaryReference': 'Beneficiary state11',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 155,
        'contactCardName': 'ABC SHOE (PTY) LTD ddd',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 89,
            'beneficiaryName': 'ABC SHOE (PTY) LTD ddd',
            'accountNumber': '0000000064',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'ABC Shoes',
            'beneficiaryReference': 'Beneficiary state11',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 156,
        'contactCardName': 'onceoff_pay_ext',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 90,
            'beneficiaryName': 'onceoff_pay_ext',
            'accountNumber': '1001004345',
            'bankName': 'NEDBANK',
            'branchCode': '151644',
            'beneficiaryType': 'BNFINT',
            'myReference': 'onceoff_pay_ext',
            'beneficiaryReference': 'onceoff_pay_ext',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0788216968',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 90,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5614652
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-05-05T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1009000675',
            'paymentDRNarration': 'onceoff_pay_ext',
            'paymentCRNarration': 'onceoff_pay_ext',
            'execEngineRef': '000000489033291944'
          }
        ]
      },
      {
        'contactCardID': 158,
        'contactCardName': 'f2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 92,
            'beneficiaryName': 'f2',
            'accountNumber': '1233862365',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'capitec123',
            'beneficiaryReference': '321capitec',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 92,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614778
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 92,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614777
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 161,
        'contactCardName': 'Clark Kent',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 95,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '1012108910',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SwaDRChnaged1',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 162,
        'contactCardName': 'Clark Kent',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 96,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '1012108910',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SwaDRChnaged1',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 163,
        'contactCardName': 'Clark Kent',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 97,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '1012108910',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SwaDRChnaged1',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 165,
        'contactCardName': 'Nikola_Prepaid',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 36,
            'beneficiaryName': 'Nikola_Prepaid',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Nikola_Prepaid_BUY',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'doryr@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 36,
                'beneficiaryType': 'PPD',
                'notificationID': 5614959
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 36,
                'beneficiaryType': 'PPD',
                'notificationID': 5614958
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 166,
        'contactCardName': 'Nikola_Electricity_Meter',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 37,
            'beneficiaryName': 'Nikola_Electricity_Meter',
            'accountNumber': '01050020009',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'Nikola_Meter_BUY',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'doryr@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 37,
                'beneficiaryType': 'PEL',
                'notificationID': 5614961
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 37,
                'beneficiaryType': 'PEL',
                'notificationID': 5614960
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 167,
        'contactCardName': 'Nikola_Bank',
        'contactCardDetails': [
          {
            'accountType': 'SA',
            'beneficiaryID': 99,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '2010155092',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SwaDRChnaged1',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 168,
        'contactCardName': 'Nikola_Prepaidzzz',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 38,
            'beneficiaryName': 'Nikola_Prepaidzzz',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Nikola_Prepaid_BUY',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 169,
        'contactCardName': 'Nikola_Prepaidzzz',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 40,
            'beneficiaryName': 'Nikola_Prepaidzzz',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Nikola_Prepaid_BUY',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 170,
        'contactCardName': 'Nikola_Prepaidzzz',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 44,
            'beneficiaryName': 'Nikola_Prepaidzzz',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Nikola_Prepaid_BUY',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 171,
        'contactCardName': 'RefilweDS',
        'contactCardDetails': [
          {
            'accountType': 'DS',
            'beneficiaryID': 16,
            'beneficiaryName': 'RefilweDS',
            'accountNumber': '553588559998',
            'bankName': 'NEDBANK',
            'branchCode': '171338',
            'beneficiaryType': 'BNFINT',
            'myReference': 'asd',
            'beneficiaryReference': 'asd',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 172,
        'contactCardName': 'FNB Leshoto',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 59,
            'beneficiaryName': 'FNB Leshoto',
            'accountNumber': '62003019503',
            'bankName': 'FIRST NATIONAL BANK',
            'branchCode': '280061',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'out',
            'beneficiaryReference': 'out',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 174,
        'contactCardName': 'Ambros Best FBE',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 45,
            'beneficiaryName': 'Ambros Best FBE',
            'accountNumber': '01050020020',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'Ambros Best FBE',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0788216968',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 45,
                'beneficiaryType': 'PEL',
                'notificationID': 5615266
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 175,
        'contactCardName': 'eeeee',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 46,
            'beneficiaryName': 'eeeee',
            'accountNumber': '01050020023',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'ssss',
            'beneficiaryReference': 'sss',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 176,
        'contactCardName': 'eeeee',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 49,
            'beneficiaryName': 'eeeee',
            'accountNumber': '01050020020',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'ssss',
            'beneficiaryReference': 'sss',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 177,
        'contactCardName': 'Clark Kent',
        'contactCardDetails': [
          {
            'accountType': 'SA',
            'beneficiaryID': 93,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '2010155092',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SwaDRChnaged1',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 178,
        'contactCardName': 'Clark Kent',
        'contactCardDetails': [
          {
            'accountType': 'SA',
            'beneficiaryID': 94,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '2010155092',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SwaDRChnaged1',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 179,
        'contactCardName': 'Clark Kent',
        'contactCardDetails': [
          {
            'accountType': 'SA',
            'beneficiaryID': 98,
            'beneficiaryName': 'Clark Kent',
            'accountNumber': '2010155092',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SwaDRChnaged1',
            'beneficiaryReference': 'SwaCRChanged1',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 180,
        'contactCardName': 'FNB_PROD_ISSUE',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 47,
            'beneficiaryName': 'FNB_PROD_ISSUE',
            'accountNumber': '50930132986',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': '3011265806',
            'beneficiaryReference': 'FNB_PROD_ISSUE',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-07-26T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1012108910',
            'paymentDRNarration': '3011265806',
            'paymentCRNarration': 'FNB_PROD_ISSUE',
            'execEngineRef': '000000489042169511'
          },
          {
            'paymentDate': '2017-07-26T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1012108910',
            'paymentDRNarration': '3011265806',
            'paymentCRNarration': 'FNB_PROD_ISSUE',
            'execEngineRef': '000000489042169110'
          }
        ]
      },
      {
        'contactCardID': 181,
        'contactCardName': 'FNB_PRODISSUE2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 50,
            'beneficiaryName': 'FNB_PRODISSUE2',
            'accountNumber': '50930132986',
            'branchCode': '221425',
            'beneficiaryType': 'BNFEXT',
            'myReference': '3011265806',
            'beneficiaryReference': 'FNB_PISSUE2',
            'valid': false
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-07-26T00:00:00',
            'paymentAmount': 50,
            'acctNumber': '1009000675',
            'paymentDRNarration': '3011265806',
            'paymentCRNarration': 'FNB_PISSUE2',
            'execEngineRef': '000000489042169569'
          }
        ]
      },
      {
        'contactCardID': 182,
        'contactCardName': 'michael scott',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 71,
            'beneficiaryName': 'michael scott',
            'accountNumber': '4922130000491532',
            'branchCode': '000000',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'absa CC',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 183,
        'contactCardName': 'Fnb Simba',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 83,
            'beneficiaryName': 'Fnb Simba',
            'accountNumber': '62008437859',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Gdftgg',
            'beneficiaryReference': 'payment',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 184,
        'contactCardName': 'Rere Prepaid',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 53,
            'beneficiaryName': 'Rere Prepaid',
            'accountNumber': '0723273226',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'capitec123',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'igor@http123.com',
            'notificationType': 'EMAIL',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 53,
                'beneficiaryType': 'PPD',
                'notificationID': 5615453
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 53,
                'beneficiaryType': 'PPD',
                'notificationID': 5615454
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 185,
        'contactCardName': 'CC',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 84,
            'beneficiaryName': 'CC',
            'accountNumber': '4314620000216422',
            'branchCode': '000000',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'asdfa',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 186,
        'contactCardName': 'Heineken_Prepaid',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 54,
            'beneficiaryName': 'Heineken_Prepaid',
            'accountNumber': '0715712967',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Heineken_PPD',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 187,
        'contactCardName': 'HeinAbsa',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 91,
            'beneficiaryName': 'HeinAbsa',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'blabsa',
            'beneficiaryReference': 'blabsa',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 188,
        'contactCardName': 'Heineken_PEL_Meter',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 77,
            'beneficiaryName': 'Heineken_PEL_Meter',
            'accountNumber': '01050020009',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'Heineken_Meter_BUY',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 189,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 2,
            'beneficiaryName': 'Calvin Nedbank',
            'accountNumber': '62003019503',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'WesHein',
            'beneficiaryReference': 'WESHein',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 4000,
      'pageLimit': 1,
      'resultData': []
    }
  })
}

function contactCardsDetailsPost (req, res, next) {
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
