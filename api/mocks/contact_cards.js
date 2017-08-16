'use strict'

module.exports = {
  contactCardsDetailsGet: contactCardsDetailsGet,
  contactCardsDetailsPost: contactCardsDetailsPost,
  contactCardGet: contactCardGet,
  contactCardPut: contactCardPut
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
          },
          {
            'paymentDate': '2017-07-01T00:00:00',
            'paymentAmount': 100,
            'acctNumber': '1713241811',
            'paymentDRNarration': '404060439',
            'paymentCRNarration': '404060439',
            'execEngineRef': '000000489041866054'
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
          },
          {
            'paymentDate': '2017-06-02T00:00:00',
            'paymentAmount': 111,
            'acctNumber': '1713267128',
            'paymentDRNarration': 'PICSES',
            'paymentCRNarration': 'GOMAC',
            'execEngineRef': '000000489039187439'
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
          },
          {
            'paymentDate': '2017-06-21T00:00:00',
            'paymentAmount': 105,
            'acctNumber': '1940062772',
            'paymentDRNarration': 'jakes wesbank c/c',
            'paymentCRNarration': '4790278300425004',
            'execEngineRef': '000000489041691938'
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
      }
    ],
    'metadata': {
      'page': 1,
      'pageSize': 20,
      'pageLimit': 4,
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
