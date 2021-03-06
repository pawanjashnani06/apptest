'use strict'

module.exports = {
  accountNumber: accountNumber,
  accounts: accounts,
  categoryTransaction: categoryTransaction,
  accountMetadata: accountMetadata,
  accountsTransactions: accountsTransactions,
  accountsTransactionsForPost: accountsTransactionsForPost,
  accountNumberTransactions: accountNumberTransactions,
  accountsLatest: accountsLatest,
  getAtmCardLimit: getAtmCardLimit,
  putAtmCardLimit: putAtmCardLimit,
  getAtmLimit: getAtmLimit,
  putAtmLimit: putAtmLimit,
  getAccountDetails: getAccountDetails
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
    'PositionArray': [ {
      'PositionIdentifier': '1',
      'PositionDate': '2016-04-18 01:18:35 PM',
      'UnitPrice': '1000',
      'UnitsHeld': '3',
      'MarketValue': '200',
      'Allocation': 'Sample text'
    } ],
    'BalanceHistoryArray': [ {
      'BalanceAmount': 1,
      'BalanceDate': '2016-04-18 01:18:35 PM'
    } ],
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
  res.json([ {
    'ContainerName': 'Bank',
    'Accounts': [ {
      'AccountName': 'Savings Account',
      'Balance': 140854.97,
      'AvailableBalance': 140824.97,
      'AccountNumber': '2009852923',
      'AccountType': 'CHECKING',
      'Status': '10',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': false,
      'LastUpdate': '4/11/2016 4:48:42 PM'
    }, {
      'AccountName': 'Current Account',
      'Balance': 170854.81,
      'AvailableBalance': 172854.81,
      'AccountNumber': '1009795481',
      'AccountType': 'CHECKING',
      'Status': '10',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': false,
      'LastUpdate': '4/11/2016 4:48:42 PM'
    }, {
      'AccountName': 'Current Account',
      'Balance': 201397.9,
      'AvailableBalance': 201397.9,
      'AccountNumber': '1025310667',
      'AccountType': 'CHECKING',
      'Status': '10',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': false,
      'LastUpdate': '4/11/2016 4:48:42 PM'
    }, {
      'AccountName': 'Current Account',
      'Balance': 1099657.41,
      'AvailableBalance': 1103657.41,
      'AccountNumber': '1028232942',
      'AccountType': 'CHECKING',
      'Status': '0',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': false,
      'LastUpdate': '4/11/2016 4:48:42 PM'
    } ],
    'ContainerIcon': 'glyphicon-account_current'
  }, {
    'ContainerName': 'Card',
    'Accounts': [ {
      'AccountName': 'Card',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '5898460760565622',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': false,
      'LastUpdate': '4/11/2016 4:48:42 PM'
    }, {
      'AccountName': 'Card',
      'Balance': 0,
      'AvailableBalance': 382388.76,
      'AccountNumber': '5898460760889527',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': false,
      'LastUpdate': '4/11/2016 4:48:42 PM'
    } ],
    'ContainerIcon': ''
  }, {
    'ContainerName': 'Loan',
    'Accounts': [ {
      'AccountName': 'Loan',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '8966258895201',
      'AccountType': 'AUTO',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': false,
      'LastUpdate': '4/11/2016 4:48:42 PM'
    }, {
      'AccountName': 'Loan',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '8907706400101',
      'AccountType': 'AUTO',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': false,
      'LastUpdate': '4/11/2016 4:48:42 PM'
    } ],
    'ContainerIcon': ''
  } ])
}

