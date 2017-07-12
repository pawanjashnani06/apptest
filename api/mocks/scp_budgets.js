'use strict'

module.exports = {
  CategoryDefaults: CategoryDefaults,
  Categories: Categories,
  Budgets: Budgets,
  BudgetGroups: BudgetGroups,
  CategoryGroups: CategoryGroups

}

function CategoryDefaults (req, res, next) {
  res.json([
    [
      {
        'CategoryId': 0,
        'CategoryName': 'Travel',
        'OriginalName': 'Travel',
        'CategoryImage': 'glyphicon-category_travel',
        'CategoryColour': 'colorType-background-category_travel'
      },
      {
        'CategoryId': 1,
        'CategoryName': 'Rent',
        'OriginalName': 'Rent',
        'CategoryImage': 'glyphicon-category_rent',
        'CategoryColour': 'colorType-background-category_rent'
      },
      {
        'CategoryId': 2,
        'CategoryName': 'Groceries',
        'OriginalName': 'Groceries',
        'CategoryImage': 'glyphicon-category_groceries',
        'CategoryColour': 'colorType-background-category_groceries'
      },
      {
        'CategoryId': 3,
        'CategoryName': 'ATM and cash',
        'OriginalName': 'ATM and cash',
        'CategoryImage': 'glyphicon-category_atmandcash',
        'CategoryColour': 'colorType-background-category_atmandcash'
      },
      {
        'CategoryId': 4,
        'CategoryName': 'Healthcare',
        'OriginalName': 'Healthcare',
        'CategoryImage': 'glyphicon-category_healthcare',
        'CategoryColour': 'colorType-background-category_healthcare'
      },
      {
        'CategoryId': 5,
        'CategoryName': 'Entertainment',
        'OriginalName': 'Entertainment',
        'CategoryImage': 'glyphicon-category_entertainment',
        'CategoryColour': 'colorType-background-category_entertainment'
      },
      {
        'CategoryId': 6,
        'CategoryName': 'Electronics',
        'OriginalName': 'Electronics',
        'CategoryImage': 'glyphicon-category_electronics',
        'CategoryColour': 'colorType-background-category_electronics'
      },
      {
        'CategoryId': 7,
        'CategoryName': 'Manufacturing',
        'OriginalName': 'Manufacturing',
        'CategoryImage': 'glyphicon-category_manufacturing',
        'CategoryColour': 'colorType-background-category_manufacturing'
      },
      {
        'CategoryId': 8,
        'CategoryName': 'Banking',
        'OriginalName': 'Banking',
        'CategoryImage': 'glyphicon-category_banking',
        'CategoryColour': 'colorType-background-category_banking'
      },
      {
        'CategoryId': 9,
        'CategoryName': 'Insurance',
        'OriginalName': 'Insurance',
        'CategoryImage': 'glyphicon-category_insurance',
        'CategoryColour': 'colorType-background-category_insurance'
      },
      {
        'CategoryId': 10,
        'CategoryName': 'Car Insurance',
        'OriginalName': 'Car Insurance',
        'CategoryImage': 'glyphicon-category_carinsurance',
        'CategoryColour': 'colorType-background-category_carinsurance'
      },
      {
        'CategoryId': 11,
        'CategoryName': 'Medical',
        'OriginalName': 'Medical',
        'CategoryImage': 'glyphicon-category_medical',
        'CategoryColour': 'colorType-background-category_medical'
      },
      {
        'CategoryId': 12,
        'CategoryName': 'Uncategorized',
        'OriginalName': 'Uncategorized',
        'CategoryImage': 'glyphicon-category_uncategorized',
        'CategoryColour': 'colorType-background-category_uncategorized'
      }

    ]
  ])
}

