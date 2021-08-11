var db = require('../database');

module.exports = {
   


    loginUser: function (email,password,callback) {
        var sql = 'SELECT * FROM users WHERE email = ?  AND Password=? ';
        db.query(sql,[email,password], function (err, data) {
          if (err) throw err;
          return callback(data);
        });
      },

      productById: function (id, callback) {
        var sql = `SELECT * FROM products WHERE id='${id}' `;
        db.query(sql, function (err, data) {
    
          if (err) throw err;
          return callback(data);
        });
      },

      
  productlist: function (callback) {
    var sql = 'SELECT * FROM products ORDER BY id DESC ';
    db.query(sql, function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
}