function categoryTransaction (req, res, next) {
  res.json([ {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
    'Description': 'Travel 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2016-04-08 12:00:00 AM',
    'CategoryId': 100,
    ChildTransactions: [ {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INDIGO 26 / 01 - 07 / 17',
      'Amount': '35867',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-07-25 12:00:00 AM',
      'CategoryId': 91
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2d',
      'Description': 'Uber Bills 26 / 03 - 07 / 04',
      'Amount': '13586',
      'RunningBalance': '201179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-07-21 12:00:00 AM',
      'CategoryId': 92
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2c',
      'Description': 'VW Finance 26 / 03 - 07 / 04',
      'Amount': '35086',
      'RunningBalance': '3014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-07-12 12:00:00 AM',
      'CategoryId': 93
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'Car Insurance 26 / 03 - 07 / 04',
      'Amount': '35836',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-06-18 12:00:00 AM',
      'CategoryId': 94
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '23586',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-06-03 12:00:00 AM',
      'CategoryId': 95
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '39996',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-05-26 12:00:00 AM',
      'CategoryId': 96
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '783637',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-05-12 12:00:00 AM',
      'CategoryId': 97
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '39876',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2016-04-08 12:00:00 AM',
      'CategoryId': 98
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '358600',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-04-01 12:00:00 AM',
      'CategoryId': 99
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '286',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-03-08 12:00:00 AM',
      'CategoryId': 99
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '30086',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-03-10 12:00:00 AM',
      'CategoryId': 99
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '3986',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-02-21 12:00:00 AM',
      'CategoryId': 99
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '437686',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-02-08 12:00:00 AM',
      'CategoryId': 99
    }

    ]
  }

  ])
}

function accountMetadata (req, res, next) {
  res.json([ {
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
    'Transactions': [ {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INTEREST 26 / 03 - 07 / 04',
      'Amount': '3586',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2016 - 04 - 08 12:00:00 AM',
      'CategoryId': 99
    } ],
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
  } ])
}

function accountsTransactions (req, res, next) {
  res.json([ [ {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
    'Description': 'Travel 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2016-04-08 12:00:00 AM',
    'CategoryId': 100,
    ChildTransactions: [ {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INDIGO 26 / 01 - 07 / 17',
      'Amount': '3586',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-07-01 12:00:00 AM',
      'CategoryId': 91
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2d',
      'Description': 'Uber Bills 26 / 03 - 07 / 04',
      'Amount': '3586',
      'RunningBalance': '20117,9',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-07-06 12:00:00 AM',
      'CategoryId': 92
    }

    ]
  }, {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2c',
    'Description': 'VW Finance 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '301417,9',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-12 12:00:00 AM',
    'CategoryId': 93
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
    'Description': 'Car Insurance 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-18 12:00:00 AM',
    'CategoryId': 94
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2k',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-20 12:00:00 AM',
    'CategoryId': 95
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2t',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-26 12:00:00 AM',
    'CategoryId': 96
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2y',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-30 12:00:00 AM',
    'CategoryId': 97
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2v',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2016 - 04 - 08 12:00:00 AM',
    'CategoryId': 98
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2q',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2016 - 04 - 08 12:00:00 AM',
    'CategoryId': 99
  }

  ] ])
}

function accountsTransactionsForPost (req, res, next) {
  res.json([ [ {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
    'Description': 'Travel 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2016-04-08 12:00:00 AM',
    'CategoryId': 100,
    ChildTransactions: [ {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
      'Description': 'INDIGO 26 / 01 - 07 / 17',
      'Amount': '3586',
      'RunningBalance': '2014179',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-07-01 12:00:00 AM',
      'CategoryId': 91
    },

    {
      'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2d',
      'Description': 'Uber Bills 26 / 03 - 07 / 04',
      'Amount': '3586',
      'RunningBalance': '20117,9',
      'Debit': false,
      'Account': '1025310667',
      'PostedDate': '2017-07-06 12:00:00 AM',
      'CategoryId': 92
    }

    ]
  }, {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2c',
    'Description': 'VW Finance 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '301417,9',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-12 12:00:00 AM',
    'CategoryId': 93
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2e',
    'Description': 'Car Insurance 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-18 12:00:00 AM',
    'CategoryId': 94
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2k',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-20 12:00:00 AM',
    'CategoryId': 95
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2t',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-26 12:00:00 AM',
    'CategoryId': 96
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2y',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2017-07-30 12:00:00 AM',
    'CategoryId': 97
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2v',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2016 - 04 - 08 12:00:00 AM',
    'CategoryId': 98
  },

  {
    'TransactionId': '058fd186-8f68-4f25-9ba8-b6dfd695fe2q',
    'Description': 'INTEREST 26 / 03 - 07 / 04',
    'Amount': '3586',
    'RunningBalance': '2014179',
    'Debit': false,
    'Account': '1025310667',
    'PostedDate': '2016 - 04 - 08 12:00:00 AM',
    'CategoryId': 99
  }

  ] ])
}

