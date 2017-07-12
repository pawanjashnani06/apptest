'use strict'

module.exports = {
  // updateUser: updateUser,
  retrieveUserDetails: retrieveUserDetails,
  addUser: addUser
}

function addUser (req, res, next) {
  res.json({response: 'addUser'})
}

// function updateUser (req, res, next) {
//   res.json({response: 'updateUser'})
// }

function retrieveUserDetails (req, res, next) {
  res.json({response: 'retrieveUserDetails'})
}
