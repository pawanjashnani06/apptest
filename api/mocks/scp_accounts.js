'use strict'

module.exports = {
  accountNumber: accountNumber,
  accounts: accounts,
  categoryTransaction: categoryTransaction,
  accountMetadata: accountMetadata,
  accountsTransactions: accountsTransactions,
  accountsTransactionsForPost: accountsTransactionsForPost,
  accountNumberTransactions: accountNumberTransactions
}

function accountNumber (req, res, next) {
  res.json({
    'AccountName': 'SA Bank',
    'AccountNickname': 'Charles',
    'CurrentBalance': 1000,
    'AvailableBalance': 900,
    'AccountNumber': '12345',
    'AccountHolder': 'Charles',
    'AccountType': 'Savings',
    'AccountIcon': 'glyphicon-account_current',
    'BranchCode': '198765',
    'Bank': 'NedBank',
    'ProductType': 'Insurance',
    'Status': 'Pending',
    'Statement': 'The statement delivery option for this account',
    'SubAcct': '12345',
    'PositionArray': [
      {
        'PositionIdentifier': '1',
        'PositionDate': '2016-04-18 01:18:35 PM',
        'UnitPrice': '1000',
        'UnitsHeld': '3',
        'MarketValue': '200',
        'Allocation': 'Sample text'
      }
    ],
    'BalanceHistoryArray': [
      {
        'BalanceAmount': 1,
        'BalanceDate': '2016-04-18 01:18:35 PM'
      }
    ],
    'RefreshStatus': 'The refresh status of the account',
    'SiteId': '16390',
    'SiteAccountId': '12345',
    'LastUpdate': '2016-04-18 01:18:35 PM',
    'InstitutionName': 'SA Bank',
    'ContainerName': 'Sample text',
    'Currency': 'Sample text',
    'MaxDailyLimit': 1,
    'InterestRate': 1,
    'CurrentBalanceStraight': 1,
    'CurrentBalanceBudget': 1,
    'CreditLimit': 1,
    'AmountDue': 1,
    'DueDate': 'Sample text',
    'LoanAmmount': 1,
    'OutstandingAmount': 1,
    'ItemAccountId': '14281512'
  })
}

function accounts (req, res, next) {
  res.json([
    {
      'ContainerName': 'Bank',
      'Accounts': [
        {
          'AccountName': 'Savings Account',
          'Balance': 140854.97,
          'AvailableBalance': 140824.97,
          'AccountNumber': '2009852923',
          'AccountType': 'CHECKING',
          'Status': '10',
          'AccountIcon': 'glyphicon-account_current',
          'NewAccount': false,
          'LastUpdate': '4/11/2016 4:48:42 PM'
        },
        {
          'AccountName': 'Current Account',
          'Balance': 170854.81,
          'AvailableBalance': 172854.81,
          'AccountNumber': '1009795481',
          'AccountType': 'CHECKING',
          'Status': '10',
          'AccountIcon': 'glyphicon-account_current',
          'NewAccount': false,
          'LastUpdate': '4/11/2016 4:48:42 PM'
        },
        {
          'AccountName': 'Current Account',
          'Balance': 201397.9,
          'AvailableBalance': 201397.9,
          'AccountNumber': '1025310667',
          'AccountType': 'CHECKING',
          'Status': '10',
          'AccountIcon': 'glyphicon-account_current',
          'NewAccount': false,
          'LastUpdate': '4/11/2016 4:48:42 PM'
        },
        {
          'AccountName': 'Current Account',
          'Balance': 1099657.41,
          'AvailableBalance': 1103657.41,
          'AccountNumber': '1028232942',
          'AccountType': 'CHECKING',
          'Status': '0',
          'AccountIcon': 'glyphicon-account_current',
          'NewAccount': false,
          'LastUpdate': '4/11/2016 4:48:42 PM'
        }
      ],
      'ContainerIcon': 'glyphicon-account_current'
    },
    {
      'ContainerName': 'Card',
      'Accounts': [
        {
          'AccountName': 'Card',
          'Balance': 0,
          'AvailableBalance': 0,
          'AccountNumber': '5898460760565622',
          'AccountType': 'CC',
          'AccountIcon': 'glyphicon-account_credit_card',
          'NewAccount': false,
          'LastUpdate': '4/11/2016 4:48:42 PM'
        },
        {
          'AccountName': 'Card',
          'Balance': 0,
          'AvailableBalance': 382388.76,
          'AccountNumber': '5898460760889527',
          'AccountType': 'CC',
          'AccountIcon': 'glyphicon-account_credit_card',
          'NewAccount': false,
          'LastUpdate': '4/11/2016 4:48:42 PM'
        }
      ],
      'ContainerIcon': ''
    },
    {
      'ContainerName': 'Loan',
      'Accounts': [
        {
          'AccountName': 'Loan',
          'Balance': 0,
          'AvailableBalance': 0,
          'AccountNumber': '8966258895201',
          'AccountType': 'AUTO',
          'AccountIcon': 'glyphicon-account_loans',
          'NewAccount': false,
          'LastUpdate': '4/11/2016 4:48:42 PM'
        },
        {
          'AccountName': 'Loan',
          'Balance': 0,
          'AvailableBalance': 0,
          'AccountNumber': '8907706400101',
          'AccountType': 'AUTO',
          'AccountIcon': 'glyphicon-account_loans',
          'NewAccount': false,
          'LastUpdate': '4/11/2016 4:48:42 PM'
        }
      ],
      'ContainerIcon': ''
    }
  ])
}

