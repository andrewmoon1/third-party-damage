var m = require('mithril');
var ROW = require('./rowLocation.js');
var Parties = require('./parties.js');
//var db = require('../../server/lib/db.js');

exports.controller = function (options) {
	//need a function to handle what is being passed in from form
	var ctrl = this;
  ctrl.result = {};
  
    ctrl.comp = function() {
      m.route('/');
    }
    ctrl.row = function() {
      m.route('/row');
    }
    ctrl.parties = function() {
      m.route('/parties');
    }

}

exports.view = function (ctrl, options) {
  return m('table', [ 
          m('tr', [
            m('td', [
              m('button[name=Company]', {onclick: function() {ctrl.comp()}}, "Company"),
            ]),
            m('td', [
              m('button[name=Right-Of-Way]', {onclick:function() {ctrl.row()}}, "Right-Of-Way"),
            ]),
            m('td', [
              m('button', {onclick:function() {ctrl.parties()}}, "Parties Involved"),
            ]),
          ]),
        ])
}
