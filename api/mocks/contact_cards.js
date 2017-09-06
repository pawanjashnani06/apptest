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
        'contactCardID': 4,
        'contactCardName': 'Zahira Mahomed',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 2,
            'beneficiaryName': 'Zahira Mahomed',
            'accountNumber': '1104985268',
            'bankName': 'NEDBANK',
            'branchCode': '171338',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Z Mahomed',
            'beneficiaryReference': 'Gomac',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'swapnilp@yahoo.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 2,
                'beneficiaryType': 'BNFINT',
                'notificationID': 4422627
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-25T00:00:00',
            'paymentAmount': 10034,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'Z Mahomed',
            'paymentCRNarration': 'Gomac',
            'execEngineRef': '000000001073254161'
          },
          {
            'paymentDate': '2016-04-22T00:00:00',
            'paymentAmount': 500,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Z Mahomed',
            'paymentCRNarration': 'Gomac',
            'execEngineRef': '000000001070374753'
          },
          {
            'paymentDate': '2016-04-18T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Z Mahomed',
            'paymentCRNarration': 'Gomac',
            'execEngineRef': '000000001066656749'
          }
        ]
      },
      {
        'contactCardID': 10,
        'contactCardName': 'IGF 000655',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 6,
            'beneficiaryName': 'IGF 000655',
            'accountNumber': '401936414',
            'branchCode': '000355',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'IGF 000655',
            'beneficiaryReference': 'Gomac',
            'valid': false
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-02-09T00:00:00',
            'paymentAmount': 1111.27,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'IGF 000655',
            'paymentCRNarration': 'Gomac',
            'execEngineRef': '000000001011029917'
          },
          {
            'paymentDate': '2015-02-11T00:00:00',
            'paymentAmount': 2157.61,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'IGF 000655',
            'paymentCRNarration': 'Gomac',
            'execEngineRef': '000000000720848720'
          },
          {
            'paymentDate': '2014-11-19T00:00:00',
            'paymentAmount': 87.86,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'IGF 000655',
            'paymentCRNarration': 'Gomac',
            'execEngineRef': '000000000650394467'
          }
        ]
      },
      {
        'contactCardID': 11,
        'contactCardName': 'GOMAC',
        'contactCardDetails': [
          {
            'accountType': 'SA',
            'beneficiaryID': 7,
            'beneficiaryName': 'GOMAC',
            'accountNumber': '2713385954',
            'bankName': 'NEDBANK',
            'branchCode': '171338',
            'beneficiaryType': 'BNFINT',
            'myReference': 'GOMAC',
            'beneficiaryReference': 'GOMAC',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-09-01T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1713241811',
            'paymentDRNarration': '404060439',
            'paymentCRNarration': '404060439',
            'execEngineRef': '000000489045034121'
          },
          {
            'paymentDate': '2017-08-08T00:00:00',
            'paymentAmount': 55.6,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'GOMAC',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000489043657429'
          },
          {
            'paymentDate': '2017-08-01T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1713241811',
            'paymentDRNarration': '404060439',
            'paymentCRNarration': '404060439',
            'execEngineRef': '000000489042761626'
          }
        ]
      },
      {
        'contactCardID': 12,
        'contactCardName': 'PANASONIC',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 8,
            'beneficiaryName': 'PANASONIC',
            'accountNumber': '1713295695',
            'bankName': 'NEDBANK',
            'branchCode': '171338',
            'beneficiaryType': 'BNFINT',
            'myReference': 'PANASONIC',
            'beneficiaryReference': 'GOMAC ENTERPRISES',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-02-05T00:00:00',
            'paymentAmount': 1584.6,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'PANASONIC',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000001009557291'
          },
          {
            'paymentDate': '2015-07-17T00:00:00',
            'paymentAmount': 1022.58,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'PANASONIC',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000000843070932'
          },
          {
            'paymentDate': '2014-12-09T00:00:00',
            'paymentAmount': 1022.58,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'PANASONIC',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000000671430125'
          }
        ]
      },
      {
        'contactCardID': 13,
        'contactCardName': 'Naija 4',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 9,
            'beneficiaryName': 'Naija 4',
            'accountNumber': '1713277581',
            'bankName': 'NEDBANK',
            'branchCode': '171338',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Nedbank Account',
            'beneficiaryReference': 'Nedbank Account',
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
                'beneficiaryID': 9,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615052
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 9,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615053
              }
            ]
          },
          {
            'notificationAddress': '0622210985',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 9,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615054
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-07-12T00:00:00',
            'paymentAmount': 25.7,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489042031124'
          }
        ]
      },
      {
        'contactCardID': 14,
        'contactCardName': 'SPCA POTCHEFSTROOM',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 10,
            'beneficiaryName': 'SPCA POTCHEFSTROOM',
            'accountNumber': '1713327171',
            'bankName': 'NEDBANK',
            'branchCode': '171438',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SPCA POTCHEFSTROOM',
            'beneficiaryReference': 'GOMAC',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2014-12-15T00:00:00',
            'paymentAmount': 1600,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SPCA POTCHEFSTROOM',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000000676021073'
          },
          {
            'paymentDate': '2014-10-16T00:00:00',
            'paymentAmount': 500,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SPCA POTCHEFSTROOM',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000000624205117'
          },
          {
            'paymentDate': '2013-12-12T00:00:00',
            'paymentAmount': 2000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SPCA POTCHEFSTROOM',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000000389460291'
          }
        ]
      },
      {
        'contactCardID': 15,
        'contactCardName': 'Dimitri MA',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 11,
            'beneficiaryName': 'Dimitri MA',
            'accountNumber': '62442698017',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Dimitri MA',
            'beneficiaryReference': 'Pamela',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-08T00:00:00',
            'paymentAmount': 55.6,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Dimitri MA',
            'paymentCRNarration': 'Pamela',
            'execEngineRef': '000000489043657430'
          },
          {
            'paymentDate': '2016-05-04T00:00:00',
            'paymentAmount': 500,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Dimitri MA',
            'paymentCRNarration': 'Pamela',
            'execEngineRef': '000000001084828246'
          },
          {
            'paymentDate': '2016-04-05T00:00:00',
            'paymentAmount': 500,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Dimitri MA',
            'paymentCRNarration': 'Pamela',
            'execEngineRef': '000000001059725326'
          }
        ]
      },
      {
        'contactCardID': 16,
        'contactCardName': 'GROENWILGERS NO 34',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 12,
            'beneficiaryName': 'GROENWILGERS NO 34',
            'accountNumber': '670360342',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'GROENWILGERS NO 34',
            'beneficiaryReference': 'W 34 PAM & JAKES TRUST',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-03-22T00:00:00',
            'paymentAmount': 179.78,
            'acctNumber': '1357071450',
            'paymentDRNarration': 'GROENWILGERS NO 34',
            'paymentCRNarration': 'W 34 PAM & JAKES TRUST',
            'execEngineRef': '000000001042647678'
          }
        ]
      },
      {
        'contactCardID': 17,
        'contactCardName': 'BOTSHELO ELIZABETH MOR',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 13,
            'beneficiaryName': 'BOTSHELO ELIZABETH MOR',
            'accountNumber': '377095000000195',
            'branchCode': '000000',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Post beneficiary for credit ca',
            'beneficiaryReference': 'Post for beneficiary',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'natashagov@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 13,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615066
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 18,
        'contactCardName': 'FSB',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 14,
            'beneficiaryName': 'FSB',
            'accountNumber': '1454094451',
            'bankName': 'NEDBANK',
            'branchCode': '145405',
            'beneficiaryType': 'BNFINT',
            'myReference': 'FSB',
            'beneficiaryReference': 'BFSP1729',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2015-10-13T00:00:00',
            'paymentAmount': 6946,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'FSB',
            'paymentCRNarration': 'BFSP1729',
            'execEngineRef': '000000000913182081'
          },
          {
            'paymentDate': '2015-05-15T00:00:00',
            'paymentAmount': 550,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'FSB',
            'paymentCRNarration': 'BFSP1729',
            'execEngineRef': '000000000794662928'
          },
          {
            'paymentDate': '2014-10-14T00:00:00',
            'paymentAmount': 6794,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'FSB',
            'paymentCRNarration': 'BFSP1729',
            'execEngineRef': '000000000623117738'
          }
        ]
      },
      {
        'contactCardID': 19,
        'contactCardName': 'VirginM',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 15,
            'beneficiaryName': 'VirginM',
            'accountNumber': '0000007027',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'VirginM',
            'beneficiaryReference': '5286250144357014',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-08T00:00:00',
            'paymentAmount': 10,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'virgin',
            'paymentCRNarration': '5286250144357014',
            'execEngineRef': '000000489043657438'
          },
          {
            'paymentDate': '2017-08-08T00:00:00',
            'paymentAmount': 10,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'virgin',
            'paymentCRNarration': '5286250144357014',
            'execEngineRef': '000000489043657437'
          },
          {
            'paymentDate': '2016-03-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'VirginM',
            'paymentCRNarration': '5286250144357014',
            'execEngineRef': '000000001040095516'
          }
        ]
      },
      {
        'contactCardID': 20,
        'contactCardName': 'PICSES',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 16,
            'beneficiaryName': 'PICSES',
            'accountNumber': '4077477446',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'PICSES',
            'beneficiaryReference': 'GOMAC',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-09-05T00:00:00',
            'paymentAmount': 1040,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'PICSES',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000489045083842'
          },
          {
            'paymentDate': '2017-08-05T00:00:00',
            'paymentAmount': 1040,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'PICSES',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000489043638451'
          },
          {
            'paymentDate': '2017-07-05T00:00:00',
            'paymentAmount': 1040,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'PICSES',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000489041893767'
          }
        ]
      },
      {
        'contactCardID': 21,
        'contactCardName': 'Woolworths',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 17,
            'beneficiaryName': 'Woolworths',
            'accountNumber': '0000000044',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'Woolworths',
            'beneficiaryReference': '6007850119431193',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-20T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Woolworths',
            'paymentCRNarration': '6007850119431193',
            'execEngineRef': '000000001067985150'
          },
          {
            'paymentDate': '2016-03-22T00:00:00',
            'paymentAmount': 300,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Woolworths',
            'paymentCRNarration': '6007850119431193',
            'execEngineRef': '000000001042647122'
          },
          {
            'paymentDate': '2016-03-15T00:00:00',
            'paymentAmount': 250,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Woolworths',
            'paymentCRNarration': '6007850119431193',
            'execEngineRef': '000000001039692231'
          }
        ]
      },
      {
        'contactCardID': 22,
        'contactCardName': 'DeepakB',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 18,
            'beneficiaryName': 'DeepakB',
            'accountNumber': '1001004345',
            'bankName': 'NEDBANK',
            'branchCode': '151644',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Test for Deepak',
            'beneficiaryReference': 'Test for Deepak',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': '0619883752',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 18,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5614651
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 23,
        'contactCardName': 'Jakes wesbank creditcard',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 19,
            'beneficiaryName': 'Jakes wesbank creditcard',
            'accountNumber': '0000008410',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'jakes wesbank c/c',
            'beneficiaryReference': '4790278300425004',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-09-01T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'jakes wesbank c/c',
            'paymentCRNarration': '4790278300425004',
            'execEngineRef': '000000489045034120'
          },
          {
            'paymentDate': '2017-08-01T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'jakes wesbank c/c',
            'paymentCRNarration': '4790278300425004',
            'execEngineRef': '000000489042761627'
          },
          {
            'paymentDate': '2017-07-01T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'jakes wesbank c/c',
            'paymentCRNarration': '4790278300425004',
            'execEngineRef': '000000489041866055'
          }
        ]
      },
      {
        'contactCardID': 24,
        'contactCardName': 'RetiefPark',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 20,
            'beneficiaryName': 'RetiefPark',
            'accountNumber': '4064067355',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'RetiefPark',
            'beneficiaryReference': 'P & J Trust Unit 16',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-05-06T00:00:00',
            'paymentAmount': 930,
            'acctNumber': '1357071450',
            'paymentDRNarration': 'RetiefPark',
            'paymentCRNarration': 'P & J Trust Unit 16',
            'execEngineRef': '000000001086358973'
          },
          {
            'paymentDate': '2016-04-12T00:00:00',
            'paymentAmount': 911,
            'acctNumber': '1357071450',
            'paymentDRNarration': 'RetiefPark',
            'paymentCRNarration': 'P & J Trust Unit 16',
            'execEngineRef': '000000001062770952'
          },
          {
            'paymentDate': '2016-03-16T00:00:00',
            'paymentAmount': 911,
            'acctNumber': '1357071450',
            'paymentDRNarration': 'RetiefPark',
            'paymentCRNarration': 'P & J Trust Unit 16',
            'execEngineRef': '000000001040092623'
          }
        ]
      },
      {
        'contactCardID': 25,
        'contactCardName': 'Bond ABSA',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 21,
            'beneficiaryName': 'Bond ABSA',
            'accountNumber': '8060324155',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Bond ABSA',
            'beneficiaryReference': 'PZ Mackor',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-18T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'Bond ABSA',
            'paymentCRNarration': 'PZ Mackor',
            'execEngineRef': '000000001066093679'
          },
          {
            'paymentDate': '2016-03-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'Bond ABSA',
            'paymentCRNarration': 'PZ Mackor',
            'execEngineRef': '000000001040093664'
          },
          {
            'paymentDate': '2016-02-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'Bond ABSA',
            'paymentCRNarration': 'PZ Mackor',
            'execEngineRef': '000000001014798118'
          }
        ]
      },
      {
        'contactCardID': 26,
        'contactCardName': 'EA Mackor',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 22,
            'beneficiaryName': 'EA Mackor',
            'accountNumber': '688591066',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'EA Mackor',
            'beneficiaryReference': 'PZ Mackor',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2006-08-09T00:00:00',
            'paymentAmount': 2000,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'EA Mackor',
            'paymentCRNarration': 'PZ Mackor'
          }
        ]
      },
      {
        'contactCardID': 27,
        'contactCardName': 'Truworths',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 23,
            'beneficiaryName': 'Truworths',
            'accountNumber': '0000000025',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'Truworths',
            'beneficiaryReference': '10100326389636',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-21T00:00:00',
            'paymentAmount': 850,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Truworths',
            'paymentCRNarration': '10100326389636',
            'execEngineRef': '000000001068561245'
          },
          {
            'paymentDate': '2016-04-05T00:00:00',
            'paymentAmount': 500,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Truworths',
            'paymentCRNarration': '10100326389636',
            'execEngineRef': '000000001059725905'
          },
          {
            'paymentDate': '2016-03-03T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'Truworths',
            'paymentCRNarration': '10100326389636',
            'execEngineRef': '000000001033342302'
          }
        ]
      },
      {
        'contactCardID': 28,
        'contactCardName': 'NGWENYA',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 24,
            'beneficiaryName': 'NGWENYA',
            'accountNumber': '62318780451',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'NGWENYA',
            'beneficiaryReference': 'VREN - 0032  VAN RENSBURG',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-03-16T00:00:00',
            'paymentAmount': 500,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'NGWENYA',
            'paymentCRNarration': 'VREN - 0032  VAN RENSBURG',
            'execEngineRef': '000000001040094875'
          },
          {
            'paymentDate': '2016-02-16T00:00:00',
            'paymentAmount': 500,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'NGWENYA',
            'paymentCRNarration': 'VREN - 0032  VAN RENSBURG',
            'execEngineRef': '000000001014798488'
          },
          {
            'paymentDate': '2016-01-15T00:00:00',
            'paymentAmount': 800,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'NGWENYA',
            'paymentCRNarration': 'VREN - 0032  VAN RENSBURG',
            'execEngineRef': '000000000989306215'
          }
        ]
      },
      {
        'contactCardID': 29,
        'contactCardName': 'Yankees3',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 25,
            'beneficiaryName': 'Yankees3',
            'accountNumber': '2088517001',
            'bankName': 'BIDVEST BANK',
            'branchCode': '462005',
            'beneficiaryType': 'BNFEXT',
            'myReference': '3rd party bank',
            'beneficiaryReference': '3rd party bank',
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
                'beneficiaryID': 25,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615231
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 25,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615232
              }
            ]
          },
          {
            'notificationAddress': '0622210985',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 25,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615233
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 30,
        'contactCardName': 'FOSCHINI',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 26,
            'beneficiaryName': 'FOSCHINI',
            'accountNumber': '0000000030',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'FOSCHINI',
            'beneficiaryReference': '010010000408694310',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2015-03-02T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'FOSCHINI',
            'paymentCRNarration': '40869431',
            'execEngineRef': '000000000741426073'
          },
          {
            'paymentDate': '2015-01-29T00:00:00',
            'paymentAmount': 550,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'FOSCHINI',
            'paymentCRNarration': '40869431',
            'execEngineRef': '000000000709333749'
          },
          {
            'paymentDate': '2015-01-05T00:00:00',
            'paymentAmount': 800,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'FOSCHINI',
            'paymentCRNarration': '40869431',
            'execEngineRef': '000000000692919046'
          }
        ]
      },
      {
        'contactCardID': 33,
        'contactCardName': 'Jim',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 29,
            'beneficiaryName': 'Jim',
            'accountNumber': '4067664603',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Jim',
            'beneficiaryReference': 'payment',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'fienfourie@gmail.com',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 29,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614933
              }
            ]
          },
          {
            'notificationAddress': '0722993401',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 29,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614932
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 34,
        'contactCardName': 'JAKES BIKE',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 30,
            'beneficiaryName': 'JAKES BIKE',
            'accountNumber': '202485218',
            'branchCode': '001155',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'JAKES BIKE',
            'beneficiaryReference': '141000100755808',
            'valid': false
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-18T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'JAKES BIKE',
            'paymentCRNarration': '141000100755808',
            'execEngineRef': '000000001066094848'
          },
          {
            'paymentDate': '2016-02-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'JAKES BIKE',
            'paymentCRNarration': '141000100755808',
            'execEngineRef': '000000001014800058'
          },
          {
            'paymentDate': '2016-01-15T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'JAKES BIKE',
            'paymentCRNarration': '141000100755808',
            'execEngineRef': '000000000989306616'
          }
        ]
      },
      {
        'contactCardID': 35,
        'contactCardName': 'Santam',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 31,
            'beneficiaryName': 'Santam',
            'accountNumber': '4060392550',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Santam',
            'beneficiaryReference': 'Gomac -048/9055/9065',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-18T00:00:00',
            'paymentAmount': 48978.96,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'Santam',
            'paymentCRNarration': 'Gomac -048/9055/9065',
            'execEngineRef': '000000001066255762'
          },
          {
            'paymentDate': '2016-03-15T00:00:00',
            'paymentAmount': 16630.07,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'Santam',
            'paymentCRNarration': 'Gomac -048/9055/9065',
            'execEngineRef': '000000001039693457'
          },
          {
            'paymentDate': '2016-02-15T00:00:00',
            'paymentAmount': 19098.89,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'Santam',
            'paymentCRNarration': 'Gomac -048/9055/9065',
            'execEngineRef': '000000001014256368'
          }
        ]
      },
      {
        'contactCardID': 36,
        'contactCardName': 'ANDRE ACC',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 32,
            'beneficiaryName': 'ANDRE ACC',
            'accountNumber': '38059450759',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'ANDRE ACC',
            'beneficiaryReference': 'GOMAC',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-29T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Tomiwa',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000489044962187'
          },
          {
            'paymentDate': '2017-08-29T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Somewhere',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000489044962173'
          },
          {
            'paymentDate': '2017-08-29T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'ANDRE ACC',
            'paymentCRNarration': 'ANDRE ACC',
            'execEngineRef': '000000489044960925'
          }
        ]
      },
      {
        'contactCardID': 37,
        'contactCardName': 'AutoAlpina',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 33,
            'beneficiaryName': 'AutoAlpina',
            'accountNumber': '62113415930',
            'branchCode': '260950',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'AutoAlpina',
            'beneficiaryReference': 'Gomac',
            'valid': false
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-29T00:00:00',
            'paymentAmount': 30,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'AutoAlpina',
            'paymentCRNarration': 'AutoAlpina',
            'execEngineRef': '000000489044960822'
          },
          {
            'paymentDate': '2012-09-07T00:00:00',
            'paymentAmount': 3215.77,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'AutoAlpina',
            'paymentCRNarration': 'Gomac',
            'execEngineRef': '0067137192'
          },
          {
            'paymentDate': '2010-08-12T00:00:00',
            'paymentAmount': 2326.95,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'AutoAlpina',
            'paymentCRNarration': 'Gomac',
            'execEngineRef': '008607902'
          }
        ]
      },
      {
        'contactCardID': 38,
        'contactCardName': 'G J savings',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 35,
            'beneficiaryName': 'G J savings',
            'accountNumber': '2713389429',
            'bankName': 'NEDBANK',
            'branchCode': '171338',
            'beneficiaryType': 'BNFINT',
            'myReference': 'gj',
            'beneficiaryReference': 'pamela',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2010-03-16T00:00:00',
            'paymentAmount': 1681,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'gj',
            'paymentCRNarration': 'pamela',
            'execEngineRef': '039256544'
          },
          {
            'paymentDate': '2010-03-07T00:00:00',
            'paymentAmount': 3000,
            'acctNumber': '2713385954',
            'paymentDRNarration': 'gj',
            'paymentCRNarration': 'pamela',
            'execEngineRef': '036883241'
          }
        ]
      },
      {
        'contactCardID': 39,
        'contactCardName': 'KIRBY',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 36,
            'beneficiaryName': 'KIRBY',
            'accountNumber': '9253441660',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'KIRBY',
            'beneficiaryReference': 'GOMAC',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-18T00:00:00',
            'paymentAmount': 2380,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'KIRBY',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000001066695198'
          },
          {
            'paymentDate': '2015-12-07T00:00:00',
            'paymentAmount': 1080,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'KIRBY',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000000961137635'
          },
          {
            'paymentDate': '2015-03-23T00:00:00',
            'paymentAmount': 360,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'KIRBY',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000000752118974'
          }
        ]
      },
      {
        'contactCardID': 40,
        'contactCardName': 'BOTSHELO ELIZABETH MORA',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 37,
            'beneficiaryName': 'BOTSHELO ELIZABETH MORA',
            'accountNumber': '377095000000195',
            'branchCode': '000000',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Post beneficiary for credit ca',
            'beneficiaryReference': 'Post for beneficiary',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'natashagov@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 37,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614969
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 41,
        'contactCardName': 'Investec 147',
        'contactCardDetails': [
          {
            'accountType': 'DS',
            'beneficiaryID': 38,
            'beneficiaryName': 'Investec 147',
            'accountNumber': '532864679997',
            'bankName': 'NEDBANK',
            'branchCode': '170205',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Investec',
            'beneficiaryReference': 'payment',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-04-04T00:00:00',
            'paymentAmount': 1250,
            'acctNumber': '1128760746',
            'paymentDRNarration': 'Investec',
            'paymentCRNarration': 'payment',
            'execEngineRef': '000000489031737200'
          }
        ]
      },
      {
        'contactCardID': 42,
        'contactCardName': 'Mercia',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 39,
            'beneficiaryName': 'Mercia',
            'accountNumber': '1713237407',
            'bankName': 'NEDBANK',
            'branchCode': '171438',
            'beneficiaryType': 'BNFINT',
            'myReference': 'MERCIA',
            'beneficiaryReference': 'PAMELA',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2011-03-29T00:00:00',
            'paymentAmount': 400,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'MERCIA',
            'paymentCRNarration': 'PAMELA',
            'execEngineRef': '0024089817'
          },
          {
            'paymentDate': '2011-03-14T00:00:00',
            'paymentAmount': 552,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'MERCIA',
            'paymentCRNarration': 'PAMELA',
            'execEngineRef': '0016684819'
          },
          {
            'paymentDate': '2011-03-09T00:00:00',
            'paymentAmount': 952,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'MERCIA',
            'paymentCRNarration': 'PAMELA',
            'execEngineRef': '0015405810'
          }
        ]
      },
      {
        'contactCardID': 43,
        'contactCardName': 'BOTSHELO ELIZABETH MOR',
        'contactCardDetails': [
          {
            'accountType': 'CC',
            'beneficiaryID': 40,
            'beneficiaryName': 'BOTSHELO ELIZABETH MOR',
            'accountNumber': '377095000000195',
            'branchCode': '000000',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Post beneficiary for credit ca',
            'beneficiaryReference': 'Post for beneficiary',
            'valid': true
          }
        ],
        'contactCardNotifications': [
          {
            'notificationAddress': 'natashagov@nedbank.co.za',
            'notificationType': 'EMAIL',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 40,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5614970
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 44,
        'contactCardName': 'SHA SANTAM',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 41,
            'beneficiaryName': 'SHA SANTAM',
            'accountNumber': '1944146792',
            'bankName': 'NEDBANK',
            'branchCode': '194405',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SHA SANTAM',
            'beneficiaryReference': 'GOMAC P02525 11',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2011-04-15T00:00:00',
            'paymentAmount': 16640.45,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SHA SANTAM',
            'paymentCRNarration': 'GOMAC P02525 11',
            'execEngineRef': '0033924691'
          }
        ]
      },
      {
        'contactCardID': 45,
        'contactCardName': 'RCI',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 43,
            'beneficiaryName': 'RCI',
            'accountNumber': '022683275',
            'branchCode': '019205',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'RCI',
            'beneficiaryReference': 'VAN RENSBURG 2732-05058',
            'valid': false
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2011-05-19T00:00:00',
            'paymentAmount': 847,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'RCI',
            'paymentCRNarration': 'VAN RENSBURG 2732-05058',
            'execEngineRef': '0050603547'
          }
        ]
      },
      {
        'contactCardID': 46,
        'contactCardName': 'FIA',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 46,
            'beneficiaryName': 'FIA',
            'accountNumber': '62404333784',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'FIA',
            'beneficiaryReference': 'Gomac F004725',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-07T00:00:00',
            'paymentAmount': 6060,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'FIA',
            'paymentCRNarration': 'Gomac F004725',
            'execEngineRef': '000000001061119294'
          },
          {
            'paymentDate': '2015-05-11T00:00:00',
            'paymentAmount': 5700,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'FIA',
            'paymentCRNarration': 'Gomac F004725',
            'execEngineRef': '000000000791890354'
          },
          {
            'paymentDate': '2014-05-21T00:00:00',
            'paymentAmount': 5340,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'FIA',
            'paymentCRNarration': 'Gomac F004725',
            'execEngineRef': '000000000505870083'
          }
        ]
      },
      {
        'contactCardID': 47,
        'contactCardName': 'Juke',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 49,
            'beneficiaryName': 'Juke',
            'accountNumber': '1957327022',
            'bankName': 'NEDBANK',
            'branchCode': '196005',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Juke',
            'beneficiaryReference': '59634270001',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-16T00:00:00',
            'paymentAmount': 1200,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'Juke',
            'paymentCRNarration': '59634270001',
            'execEngineRef': '000000001066094358'
          },
          {
            'paymentDate': '2016-03-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'Juke',
            'paymentCRNarration': '59634270001',
            'execEngineRef': '000000001040093863'
          },
          {
            'paymentDate': '2016-02-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'Juke',
            'paymentCRNarration': '59634270001',
            'execEngineRef': '000000001014798906'
          }
        ]
      },
      {
        'contactCardID': 48,
        'contactCardName': 'VENTER KENNEDY',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 51,
            'beneficiaryName': 'VENTER KENNEDY',
            'accountNumber': '62245770335',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'VENTER KENNEDY',
            'beneficiaryReference': 'GOMOO1GOMACMACKORVRENSBURG',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-05-06T00:00:00',
            'paymentAmount': 1950,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'VENTER KENNEDY',
            'paymentCRNarration': 'GOMOO1GOMACMACKORVRENSBURG',
            'execEngineRef': '000000001086716489'
          },
          {
            'paymentDate': '2016-04-07T00:00:00',
            'paymentAmount': 540,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'VENTER KENNEDY',
            'paymentCRNarration': 'GOMOO1GOMACMACKORVRENSBURG',
            'execEngineRef': '000000001061117854'
          },
          {
            'paymentDate': '2016-03-07T00:00:00',
            'paymentAmount': 4000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'VENTER KENNEDY',
            'paymentCRNarration': 'GOMOO1GOMACMACKORVRENSBURG',
            'execEngineRef': '000000001034694733'
          }
        ]
      },
      {
        'contactCardID': 49,
        'contactCardName': 'ELECTRO SECURITY',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 53,
            'beneficiaryName': 'ELECTRO SECURITY',
            'accountNumber': '62028829862',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'ELECTRO SECURITY',
            'beneficiaryReference': 'GOMAC ENTERPRISES',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2015-10-01T00:00:00',
            'paymentAmount': 2760,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'ELECTRO SECURITY',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000000907908453'
          },
          {
            'paymentDate': '2015-05-18T00:00:00',
            'paymentAmount': 1800,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'ELECTRO SECURITY',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000000795350764'
          },
          {
            'paymentDate': '2014-12-04T00:00:00',
            'paymentAmount': 395,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'ELECTRO SECURITY',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000000669281895'
          }
        ]
      },
      {
        'contactCardID': 50,
        'contactCardName': 'Just tiffany CSMIT',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 54,
            'beneficiaryName': 'Just tiffany CSMIT',
            'accountNumber': '134818989',
            'bankName': 'STANDARD BANK SOUTH AFRICA',
            'branchCode': '051001',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Just tiffany/CSMIT',
            'beneficiaryReference': 'GOMAC/P MACKOR',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2013-06-21T00:00:00',
            'paymentAmount': 1200,
            'acctNumber': '2713385954',
            'paymentDRNarration': 'Just tiffany/CSMIT',
            'paymentCRNarration': 'GOMAC/P MACKOR',
            'execEngineRef': '000000000260193863'
          },
          {
            'paymentDate': '2013-05-30T00:00:00',
            'paymentAmount': 1700,
            'acctNumber': '2713385954',
            'paymentDRNarration': 'Just tiffany/CSMIT',
            'paymentCRNarration': 'GOMAC/P MACKOR',
            'execEngineRef': '000000000246938832'
          }
        ]
      },
      {
        'contactCardID': 51,
        'contactCardName': 'AJR HYPER CC',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 55,
            'beneficiaryName': 'AJR HYPER CC',
            'accountNumber': '1497202779',
            'bankName': 'NEDBANK',
            'branchCode': '171338',
            'beneficiaryType': 'BNFINT',
            'myReference': 'AJR HYPER CC',
            'beneficiaryReference': 'GOMAC ENTERPRISES',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-07T00:00:00',
            'paymentAmount': 7500,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'AJR HYPER CC',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000001061436573'
          },
          {
            'paymentDate': '2015-12-07T00:00:00',
            'paymentAmount': 170,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'AJR HYPER CC',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000000961138195'
          },
          {
            'paymentDate': '2015-07-29T00:00:00',
            'paymentAmount': 7460,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'AJR HYPER CC',
            'paymentCRNarration': 'GOMAC ENTERPRISES',
            'execEngineRef': '000000000853363615'
          }
        ]
      },
      {
        'contactCardID': 52,
        'contactCardName': 'COMPENSATIONCOMM990000111219',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 57,
            'beneficiaryName': 'COMPENSATIONCOMM990000111219',
            'accountNumber': '1007930905',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'COMPENSATIONCOMM990000111219',
            'beneficiaryReference': '990000111219/B7000745919',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2015-09-16T00:00:00',
            'paymentAmount': 1700,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'COMPENSATIONCOMM990000111219',
            'paymentCRNarration': '990000111219/B7000745919',
            'execEngineRef': '000000000891111377'
          }
        ]
      },
      {
        'contactCardID': 53,
        'contactCardName': 'DR LOOTS',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 59,
            'beneficiaryName': 'DR LOOTS',
            'accountNumber': '62188639416',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'DR LOOTS',
            'beneficiaryReference': 'JAKES VAN RENSBURG',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2013-12-05T00:00:00',
            'paymentAmount': 1380,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'DR LOOTS',
            'paymentCRNarration': 'JAKES VAN RENSBURG',
            'execEngineRef': '000000000385278856'
          }
        ]
      },
      {
        'contactCardID': 54,
        'contactCardName': 'SPCA VER',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 60,
            'beneficiaryName': 'SPCA VER',
            'accountNumber': '62413149297',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'SPCA VER',
            'beneficiaryReference': 'PAMELA MACKOR',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2014-06-11T00:00:00',
            'paymentAmount': 600,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SPCA VER',
            'paymentCRNarration': 'PAMELA MACKOR',
            'execEngineRef': '000000000524980959'
          }
        ]
      },
      {
        'contactCardID': 55,
        'contactCardName': 'ETANA HOLLARD',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 61,
            'beneficiaryName': 'ETANA HOLLARD',
            'accountNumber': '62034267238',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'ETANA/HOLLARD',
            'beneficiaryReference': 'GOMACOR PTY LTD',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 56,
        'contactCardName': 'AUDI NEW',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 62,
            'beneficiaryName': 'AUDI NEW1',
            'accountNumber': '0000009287',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'AUDI NEW',
            'beneficiaryReference': '23468850012',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'AUDI NEW',
            'paymentCRNarration': '23468850012',
            'execEngineRef': '000000001066095048'
          },
          {
            'paymentDate': '2016-01-15T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'AUDI NEW',
            'paymentCRNarration': '23468850012',
            'execEngineRef': '000000000989306980'
          },
          {
            'paymentDate': '2015-12-11T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'AUDI NEW',
            'paymentCRNarration': '23468850012',
            'execEngineRef': '000000000964411870'
          }
        ]
      },
      {
        'contactCardID': 57,
        'contactCardName': 'ELECTRO SECURITY',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 63,
            'beneficiaryName': 'ELECTRO SECURITY',
            'accountNumber': '62028829862',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'ELECTRO SECURITY',
            'beneficiaryReference': 'GOMAC/MACKOR',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 58,
        'contactCardName': 'SAUWHF AFFILIATIONS',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 64,
            'beneficiaryName': 'SAUWHF AFFILIATIONS',
            'accountNumber': '62314125693',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'SAUWHF AFFILIATIONS',
            'beneficiaryReference': 'NORTH WEST POTCH JUNIORS',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2015-03-18T00:00:00',
            'paymentAmount': 1940,
            'acctNumber': '1713237059',
            'paymentDRNarration': 'SAUWHF AFFILIATIONS',
            'paymentCRNarration': 'NORTH WEST POTCH JUNIORS',
            'execEngineRef': '000000000748999114'
          },
          {
            'paymentDate': '2015-02-19T00:00:00',
            'paymentAmount': 1620,
            'acctNumber': '1713237059',
            'paymentDRNarration': 'SAUWHF AFFILIATIONS',
            'paymentCRNarration': 'NORTH WEST POTCH JUNIORS',
            'execEngineRef': '000000000724926645'
          },
          {
            'paymentDate': '2014-03-25T00:00:00',
            'paymentAmount': 2000,
            'acctNumber': '1713237059',
            'paymentDRNarration': 'SAUWHF AFFILIATIONS',
            'paymentCRNarration': 'NORTH WEST POTCH JUNIORS',
            'execEngineRef': '000000000462377573'
          }
        ]
      },
      {
        'contactCardID': 59,
        'contactCardName': 'SPCA VEREENINGING',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 65,
            'beneficiaryName': 'SPCA VEREENINGING',
            'accountNumber': '62413149297',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'SPCA VEREENINGING',
            'beneficiaryReference': 'GOMAC',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2014-06-20T00:00:00',
            'paymentAmount': 450,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SPCA VEREENINGING',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000000529661107'
          },
          {
            'paymentDate': '2014-04-17T00:00:00',
            'paymentAmount': 900,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SPCA VEREENINGING',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000000481632487'
          }
        ]
      },
      {
        'contactCardID': 60,
        'contactCardName': 'TEARS',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 66,
            'beneficiaryName': 'TEARS',
            'accountNumber': '072062886',
            'bankName': 'STANDARD BANK SOUTH AFRICA',
            'branchCode': '051001',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'TEARS',
            'beneficiaryReference': 'P MACKOR',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2015-12-21T00:00:00',
            'paymentAmount': 1250,
            'acctNumber': '2713385954',
            'paymentDRNarration': 'TEARS',
            'paymentCRNarration': 'P MACKOR',
            'execEngineRef': '000000000971334024'
          },
          {
            'paymentDate': '2015-06-15T00:00:00',
            'paymentAmount': 1500,
            'acctNumber': '2713385954',
            'paymentDRNarration': 'TEARS',
            'paymentCRNarration': 'P MACKOR',
            'execEngineRef': '000000000818598268'
          },
          {
            'paymentDate': '2014-12-15T00:00:00',
            'paymentAmount': 1200,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'TEARS',
            'paymentCRNarration': 'P MACKOR',
            'execEngineRef': '000000000676011971'
          }
        ]
      },
      {
        'contactCardID': 61,
        'contactCardName': 'ELANA',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 67,
            'beneficiaryName': 'ELANA',
            'accountNumber': '0678161926',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'ELANA',
            'beneficiaryReference': 'DROLLIES',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 62,
        'contactCardName': 'MARINE POOLS',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 69,
            'beneficiaryName': 'MARINE POOLS',
            'accountNumber': '4061977646',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'MARINE POOLS',
            'beneficiaryReference': 'GOMAC/JAKES',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-07-12T00:00:00',
            'paymentAmount': 25.7,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489042031113'
          },
          {
            'paymentDate': '2017-06-06T00:00:00',
            'paymentAmount': 1002.5,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489040687864'
          },
          {
            'paymentDate': '2017-06-05T00:00:00',
            'paymentAmount': 1002.5,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Bene Acc with ext bank',
            'paymentCRNarration': 'Bene Acc with ext bank',
            'execEngineRef': '000000489039945992'
          }
        ]
      },
      {
        'contactCardID': 63,
        'contactCardName': 'DOGTOWN',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 70,
            'beneficiaryName': 'DOGTOWN',
            'accountNumber': '62240425571',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'DOGTOWN',
            'beneficiaryReference': 'PAMELA MACKOR',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2015-12-21T00:00:00',
            'paymentAmount': 2000,
            'acctNumber': '2713385954',
            'paymentDRNarration': 'DOGTOWN',
            'paymentCRNarration': 'PAMELA MACKOR',
            'execEngineRef': '000000000971333299'
          },
          {
            'paymentDate': '2015-06-15T00:00:00',
            'paymentAmount': 500,
            'acctNumber': '2713385954',
            'paymentDRNarration': 'DOGTOWN',
            'paymentCRNarration': 'PAMELA MACKOR',
            'execEngineRef': '000000000818600379'
          },
          {
            'paymentDate': '2014-12-15T00:00:00',
            'paymentAmount': 1200,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'DOGTOWN',
            'paymentCRNarration': 'PAMELA MACKOR',
            'execEngineRef': '000000000676013586'
          }
        ]
      },
      {
        'contactCardID': 64,
        'contactCardName': 'SAMUEL BROADBENT HOUSE',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 71,
            'beneficiaryName': 'SAMUEL BROADBENT HOUSE',
            'accountNumber': '1984453750',
            'bankName': 'NEDBANK',
            'branchCode': '198405',
            'beneficiaryType': 'BNFINT',
            'myReference': 'SAMUEL BROADBENT HOUSE',
            'beneficiaryReference': 'PAMELA MACKOR',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 65,
        'contactCardName': 'NICO SMIT',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 72,
            'beneficiaryName': 'NICO SMIT',
            'accountNumber': '1016645945',
            'bankName': 'NEDBANK',
            'branchCode': '171338',
            'beneficiaryType': 'BNFINT',
            'myReference': 'NICO SMIT',
            'beneficiaryReference': 'PAMELA',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-15T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'NICO SMIT',
            'paymentCRNarration': 'PAMELA',
            'execEngineRef': '000000001065523733'
          },
          {
            'paymentDate': '2016-04-11T00:00:00',
            'paymentAmount': 390,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'NICO SMIT',
            'paymentCRNarration': 'PAMELA',
            'execEngineRef': '000000001062582367'
          },
          {
            'paymentDate': '2016-03-09T00:00:00',
            'paymentAmount': 1333.8,
            'acctNumber': '1713237059',
            'paymentDRNarration': 'NICO SMIT',
            'paymentCRNarration': 'PAMELA',
            'execEngineRef': '000000001036264501'
          }
        ]
      },
      {
        'contactCardID': 66,
        'contactCardName': 'SANLAM INVESTMENT',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 73,
            'beneficiaryName': 'SANLAM INVESTMENT',
            'accountNumber': '4048794798',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'SANLAM INVESTMENT',
            'beneficiaryReference': '457200519748879',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2015-05-15T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'SANLAM INVESTMENT',
            'paymentCRNarration': '457200519748879',
            'execEngineRef': '000000000794609551'
          },
          {
            'paymentDate': '2015-04-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SANLAM INVESTMENT',
            'paymentCRNarration': '457200519748879',
            'execEngineRef': '000000000771704668'
          },
          {
            'paymentDate': '2015-03-16T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'SANLAM INVESTMENT',
            'paymentCRNarration': '457200519748879',
            'execEngineRef': '000000000748211286'
          }
        ]
      },
      {
        'contactCardID': 67,
        'contactCardName': 'hair',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 75,
            'beneficiaryName': 'hair',
            'accountNumber': '1365133875',
            'bankName': 'CAPITEC BANK',
            'branchCode': '470010',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'hair',
            'beneficiaryReference': 'PAMELA MACKOR',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2016-04-25T00:00:00',
            'paymentAmount': 200,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'hair',
            'paymentCRNarration': 'PAMELA MACKOR',
            'execEngineRef': '000000001073256006'
          },
          {
            'paymentDate': '2016-03-15T00:00:00',
            'paymentAmount': 450,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'hair',
            'paymentCRNarration': 'PAMELA MACKOR',
            'execEngineRef': '000000001039691956'
          },
          {
            'paymentDate': '2016-02-12T00:00:00',
            'paymentAmount': 340,
            'acctNumber': '1713277581',
            'paymentDRNarration': 'hair',
            'paymentCRNarration': 'PAMELA MACKOR',
            'execEngineRef': '000000001013033537'
          }
        ]
      },
      {
        'contactCardID': 68,
        'contactCardName': 'JAKES SANLAM',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 76,
            'beneficiaryName': 'JAKES SANLAM',
            'accountNumber': '4048974798',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'JAKES SANLAM',
            'beneficiaryReference': '455700520196416  VAN RENSBURG',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 69,
        'contactCardName': 'ABSA SAVINGS',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 77,
            'beneficiaryName': 'ABSA SAVINGS',
            'accountNumber': '9306756512',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'pamela',
            'beneficiaryReference': 'absa',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-05-26T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1128760746',
            'paymentDRNarration': 'pamela',
            'paymentCRNarration': 'absa',
            'execEngineRef': '000000489035970157'
          },
          {
            'paymentDate': '2016-04-28T00:00:00',
            'paymentAmount': 600,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'pamela',
            'paymentCRNarration': 'absa',
            'execEngineRef': '000000001077001072'
          },
          {
            'paymentDate': '2016-04-28T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1713241811',
            'paymentDRNarration': 'pamela',
            'paymentCRNarration': 'absa',
            'execEngineRef': '000000001076267689'
          }
        ]
      },
      {
        'contactCardID': 70,
        'contactCardName': 'GAS BOYS',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 78,
            'beneficiaryName': 'GAS BOYS',
            'accountNumber': '1073616401',
            'bankName': 'NEDBANK',
            'branchCode': '108410',
            'beneficiaryType': 'BNFINT',
            'myReference': 'GAS BOYS',
            'beneficiaryReference': 'GOMACOR-88JAMES MAROKA',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 71,
        'contactCardName': 'Gomac jakes',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 79,
            'beneficiaryName': 'Gomac jakes',
            'accountNumber': '680891729',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Gomac -jakes',
            'beneficiaryReference': 'JF VAN STADEN',
            'instantPaymentAvailable': true,
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 72,
        'contactCardName': 'Ethekwini  Normal Vend',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 4,
            'beneficiaryName': 'Ethekwini  Normal Vend',
            'accountNumber': '01050020017',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'LightV2 QA contactcard',
            'beneficiaryReference': 'LightV2 QA',
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
                'beneficiaryID': 4,
                'beneficiaryType': 'PPD',
                'notificationID': 5615175
              }
            ]
          },
          {
            'notificationAddress': '0126938111',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 4,
                'beneficiaryType': 'PPD',
                'notificationID': 5615174
              }
            ]
          },
          {
            'notificationAddress': '0614989140',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 4,
                'beneficiaryType': 'PPD',
                'notificationID': 5615173
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 73,
        'contactCardName': 'Naija 1',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 5,
            'beneficiaryName': 'Naija 1',
            'accountNumber': '01050020009',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Elect Meter',
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
                'beneficiaryID': 5,
                'beneficiaryType': 'PPD',
                'notificationID': 5615176
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 5,
                'beneficiaryType': 'PPD',
                'notificationID': 5615177
              }
            ]
          },
          {
            'notificationAddress': '0622210985',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 5,
                'beneficiaryType': 'PPD',
                'notificationID': 5615178
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 74,
        'contactCardName': 'Naija 2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 6,
            'beneficiaryName': 'Naija 2',
            'accountNumber': '0622210986',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Cellc Prepaid',
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
                'beneficiaryID': 6,
                'beneficiaryType': 'PPD',
                'notificationID': 5615179
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 6,
                'beneficiaryType': 'PPD',
                'notificationID': 5615180
              }
            ]
          },
          {
            'notificationAddress': '0622210985',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 6,
                'beneficiaryType': 'PPD',
                'notificationID': 5615181
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 75,
        'contactCardName': 'Yankees4',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 34,
            'beneficiaryName': 'Yankees4',
            'accountNumber': '1001004345',
            'bankName': 'NEDBANK',
            'branchCode': '151644',
            'beneficiaryType': 'BNFINT',
            'myReference': 'Nedbank Account',
            'beneficiaryReference': 'Nedbank Account',
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
                'beneficiaryID': 34,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615191
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 34,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615192
              }
            ]
          },
          {
            'notificationAddress': '0622210985',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 34,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615193
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 76,
        'contactCardName': 'Yankees2',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 2,
            'beneficiaryName': 'Yankees2',
            'accountNumber': '0788216968',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Cellc Prepaid',
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
                'beneficiaryID': 2,
                'beneficiaryType': 'PPD',
                'notificationID': 5615228
              }
            ]
          },
          {
            'notificationAddress': '0126938001',
            'notificationType': 'FAX',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 2,
                'beneficiaryType': 'PPD',
                'notificationID': 5615229
              }
            ]
          },
          {
            'notificationAddress': '0622210985',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 2,
                'beneficiaryType': 'PPD',
                'notificationID': 5615230
              }
            ]
          }
        ]
      },
      {
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
      {
        'contactCardID': 78,
        'contactCardName': 'Nikola',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 3,
            'beneficiaryName': 'Nikola Bank',
            'accountNumber': '1940062772',
            'bankName': 'NEDBANK',
            'branchCode': '194037',
            'beneficiaryType': 'BNFINT',
            'myReference': 'ned123',
            'beneficiaryReference': 'Nikola_Bank_PAY',
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
                'beneficiaryID': 3,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615546
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 3,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615545
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 79,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 1,
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
      },
      {
        'contactCardID': 80,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 4,
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
      },
      {
        'contactCardID': 81,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 5,
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
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-17T00:00:00',
            'paymentAmount': 55.6,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'WesHein',
            'paymentCRNarration': 'WESHein',
            'execEngineRef': '000000489044688106'
          }
        ]
      },
      {
        'contactCardID': 82,
        'contactCardName': 'Heineken',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 28,
            'beneficiaryName': 'HeinAbsa',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'blabsa',
            'beneficiaryReference': 'blabsa',
            'instantPaymentAvailable': true,
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 42,
            'beneficiaryName': 'HeinAFNB',
            'accountNumber': '62003019503',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'fnb',
            'beneficiaryReference': 'fnb',
            'instantPaymentAvailable': true,
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 1,
            'beneficiaryName': 'Heineken_Prepaid',
            'accountNumber': '0715712967',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Heineken_PPD',
            'beneficiaryReference': '',
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 3,
            'beneficiaryName': 'Heineken_PEL_Meter',
            'accountNumber': '01050020009',
            'branchCode': '000000',
            'beneficiaryType': 'PEL',
            'myReference': 'Heineken_Meter_BUY',
            'beneficiaryReference': '',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-09-01T00:00:00',
            'paymentAmount': 1000,
            'acctNumber': '1128760746',
            'paymentDRNarration': 'Return',
            'paymentCRNarration': 'Return',
            'execEngineRef': '000000489045034115'
          },
          {
            'paymentDate': '2017-08-30T00:00:00',
            'paymentAmount': 40,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Alpha Numeric Meter Input',
            'paymentCRNarration': '0002177902 03046431 N',
            'execEngineRef': '000000489044975840'
          }
        ]
      },
      {
        'contactCardID': 83,
        'contactCardName': 'Hein Self Absa3',
        'mySelf': true,
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 44,
            'beneficiaryName': 'Absa MySelf3',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'Absa_MySelf_EXT2',
            'beneficiaryReference': 'Absa_MySelf_EXT2',
            'instantPaymentAvailable': true,
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 7,
            'beneficiaryName': 'Hein_Self_Prepaid',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Nikola_Prepaid_BUY',
            'beneficiaryReference': '',
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 8,
            'beneficiaryName': 'Prepaid2',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Nikola_Prepaid_BUY',
            'beneficiaryReference': '',
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 9,
            'beneficiaryName': 'Prepaid3',
            'accountNumber': '0796317907',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Nikola_Prepaid_BUY',
            'beneficiaryReference': '',
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 10,
            'beneficiaryName': 'Hein_Self_Prepaid',
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
            'notificationAddress': '0834443334',
            'notificationType': 'SMS',
            'notificationDefault': false,
            'notificationParents': [
              {
                'beneficiaryID': 44,
                'beneficiaryType': 'BNFEXT',
                'notificationID': 5615679
              },
              {
                'beneficiaryID': 7,
                'beneficiaryType': 'PPD',
                'notificationID': 5615680
              },
              {
                'beneficiaryID': 8,
                'beneficiaryType': 'PPD',
                'notificationID': 5615681
              },
              {
                'beneficiaryID': 9,
                'beneficiaryType': 'PPD',
                'notificationID': 5615682
              },
              {
                'beneficiaryID': 10,
                'beneficiaryType': 'PPD',
                'notificationID': 5615683
              }
            ]
          }
        ]
      },
      {
        'contactCardID': 84,
        'contactCardName': 'ARTHUR KAPLAN JEWELLERS',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 45,
            'beneficiaryName': 'ARTHUR KAPLAN JEWELLERS',
            'accountNumber': '0000000055',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'Nice payment',
            'beneficiaryReference': 'Nice payment',
            'valid': true
          }
        ],
        'contactCardNotifications': [],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-29T00:00:00',
            'paymentAmount': 10,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'Nice payment',
            'paymentCRNarration': 'Nice payment',
            'execEngineRef': '000000489044960924'
          }
        ]
      },
      {
        'contactCardID': 85,
        'contactCardName': 'ARTHUR KAPLAN JEWELLERS',
        'contactCardDetails': [
          {
            'accountType': 'BDF',
            'beneficiaryID': 47,
            'beneficiaryName': 'ARTHUR KAPLAN JEWELLERS',
            'accountNumber': '0000000055',
            'branchCode': '000000',
            'beneficiaryType': 'BDF',
            'myReference': 'Nice payment',
            'beneficiaryReference': 'Nice payment',
            'valid': true
          }
        ],
        'contactCardNotifications': []
      },
      {
        'contactCardID': 86,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 48,
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
      },
      {
        'contactCardID': 87,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 50,
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
      },
      {
        'contactCardID': 88,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 52,
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
      },
      {
        'contactCardID': 89,
        'contactCardName': 'Heineken',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 56,
            'beneficiaryName': 'HeinAbsa',
            'accountNumber': '4047050967',
            'bankName': 'ABSA BANK',
            'branchCode': '632005',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'blabsa',
            'beneficiaryReference': 'blabsa',
            'instantPaymentAvailable': true,
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 58,
            'beneficiaryName': 'HeinAFNB',
            'accountNumber': '62003019503',
            'bankName': 'FNB SOUTH AFRICA',
            'branchCode': '250655',
            'beneficiaryType': 'BNFEXT',
            'myReference': 'fnb',
            'beneficiaryReference': 'fnb',
            'instantPaymentAvailable': true,
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 12,
            'beneficiaryName': 'Heineken_Prepaid',
            'accountNumber': '0715712967',
            'branchCode': '000000',
            'beneficiaryType': 'PPD',
            'myReference': 'Heineken_PPD',
            'beneficiaryReference': '',
            'valid': true
          },
          {
            'accountType': 'U0',
            'beneficiaryID': 13,
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
        'contactCardID': 90,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 68,
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
      },
      {
        'contactCardID': 91,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 74,
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
      },
      {
        'contactCardID': 92,
        'contactCardName': 'Calvin Nedbank',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 80,
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
      },
      {
        'contactCardID': 93,
        'contactCardName': 'Ambros Best FBE',
        'contactCardDetails': [
          {
            'accountType': 'U0',
            'beneficiaryID': 14,
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
                'beneficiaryID': 14,
                'beneficiaryType': 'PEL',
                'notificationID': 5615675
              }
            ]
          }
        ],
        'BeneficiaryRecentTransactDetails': [
          {
            'paymentDate': '2017-08-31T00:00:00',
            'paymentAmount': 20,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'TEST AMB',
            'paymentCRNarration': '0002178284 03046470 N',
            'execEngineRef': '000000489044998851'
          },
          {
            'paymentDate': '2017-08-31T00:00:00',
            'paymentAmount': 20,
            'acctNumber': '1001005570',
            'paymentDRNarration': 'TEST AMB',
            'paymentCRNarration': '0002178274 03046468 N',
            'execEngineRef': '000000489044998850'
          }
        ]
      },
      {
        'contactCardID': 94,
        'contactCardName': 'Nikola',
        'contactCardDetails': [
          {
            'accountType': 'CA',
            'beneficiaryID': 81,
            'beneficiaryName': 'Nikola Bank',
            'accountNumber': '1940062772',
            'bankName': 'NEDBANK',
            'branchCode': '194037',
            'beneficiaryType': 'BNFINT',
            'myReference': 'ned123',
            'beneficiaryReference': 'Nikola_Bank_PAY',
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
                'beneficiaryID': 81,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615697
              }
            ]
          },
          {
            'notificationAddress': '0712223333',
            'notificationType': 'SMS',
            'notificationDefault': true,
            'notificationParents': [
              {
                'beneficiaryID': 81,
                'beneficiaryType': 'BNFINT',
                'notificationID': 5615696
              }
            ]
          }
        ]
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
    'ContactCardName': 'Hein Self Absa3',
    'mySelf': true,
    'ContactCardDetails': [
      {
        'BeneficiaryName': 'Hein_Self_Absa',
        'AccountNumber': '4047050967',
        'BankName': 'ABSA BANK',
        'branchCode': 632005,
        'AccountType': 'U0',
        'beneficiaryType': 'BNFEXT',
        'MyReference': 'Absa_MySelf_EXT2',
        'BeneficiaryReference': 'Absa_MySelf_EXT2'
      },
      {
        'accountType': 'U0',
        'beneficiaryID': 17,
        'beneficiaryName': 'Hein_Self_Prepaid',
        'accountNumber': '0796317907',
        'branchCode': '000000',
        'beneficiaryType': 'PPD',
        'myReference': 'Nikola_Prepaid_BUY'
      }
    ],
    'ContactCardNotifications': [
      {
        'NotificationAddress': '0715712967',
        'NotificationType': 'SMS',
        'NotificationDefault': true
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
