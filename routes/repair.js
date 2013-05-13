var models = require('../models')
var Repair = models.Repair;
var moment = require('moment')

exports.form = function (req, res) {
  res.render('form', {title: '維修表單'});
}

exports.create = function (req, res) {
  var repair = new Repair({
    customer: req.body.customer
    , cellphone: req.body.cellphone
    , reason: req.body.reason
    , date: req.body.date
  });
  repair.save(function(err, doc){
    if(err){
      console.log('error happened');
    }else{
      res.render('report', {title: '報告', customerData: req.body})
    }
  });
}

exports.list = function (req, res) {
  Repair.find({}, function(err, repairs){
    res.render('repair_list', {title: "維修列表", "repairs": repairs})
  });
}

exports.order = function (req, res) {
  var date = [];
  Repair.findOne({_id: req.params.id}, function(err, repair){
    repair.formatDate = moment(repair.date).format('YYYY-MM-DD')
    res.render('repair_order', {title: "維修工單", "repair": repair})
  });
};
