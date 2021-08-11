const wardModel = require('../models/wardModel');


module.exports = {

  UserPaymentView: function (req, res) {
    adminModel.productlist(function (data) {
      res.send(data);
    });
  },

  detail: function (req, res) {
    var id = req.param("id");
    productModel.findById(id, function (data) {
      res.send({
        products: data,
      });
    });
  },
}