function categoryTransaction (req, res, next) {
  res.json([
    [
      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
        'Description': 'Travel 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2016-04-08 12:00:00 AM',
        'CategoryId': 100,
        ChildTransactions: [
          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'INDIGO 26 / 01 - 07 / 17',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-01 12:00:00 AM',
            'CategoryId': 91
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2d',
            'Description': 'Uber Bills 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '20117,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-06 12:00:00 AM',
            'CategoryId': 92
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2c',
            'Description': 'VW Finance 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '301417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-12 12:00:00 AM',
            'CategoryId': 93
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'Car Insurance 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-18 12:00:00 AM',
            'CategoryId': 94
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'INTEREST 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-20 12:00:00 AM',
            'CategoryId': 95
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'INTEREST 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-26 12:00:00 AM',
            'CategoryId': 96
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'INTEREST 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-30 12:00:00 AM',
            'CategoryId': 97
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'INTEREST 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2016 - 04 - 08 12:00:00 AM',
            'CategoryId': 98
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'INTEREST 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2016 - 04 - 08 12:00:00 AM',
            'CategoryId': 99
          }

        ]
      }
    ]
  ])
}

function accountMetadata (req, res, next) {
  res.json([
    {
      'AccountName': 'Savings Account',
      'AccountNumber': '12345',
      'IsOpen': true,
      'ProductCode': 'CA',
      'ProductDescription': 'abc',
      'RelationshipCode': 'PRI',
      'StatusCode': 'OPE',
      'SubProductCode': 'A',
      'ContainerId': 1,
      'ContainerName': 'NEDBank (SA)',
      'IsIncluded': true,
      'IsPlastic': true,
      'AccountType': 'CurrentAccount',
      'Nickname': 'Main Account',
      'SourceSystem': 'CASA',
      'InterestRate': '0.5%',
      'RepaymentAmount': 1,
      'AccountHolder': 'Mr Charles',
      'Actions': 'Pay,Transfer',
      'Transactions': [
        {
          'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
          'Description': 'INTEREST 26 / 03 - 07 / 04',
          'Amount': '35,86',
          'RunningBalance': '201417,9',
          'Debit': false,
          'Account': '1025310667',
          'PostedDate': '2016 - 04 - 08 12:00:00 AM',
          'CategoryId': 99
        }
      ],
      'Currency': 'Dollar',
      'AvailableBalance': 1000,
      'CurrentBalance': 100,
      'AmountDue': 1000,
      'DueDate': '2017-07-21',
      'LoanAmmount': 1,
      'OutstandingAmount': 1,
      'ProfileAccountState': 'Sample text',
      'AccountLevel': 'Sample text',
      'ViewAvailBal': true,
      'ViewStmnts': true,
      'IsRestricted': true,
      'ViewCurrBal': true,
      'ViewCredLim': true,
      'ViewMinAmtDue': true,
      'IsAlternateAccount': true,
      'AllowCredits': true,
      'AllowDebits': true,
      'AccountRules': {}
    }
  ])
}

