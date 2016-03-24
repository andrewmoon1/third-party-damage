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
      m.route('/all')
    }
}

exports.view = function (ctrl, options) {
  return m('table', [
           m('tr', [
            m('tr', [
             m('h4', "One-Call Notification"),
             m('h5', "Did the excavator notify the One-Call notification center?"),
             ]),
             m('tr', [
               m("td", [
                 m("input[type=checkbox][name=yes]", {onchange: function(e) {return ctrl.checked(e)}}), "Yes",
                 m("input[type=checkbox][name=no]", {onchange: function(e) {return ctrl.checked(e)}}), "No"
                  ]),
             ]),
             m('tr', [
                m('input', {onchange: function(e) {window.App.oneCallNumber = e.target.value}}), " One-Call Number"
              ]),
             m('tr', [
                m('input', {onchange: function(e) {window.App.oneCallDateCalled = e.target.value}}), " Date Called  ",
                m('input', {onchange: function(e) {window.App.oneCallDateBegin = e.target.value}}), " Date to Begin  ",
              ]),

          ]),
           m('button', {onclick: function() {ctrl.submit()}}, "Submit"),
        ])
          
}
