var m = require('mithril');
var ROW = require('./rowLocation.js');
var App = require('../app.js');
//var db = require('../../server/lib/db.js');

exports.controller = function (options) {
	//need a function to handle what is being passed in from form
	var ctrl = this;

  ctrl.checked = function(e) {
    if(e.target.checked === true) {
    var key = e.target.name;
    window.App[e.target.name] = e.target.checked;
    //console.log(window.App)
  }
    }
    ctrl.submit = function() {
      m.route('/row')
    }
}

exports.view = function (ctrl, options) {
  return   m('form', [
            m('h4', "Information is saved as soon as it is entered"),
           m('table', [
             m("td", [
              m('input', {onchange: function(e) {window.App.company = e.target.value;}}),
               ' Company'
             ]),
             m("tr", [
             m('input', {onchange: function(e) {window.App.cc = e.target.value;}}), ' Cost Center',
             ]),
             m("td", [
               m('input[type=checkbox][name=Bill]', {onchange: function(e) {return ctrl.checked(e)}}), 'Bill',
               m('input[type=checkbox][name=No_Bill]', {onchange: function(e) {return ctrl.checked(e)}}), 'No Bill',
               m('input', {onchange: function(e) {window.App.reason = e.target.value}}), ' Reason'
             ]),
             m('tr', [
               m('button', {onclick: function() {ctrl.submit()}}, "Submit"),
             ]),
           ]),
           ])
}