function accountsTransactions (req, res, next) {
  res.json([
    [
      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
        'Description': 'Travel 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2016-04-08 12:00:00 AM',
        'CategoryId': 100,
        ChildTransactions: [
          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'INDIGO 26 / 01 - 07 / 17',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-01 12:00:00 AM',
            'CategoryId': 91
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2d',
            'Description': 'Uber Bills 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '20117,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-06 12:00:00 AM',
            'CategoryId': 92
          }

        ]
      },
      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2c',
        'Description': 'VW Finance 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '301417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-12 12:00:00 AM',
        'CategoryId': 93
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
        'Description': 'Car Insurance 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-18 12:00:00 AM',
        'CategoryId': 94
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2k',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-20 12:00:00 AM',
        'CategoryId': 95
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2t',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-26 12:00:00 AM',
        'CategoryId': 96
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2y',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-30 12:00:00 AM',
        'CategoryId': 97
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2v',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2016 - 04 - 08 12:00:00 AM',
        'CategoryId': 98
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2q',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2016 - 04 - 08 12:00:00 AM',
        'CategoryId': 99
      }

    ]
  ])
}

function accountsTransactionsForPost (req, res, next) {
  res.json([
    [
      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
        'Description': 'Travel 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2016-04-08 12:00:00 AM',
        'CategoryId': 100,
        ChildTransactions: [
          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
            'Description': 'INDIGO 26 / 01 - 07 / 17',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-01 12:00:00 AM',
            'CategoryId': 91
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2d',
            'Description': 'Uber Bills 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '20117,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-06 12:00:00 AM',
            'CategoryId': 92
          }

        ]
      },
      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2c',
        'Description': 'VW Finance 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '301417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-12 12:00:00 AM',
        'CategoryId': 93
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
        'Description': 'Car Insurance 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-18 12:00:00 AM',
        'CategoryId': 94
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2k',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-20 12:00:00 AM',
        'CategoryId': 95
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2t',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-26 12:00:00 AM',
        'CategoryId': 96
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2y',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2017-07-30 12:00:00 AM',
        'CategoryId': 97
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2v',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2016 - 04 - 08 12:00:00 AM',
        'CategoryId': 98
      },

      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2q',
        'Description': 'INTEREST 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2016 - 04 - 08 12:00:00 AM',
        'CategoryId': 99
      }

    ]
  ])
}

function accountNumberTransactions (req, res, next) {
  res.json([
    [
      {
        'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
        'Description': 'Travel 26 / 03 - 07 / 04',
        'Amount': '35,86',
        'RunningBalance': '201417,9',
        'Debit': false,
        'Account': '1025310667',
        'PostedDate': '2016-04-08 12:00:00 AM',
        'CategoryId': 100,
        ChildTransactions: [
          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2k',
            'Description': 'INDIGO 26 / 01 - 07 / 17',
            'Amount': '35,86',
            'RunningBalance': '201417,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-01 12:00:00 AM',
            'CategoryId': 91
          },

          {
            'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2d',
            'Description': 'Uber Bills 26 / 03 - 07 / 04',
            'Amount': '35,86',
            'RunningBalance': '20117,9',
            'Debit': false,
            'Account': '1025310667',
            'PostedDate': '2017-07-06 12:00:00 AM',
            'CategoryId': 92
          }

        ]
      }
    ]
  ])
}
