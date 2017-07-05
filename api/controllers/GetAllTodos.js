'use strict';

module.exports = {
  GetAllTodos : GetAllTodos
}

function GetAllTodos(req, res, next) {
  res.json({
      message: "Get some milk production"
     })
}