function accountNumberTransactions (req, res, next) {
  res.json([ {
    'TransactionId': 'fc986cad-0b73-4ccb-9575-a4a3c1fc4de9',
    'Description': 'EARLY DEBIT ORDER',
    'Amount': -1170.22,
    'RunningBalance': 42250636909.72,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-28 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': '67d3e87b-8e49-4da8-98c9-cb45e55d58ff',
    'Description': 'Prepaid Airtime',
    'Amount': -2.5,
    'RunningBalance': 42250638079.94,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': '8594ff0e-209d-40b4-bc77-84a667b3b0f1',
    'Description': 'Nedbank Send-iMali9910556626',
    'Amount': -6,
    'RunningBalance': 42250638088.44,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': '757a6e32-2a56-44ae-aea4-b0901d27eb6c',
    'Description': 'Nedbank Send-iMali9910556626',
    'Amount': -6,
    'RunningBalance': 42250638082.44,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': '05c46ecf-7d57-4f6c-8fd8-59cfa50bd3f3',
    'Description': 'NETBANK PAYMENT FEE',
    'Amount': -8,
    'RunningBalance': 42250638665.14,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': '47966959-40a7-4acf-b70b-48294cf376f3',
    'Description': 'NETBANK PAYMENT FEE',
    'Amount': -8,
    'RunningBalance': 42250638601.54,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': '23b94c4e-1ac0-4955-93c4-523a07d9e9d0',
    'Description': 'NETBANK PAYMENT FEE',
    'Amount': -8,
    'RunningBalance': 42250638583.54,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': 'af55f897-d2f9-4175-aa44-f361d191eb6f',
    'Description': 'Bene Acc with ext bank',
    'Amount': -10,
    'RunningBalance': 42250638591.54,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': '4a4f0841-d6a1-4a1a-aeb4-ce088fadee85',
    'Description': 'SELF SERVICE BANKING FEE',
    'Amount': -12,
    'RunningBalance': 42250638094.44,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  }, {
    'TransactionId': '7de1f448-45cd-4f67-80bc-9a9900c50ff0',
    'Description': 'MAINTENANCE FEE',
    'Amount': -17,
    'RunningBalance': 42250638106.44,
    'Debit': true,
    'Account': '1001004345',
    'PostedDate': '2017-09-27 02:00:00 AM',
    'CategoryId': 0,
    'ChildTransactions': [],
    'OriginalCategoryId': 0
  } ])
}