function Categories (req, res, next) {
  res.json([
    {
      'CategoryId': 0,
      'CategoryTypeId': 0,
      'Name': 'Travel',
      'CategoryColour': 'red',
      'CategoryImage': 'string',
      'Spend': 132000,
      'User': true
    },
    {
      'CategoryId': 1,
      'CategoryTypeId': 0,
      'Name': 'Rent',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 41000,
      'User': true
    },
    {
      'CategoryId': 2,
      'CategoryTypeId': 0,
      'Name': 'Groceries',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 30000,
      'User': true
    },
    {
      'CategoryId': 3,
      'CategoryTypeId': 0,
      'Name': 'ATM and cash',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 29000,
      'User': true
    },
    {
      'CategoryId': 4,
      'CategoryTypeId': 0,
      'Name': 'Healthcare',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 18000,
      'User': true
    },
    {
      'CategoryId': 5,
      'CategoryTypeId': 0,
      'Name': 'Entertainment',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 17000,
      'User': true
    },
    {
      'CategoryId': 6,
      'CategoryTypeId': 0,
      'Name': 'Electronics',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 16000,
      'User': true
    },
    {
      'CategoryId': 7,
      'CategoryTypeId': 0,
      'Name': 'Manufacturing',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 15000,
      'User': true
    },
    {
      'CategoryId': 8,
      'CategoryTypeId': 0,
      'Name': 'Banking',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 14000,
      'User': true
    },
    {
      'CategoryId': 9,
      'CategoryTypeId': 0,
      'Name': 'Insurance',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 13000,
      'User': true
    },
    {
      'CategoryId': 10,
      'CategoryTypeId': 0,
      'Name': 'Car Insurance',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 4000,
      'User': true
    },
    {
      'CategoryId': 11,
      'CategoryTypeId': 0,
      'Name': 'Medical',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 110,
      'User': true
    },
    {
      'CategoryId': 12,
      'CategoryTypeId': 0,
      'Name': 'Uncategorized',
      'CategoryColour': 'blue',
      'CategoryImage': 'string',
      'Spend': 10,
      'User': true
    }
  ])
}

function BudgetGroups (req, res, next) {
  res.json([
    {
      'BudgetGroupId': 1,
      'BudgetGroupDescription': 'This is BudgetGroupDiscussion1',
      'BudgetGroupIconClass': 'This is BudgetGroupDiscussion2',
      'BudgetCategories': [
        1
      ]
    },
    {
      'BudgetGroupId': 2,
      'BudgetGroupDescription': 'This is BudgetGroupDiscussion2',
      'BudgetGroupIconClass': 'This is BudgetGroupDiscussion2',
      'BudgetCategories': [
        2
      ]
    },
    {
      'BudgetGroupId': 3,
      'BudgetGroupDescription': 'This is BudgetGroupDiscussion3',
      'BudgetGroupIconClass': 'This is BudgetGroupDiscussion3',
      'BudgetCategories': [
        3
      ]
    }
  ])
}

function Budgets (req, res, next) {
  res.json({
    'CycleStartDay': 1,
    'ShadowData': false,
    'IncomeBudgetItems': [
      {
        'CategoryId': 29,
        'Target': 818.23,
        'Actual': 818.23
      }
    ],
    'ExpenseBudgetItems': [
      {
        'CategoryId': 24,
        'Target': 153.33,
        'Actual': 150
      },
      {
        'CategoryId': 45,
        'Target': 11.67,
        'Actual': 12.01
      },
      {
        'CategoryId': 14,
        'Target': 457.55
      },
      {
        'CategoryId': 15,
        'Target': 141.67
      },
      {
        'CategoryId': 11,
        'Target': 88.33
      }
    ]
  })
}

function CategoryGroups (req, res, next) {
  res.json([
    [
      {
        'CategoryGroupId': '1',
        'CategoryGroupDescription': 'Travel',
        'CategoryGroupIconClass': 'This is CategoryGroupIconClass1',
        'CategoryGroupColour': 'GroupColour1',
        'GroupCategories': [
          1
        ]
      },
      {
        'CategoryGroupId': '2',
        'CategoryGroupDescription': 'Rent',
        'CategoryGroupIconClass': 'This is CategoryGroupIconClass2',
        'CategoryGroupColour': 'GroupColour2',
        'GroupCategories': [
          2
        ]
      },
      {
        'CategoryGroupId': '3',
        'CategoryGroupDescription': 'Electronics',
        'CategoryGroupIconClass': 'This is CategoryGroupIconClass3',
        'CategoryGroupColour': 'GroupColour3',
        'GroupCategories': [
          3
        ]
      }
    ]
  ])
}
