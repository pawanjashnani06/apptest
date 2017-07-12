'use strict'

module.exports = {
  monthlyExpenses: monthlyExpenses,
  categoryExpenses: categoryExpenses
}

function monthlyExpenses (req, res, next) {
  res.json([
    [
      {
        'DateStart': '01.07.2017',
        'DateEnd': '31.07.2017',
        'CategorySpendArray': [
          {
            'CategoryName': 'Travel',
            'CategoryId': 0,
            'Spend': 132000
          },

          {
            'CategoryName': 'Rent',
            'CategoryId': 1,
            'Spend': 41000
          },

          {
            'CategoryName': 'Groceries',
            'CategoryId': 2,
            'Spend': 30000
          },

          {
            'CategoryName': 'ATM and cash',
            'CategoryId': 3,
            'Spend': 29000
          },

          {
            'CategoryName': 'Healthcare',
            'CategoryId': 4,
            'Spend': 18000
          },

          {
            'CategoryName': 'Entertainment',
            'CategoryId': 5,
            'Spend': 17000
          },

          {
            'CategoryName': 'Electronics',
            'CategoryId': 6,
            'Spend': 16000

          },

          {
            'CategoryName': 'Manufacturing',
            'CategoryId': 7,
            'Spend': 15000

          },

          {
            'CategoryName': 'Banking',
            'CategoryId': 8,
            'Spend': 14000

          },

          {
            'CategoryName': 'Insurance',
            'CategoryId': 9,
            'Spend': 13000

          },

          {
            'CategoryName': 'Car Insurance',
            'CategoryId': 10,
            'Spend': 4000

          },

          {
            'CategoryName': 'Medical',
            'CategoryId': 11,
            'Spend': 110

          },

          {
            'CategoryName': 'Uncategorized',
            'CategoryId': 12,
            'Spend': 10

          }
        ]
      }
    ]
  ])
}

function categoryExpenses (req, res, next) {
  res.json([
    [
      {
        'CategoryName': 'Travel',
        'CategoryId': 0,
        'Spend': 132000
      },

      {
        'CategoryName': 'Rent',
        'CategoryId': 1,
        'Spend': 41000
      },

      {
        'CategoryName': 'Groceries',
        'CategoryId': 2,
        'Spend': 30000
      },

      {
        'CategoryName': 'ATM and cash',
        'CategoryId': 3,
        'Spend': 29000
      },

      {
        'CategoryName': 'Healthcare',
        'CategoryId': 4,
        'Spend': 18000
      },

      {
        'CategoryName': 'Entertainment',
        'CategoryId': 5,
        'Spend': 17000
      },

      {
        'CategoryName': 'Electronics',
        'CategoryId': 6,
        'Spend': 16000

      },

      {
        'CategoryName': 'Manufacturing',
        'CategoryId': 7,
        'Spend': 15000

      },

      {
        'CategoryName': 'Banking',
        'CategoryId': 8,
        'Spend': 14000

      },

      {
        'CategoryName': 'Insurance',
        'CategoryId': 9,
        'Spend': 13000

      },

      {
        'CategoryName': 'Car Insurance',
        'CategoryId': 10,
        'Spend': 4000

      },

      {
        'CategoryName': 'Medical',
        'CategoryId': 11,
        'Spend': 110

      },

      {
        'CategoryName': 'Uncategorized',
        'CategoryId': 12,
        'Spend': 10

      }
    ]
  ])
}