function accountsLatest (req, res, next) {
  res.json([ {
    'ContainerName': 'Bank',
    'Accounts': [ {
      'AccountName': 'STOP CHEQU',
      'Balance': 580303387,
      'AvailableBalance': 580287819.94,
      'AccountNumber': '1009000675',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '1',
      'InterestRate': 0
    }, {
      'AccountName': 'CURRENT AC',
      'Balance': -8893073683.6,
      'AvailableBalance': -8893071683.6,
      'AccountNumber': '1009006967',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '2',
      'InterestRate': 0
    }, {
      'AccountName': 'Inv CA2',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '1009017640',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '3',
      'InterestRate': 0
    }, {
      'AccountName': 'CURRENT AC',
      'Balance': -76.68,
      'AvailableBalance': -76.68,
      'AccountNumber': '1009023314',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '4',
      'InterestRate': 0
    }, {
      'AccountName': 'NOT_DECEASED',
      'Balance': 1724339.24,
      'AvailableBalance': 1714339.24,
      'AccountNumber': '1009035940',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '5',
      'InterestRate': 0
    }, {
      'AccountName': 'CA1',
      'Balance': 7095416.13,
      'AvailableBalance': 7126716.13,
      'AccountNumber': '1009087231',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '6',
      'InterestRate': 0
    }, {
      'AccountName': 'PART CA',
      'Balance': 1397454.31,
      'AvailableBalance': 1399354.31,
      'AccountNumber': '1010039288',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '7',
      'InterestRate': 0
    }, {
      'AccountName': 'CA2',
      'Balance': 11675.84,
      'AvailableBalance': 11675.84,
      'AccountNumber': '1010039296',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '8',
      'InterestRate': 0
    }, {
      'AccountName': 'COURT CA',
      'Balance': 2502981.24,
      'AvailableBalance': 2502981.24,
      'AccountNumber': '1010039318',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '9',
      'InterestRate': 0
    }, {
      'AccountName': 'CHG/SHIP',
      'Balance': 1493474.25,
      'AvailableBalance': 1502174.25,
      'AccountNumber': '1010039342',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '10',
      'InterestRate': 0
    }, {
      'AccountName': 'Inv CA',
      'Balance': 15008300.38,
      'AvailableBalance': 15008302.38,
      'AccountNumber': '1010041290',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '11',
      'InterestRate': 0
    }, {
      'AccountName': 'CA4',
      'Balance': 1380553.16,
      'AvailableBalance': 1390053.16,
      'AccountNumber': '1010041312',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '12',
      'InterestRate': 0
    }, {
      'AccountName': 'CURRENT1',
      'Balance': 99906021.02,
      'AvailableBalance': 99906021.02,
      'AccountNumber': '1012108910',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '13',
      'InterestRate': 0
    }, {
      'AccountName': 'NO ENOTE',
      'Balance': 1161875.1,
      'AvailableBalance': 1161875.1,
      'AccountNumber': '1012345998',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '14',
      'InterestRate': 0
    }, {
      'AccountName': '01 DECEASE',
      'Balance': 1741067.45,
      'AvailableBalance': 1759867.45,
      'AccountNumber': '1031278699',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '15',
      'InterestRate': 0
    }, {
      'AccountName': '02 PAST DI',
      'Balance': 136044.88,
      'AvailableBalance': 165444.88,
      'AccountNumber': '1031279210',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '16',
      'InterestRate': 0
    }, {
      'AccountName': '10 DORMANT',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '1031279547',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '17',
      'InterestRate': 0
    }, {
      'AccountName': '03 COURT O',
      'Balance': 3765239.05,
      'AvailableBalance': 3794639.05,
      'AccountNumber': '1031279687',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '18',
      'InterestRate': 0
    }, {
      'AccountName': '04 BAD DEB',
      'Balance': 1482208.44,
      'AvailableBalance': 1486208.44,
      'AccountNumber': '1031281096',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '19',
      'InterestRate': 0
    }, {
      'AccountName': '05 OPS SUS',
      'Balance': 1901953.79,
      'AvailableBalance': 1911753.79,
      'AccountNumber': '1031281193',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '20',
      'InterestRate': 0
    }, {
      'AccountName': '08 REFER A',
      'Balance': 1248048.37,
      'AvailableBalance': 1269748.37,
      'AccountNumber': '1032007958',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '21',
      'InterestRate': 0
    }, {
      'AccountName': '07 BAD DEB',
      'Balance': 2447932.77,
      'AvailableBalance': 2497932.77,
      'AccountNumber': '1032007974',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '22',
      'InterestRate': 0
    }, {
      'AccountName': '09 INACTIV',
      'Balance': 864135.23,
      'AvailableBalance': 869535.23,
      'AccountNumber': '1032008032',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '23',
      'InterestRate': 0
    }, {
      'AccountName': '11 ACC TRA',
      'Balance': 2023876.83,
      'AvailableBalance': 2023876.83,
      'AccountNumber': '1032008059',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '24',
      'InterestRate': 0
    }, {
      'AccountName': 'Savings Account',
      'Balance': 1303828.72,
      'AvailableBalance': 1303808.72,
      'AccountNumber': '1061400077',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '25',
      'InterestRate': 0
    }, {
      'AccountName': 'CHEQUE',
      'Balance': 1166901.89,
      'AvailableBalance': 1166901.89,
      'AccountNumber': '1061802744',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '26',
      'InterestRate': 0
    }, {
      'AccountName': 'CA3',
      'Balance': 1598391.28,
      'AvailableBalance': 1598391.28,
      'AccountNumber': '1064803806',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '27',
      'InterestRate': 0
    }, {
      'AccountName': '06 CLOSED',
      'Balance': 1184684.11,
      'AvailableBalance': 1184684.11,
      'AccountNumber': '1102370320',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '28',
      'InterestRate': 0
    }, {
      'AccountName': 'WEALTH',
      'Balance': 1380927.77,
      'AvailableBalance': 1380927.77,
      'AccountNumber': '1322063729',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '29',
      'InterestRate': 0
    }, {
      'AccountName': 'N5000',
      'Balance': 1302804.79,
      'AvailableBalance': 1302804.79,
      'AccountNumber': '1344005969',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '30',
      'InterestRate': 0
    }, {
      'AccountName': '12 ACC CAL',
      'Balance': 1694641.12,
      'AvailableBalance': 1737241.12,
      'AccountNumber': '1621060993',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '31',
      'InterestRate': 0
    }, {
      'AccountName': '13',
      'Balance': 746671.36,
      'AvailableBalance': 757571.36,
      'AccountNumber': '1621061051',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '32',
      'InterestRate': 0
    }, {
      'AccountName': 'REFER OPR',
      'Balance': 573240.79,
      'AvailableBalance': 583140.79,
      'AccountNumber': '1631024019',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '33',
      'InterestRate': 0
    }, {
      'AccountName': 'CURRENT AC',
      'Balance': 971825.33,
      'AvailableBalance': 986225.33,
      'AccountNumber': '1631024043',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '34',
      'InterestRate': 0
    }, {
      'AccountName': 'CURR',
      'Balance': 510874.48,
      'AvailableBalance': 510874.48,
      'AccountNumber': '1702992144',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '35',
      'InterestRate': 0
    }, {
      'AccountName': 'CREDIT CRD',
      'Balance': 1458329.55,
      'AvailableBalance': 1463725.55,
      'AccountNumber': '1933198443',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '36',
      'InterestRate': 0
    }, {
      'AccountName': 'EVERYDAY',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '1970594527',
      'AccountType': 'CA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '37',
      'InterestRate': 0
    }, {
      'AccountName': 'SAVINGS1',
      'Balance': 1468095.81,
      'AvailableBalance': 1468065.81,
      'AccountNumber': '2010155092',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '38',
      'InterestRate': 0
    }, {
      'AccountName': 'NO ENOTE',
      'Balance': 372123.26,
      'AvailableBalance': 372093.26,
      'AccountNumber': '2010307666',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '39',
      'InterestRate': 0
    }, {
      'AccountName': 'Current Account',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '2028244585',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '40',
      'InterestRate': 0
    }, {
      'AccountName': '02 PAST DI',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '2028247088',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '41',
      'InterestRate': 0
    }, {
      'AccountName': '03 CO ORDE',
      'Balance': 345536.07,
      'AvailableBalance': 345506.07,
      'AccountNumber': '2028247363',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '42',
      'InterestRate': 0
    }, {
      'AccountName': 'CHGP/SHIP',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '2028247495',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '43',
      'InterestRate': 0
    }, {
      'AccountName': 'Investment',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '2028248181',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '44',
      'InterestRate': 0
    }, {
      'AccountName': '08 REFER A',
      'Balance': -678.84,
      'AvailableBalance': 0,
      'AccountNumber': '2028248289',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '45',
      'InterestRate': 0
    }, {
      'AccountName': 'Credit crd 2',
      'Balance': 250797.29,
      'AvailableBalance': 250767.29,
      'AccountNumber': '2029004448',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '46',
      'InterestRate': 0
    }, {
      'AccountName': '06 CLOSED',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '2029004456',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '47',
      'InterestRate': 0
    }, {
      'AccountName': 'TRANSACT',
      'Balance': 732228.62,
      'AvailableBalance': 732198.62,
      'AccountNumber': '2144003548',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '48',
      'InterestRate': 0
    }, {
      'AccountName': 'CREDIT CRD',
      'Balance': 142596.9,
      'AvailableBalance': 142566.9,
      'AccountNumber': '2517005974',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '49',
      'InterestRate': 0
    }, {
      'AccountName': 'S DECEASED',
      'Balance': 117821.73,
      'AvailableBalance': 117791.73,
      'AccountNumber': '2522064487',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '50',
      'InterestRate': 0
    }, {
      'AccountName': 'SAV DEP',
      'Balance': 1044630.72,
      'AvailableBalance': 1044600.72,
      'AccountNumber': '2607148804',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '51',
      'InterestRate': 0
    }, {
      'AccountName': 'Inv SA',
      'Balance': 1027812.73,
      'AvailableBalance': 1027782.73,
      'AccountNumber': '2698133198',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '52',
      'InterestRate': 0
    }, {
      'AccountName': 'COURT SA',
      'Balance': -3154.25,
      'AvailableBalance': 0,
      'AccountNumber': '2698133201',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '53',
      'InterestRate': 0
    }, {
      'AccountName': 'chgP/SHIP SA',
      'Balance': 8852.01,
      'AvailableBalance': 8822.01,
      'AccountNumber': '2698133228',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '54',
      'InterestRate': 0
    }, {
      'AccountName': 'chgP/SHIP SA',
      'Balance': 42001.97,
      'AvailableBalance': 41971.97,
      'AccountNumber': '2698133236',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '55',
      'InterestRate': 0
    }, {
      'AccountName': 'S REF OPS',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '2702000371',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '56',
      'InterestRate': 0
    }, {
      'AccountName': 'chgP/SHIP SA',
      'Balance': 101295.98,
      'AvailableBalance': 101265.98,
      'AccountNumber': '2908643278',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '57',
      'InterestRate': 0
    }, {
      'AccountName': 'SAVINGS AC',
      'Balance': 96634.23,
      'AvailableBalance': 96604.23,
      'AccountNumber': '2955003468',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '58',
      'InterestRate': 0
    }, {
      'AccountName': 'Savings2',
      'Balance': 9009.19,
      'AvailableBalance': 8979.19,
      'AccountNumber': '2955006092',
      'AccountType': 'SA',
      'AccountIcon': 'glyphicon-account_current',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '59',
      'InterestRate': 0
    } ],
    'ContainerIcon': 'glyphicon-account_current',
    'Assets': 747248542.18,
    'Liabilities': 8893077593.37
  }, {
    'ContainerName': 'Card',
    'Accounts': [ {
      'AccountName': 'AMEX CRD2',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '3768000010206783',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '60',
      'InterestRate': 0
    }, {
      'AccountName': 'AMEX',
      'Balance': 17969.4,
      'AvailableBalance': 37969.4,
      'AccountNumber': '377090000407185',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '61',
      'InterestRate': 0
    }, {
      'AccountName': 'AMEX',
      'Balance': 285160.12,
      'AvailableBalance': 365160.12,
      'AccountNumber': '377095200109770',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '62',
      'InterestRate': 0
    }, {
      'AccountName': 'AMEX1',
      'Balance': 511527.39,
      'AvailableBalance': 523527.39,
      'AccountNumber': '377095200109879',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '63',
      'InterestRate': 0
    }, {
      'AccountName': 'AMEX2',
      'Balance': 613680.66,
      'AvailableBalance': 663680.66,
      'AccountNumber': '377095500236240',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '64',
      'InterestRate': 0
    }, {
      'AccountName': 'VIS C1',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '4728685000019241',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '65',
      'InterestRate': 0
    }, {
      'AccountName': 'VISA',
      'Balance': 46004.29,
      'AvailableBalance': 196004.29,
      'AccountNumber': '4923030000050784',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '66',
      'InterestRate': 0
    }, {
      'AccountName': 'VISA',
      'Balance': 136095.39,
      'AvailableBalance': 0,
      'AccountNumber': '4923123000237053',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '67',
      'InterestRate': 0
    }, {
      'AccountName': 'MASTER',
      'Balance': 123756.5,
      'AvailableBalance': 136756.5,
      'AccountNumber': '5412830000253295',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '68',
      'InterestRate': 0
    }, {
      'AccountName': 'CARD',
      'Balance': 60058174.36,
      'AvailableBalance': 60098174.36,
      'AccountNumber': '5412830000570821',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '69',
      'InterestRate': 0
    }, {
      'AccountName': 'C0D',
      'Balance': 12416.23,
      'AvailableBalance': 14566.23,
      'AccountNumber': '5412830000572488',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '70',
      'InterestRate': 0
    }, {
      'AccountName': 'A0P',
      'Balance': 303586.85,
      'AvailableBalance': 315586.85,
      'AccountNumber': '5412839700755780',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '71',
      'InterestRate': 0
    }, {
      'AccountName': 'CAD',
      'Balance': -111.65,
      'AvailableBalance': 23488.35,
      'AccountNumber': '5412839700756143',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '72',
      'InterestRate': 0
    }, {
      'AccountName': 'DCD',
      'Balance': 210017.73,
      'AvailableBalance': 262017.73,
      'AccountNumber': '5412839702652290',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '73',
      'InterestRate': 0
    }, {
      'AccountName': 'FRP Status Card',
      'Balance': 46660.4,
      'AvailableBalance': 0,
      'AccountNumber': '5520390000000229',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '74',
      'InterestRate': 0
    }, {
      'AccountName': 'LSP Card',
      'Balance': 0,
      'AvailableBalance': 1000,
      'AccountNumber': '5587325000062837',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '75',
      'InterestRate': 0
    }, {
      'AccountName': 'VISA C 1',
      'Balance': 0,
      'AvailableBalance': 10000,
      'AccountNumber': '5898460759290067',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '76',
      'InterestRate': 0
    }, {
      'AccountName': 'VISA CRD3',
      'Balance': 114681.1,
      'AvailableBalance': 114831.1,
      'AccountNumber': '5898460759634397',
      'AccountType': 'CC',
      'AccountIcon': 'glyphicon-account_credit_card',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '77',
      'InterestRate': 0
    } ],
    'ContainerIcon': 'glyphicon-account_credit_card',
    'Assets': 111.65,
    'Liabilities': 62479730.42
  }, {
    'ContainerName': 'Loan',
    'Accounts': [ {
      'AccountName': 'NEDCREDIT',
      'Balance': 143723.3,
      'AvailableBalance': 143723.3,
      'AccountNumber': '1940062772',
      'AccountType': 'NC',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '78',
      'InterestRate': 0
    }, {
      'AccountName': 'ABF',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '334781800000001',
      'AccountType': 'IS',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '79',
      'InterestRate': 0
    }, {
      'AccountName': 'HOMELOAN',
      'Balance': -614126.93,
      'AvailableBalance': 0,
      'AccountNumber': '8000026000101',
      'AccountType': 'HL',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '80',
      'InterestRate': 0
    }, {
      'AccountName': 'PL1',
      'Balance': -2334.93,
      'AvailableBalance': 0,
      'AccountNumber': '8001499569801',
      'AccountType': 'HL',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '81',
      'InterestRate': 0
    }, {
      'AccountName': 'HL_1',
      'Balance': -48623.11,
      'AvailableBalance': 0,
      'AccountNumber': '8001951300101',
      'AccountType': 'HL',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '82',
      'InterestRate': 0
    }, {
      'AccountName': 'HL2',
      'Balance': 1169248.66,
      'AvailableBalance': 25124.66,
      'AccountNumber': '8002026600101',
      'AccountType': 'HL',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '83',
      'InterestRate': 0
    }, {
      'AccountName': 'PERSONAL3',
      'Balance': 26774.62,
      'AvailableBalance': 0,
      'AccountNumber': '8002036344301',
      'AccountType': 'HL',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '84',
      'InterestRate': 0
    }, {
      'AccountName': 'PERSONAL2',
      'Balance': 29301.59,
      'AvailableBalance': 0,
      'AccountNumber': '8002863864301',
      'AccountType': 'HL',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '85',
      'InterestRate': 0
    }, {
      'AccountName': 'HL no funds',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '8004036200101',
      'AccountType': 'HL',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '86',
      'InterestRate': 0
    }, {
      'AccountName': 'NOT CREDIT CRD',
      'Balance': 0,
      'AvailableBalance': 0,
      'AccountNumber': '8966267469501',
      'AccountType': 'HL',
      'AccountIcon': 'glyphicon-account_loans',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '87',
      'InterestRate': 0
    } ],
    'ContainerIcon': 'glyphicon-account_loans',
    'Assets': 665084.97,
    'Liabilities': 1369048.17
  }, {
    'ContainerName': 'Investment',
    'Accounts': [ {
      'AccountName': 'V VALLABH',
      'Balance': 1470185.46,
      'AvailableBalance': 1469185.46,
      'AccountNumber': '037955500520-0001',
      'AccountType': 'TD',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '88',
      'InterestRate': 6.75
    }, {
      'AccountName': 'DS_1',
      'Balance': 13250,
      'AvailableBalance': 13250,
      'AccountNumber': '100995-9939',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '89',
      'InterestRate': 5
    }, {
      'AccountName': 'DS_1',
      'Balance': 102999.86,
      'AvailableBalance': 102999.86,
      'AccountNumber': '100995-9951',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '90',
      'InterestRate': 6.4
    }, {
      'AccountName': 'DS3',
      'Balance': 12010.13,
      'AvailableBalance': 12010.13,
      'AccountNumber': '102897-9953',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '91',
      'InterestRate': 11.15
    }, {
      'AccountName': 'DS3',
      'Balance': 6453.62,
      'AvailableBalance': 6453.62,
      'AccountNumber': '102897-9954',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '92',
      'InterestRate': 6.64
    }, {
      'AccountName': 'DS3',
      'Balance': 150000,
      'AvailableBalance': 150000,
      'AccountNumber': '102897-9955',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '93',
      'InterestRate': 8.7
    }, {
      'AccountName': 'DS3',
      'Balance': 8000,
      'AvailableBalance': 8000,
      'AccountNumber': '102897-9956',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '94',
      'InterestRate': 10.16
    }, {
      'AccountName': 'DS3',
      'Balance': 12325.87,
      'AvailableBalance': 12325.87,
      'AccountNumber': '102897-9959',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '95',
      'InterestRate': 9.32
    }, {
      'AccountName': 'DS3',
      'Balance': 56741.75,
      'AvailableBalance': 56741.75,
      'AccountNumber': '102897-9961',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '96',
      'InterestRate': 6.8
    }, {
      'AccountName': 'DS3',
      'Balance': 15002.26,
      'AvailableBalance': 15002.26,
      'AccountNumber': '102897-9962',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '97',
      'InterestRate': 11.15
    }, {
      'AccountName': 'DS3',
      'Balance': 20000,
      'AvailableBalance': 20000,
      'AccountNumber': '102897-9964',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '98',
      'InterestRate': 9.42
    }, {
      'AccountName': 'DS3',
      'Balance': 15000,
      'AvailableBalance': 15000,
      'AccountNumber': '102897-9965',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '99',
      'InterestRate': 8.35
    }, {
      'AccountName': 'DS3',
      'Balance': 35745.12,
      'AvailableBalance': 35745.12,
      'AccountNumber': '102897-9969',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '100',
      'InterestRate': 9.32
    }, {
      'AccountName': 'DS4',
      'Balance': 30700,
      'AvailableBalance': 30700,
      'AccountNumber': '104312-9991',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '101',
      'InterestRate': 5.25
    }, {
      'AccountName': 'NEDTERM',
      'Balance': 2300,
      'AvailableBalance': 2300,
      'AccountNumber': '3360063-9993',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '102',
      'InterestRate': 3
    }, {
      'AccountName': 'NEDTERM',
      'Balance': 36160,
      'AvailableBalance': 36160,
      'AccountNumber': '3360063-9996',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '103',
      'InterestRate': 6.2
    }, {
      'AccountName': 'NEDTERM',
      'Balance': 515,
      'AvailableBalance': 515,
      'AccountNumber': '3360063-9997',
      'AccountType': 'DS',
      'AccountIcon': 'glyphicon-account_investment',
      'NewAccount': true,
      'LastUpdate': '2017-08-18 10:51:01 AM',
      'InstitutionName': 'Nedbank (South Africa)',
      'Currency': '&#x52;',
      'SiteId': '16390',
      'ItemAccountId': '104',
      'InterestRate': 5.25
    } ],
    'ContainerIcon': 'glyphicon-account_investment',
    'Assets': 1987389.07
  } ])
}

function getAtmCardLimit (req, res, next) {
  res.json({
    'Data': {
      'CamsAtmCashLimit': 1000,
      'CamsDailyAtmCash': 2000
    }
  })
}
function putAtmCardLimit (req, res, next) {
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
function getAtmLimit (req, res, next) {
  res.json({
    'MetaData': {
      'ResultCode': 'R00',
      'Message': '',
      'InvalidFieldList': null,
      'result': {
        'resultCode': 0,
        'resultMessage': 'Replace card request recieved'
      },
      'Data': 2000
    }
  })
}
function putAtmLimit (req, res, next) {
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
function getAccountDetails (req, res, next) {
  res.json({
    'ItemAccountId': '14281512',
    'AccountName': 'SA Bank',
    'AccountNickname': 'Charles',
    'CurrentBalance': 1000,
    'AvailableBalance': 900,
    'AccountNumber': '12345',
    'AccountType': 'Savings',
    'ContainerName': 'Sample text',
    'InterestRate': 1,
    'CreditLimit': 1
  })
}
