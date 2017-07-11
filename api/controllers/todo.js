'use strict'

module.exports = {
  todo: todo
}

function todo (req, res, next) {
  res.json([{
    todo: 'Get some milk production'
  }])
}
