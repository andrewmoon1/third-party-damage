var m = require('mithril');
var App = require('../app.js');
//var db = require('../../server/lib/db.js');

exports.controller = function (options) {
	//need a function to handle what is being passed in from form
	var ctrl = this;
  //window.App = {};

	ctrl.checked = function(e) {
    if(e.target.checked === true) {
    var key = e.target.name;
    window.App[e.target.name] = e.target.checked;
    //console.log(window.App)
    }
  }
  ctrl.submit = function() {
    m.route('/excavator')
  }
  ctrl.newRow = function(item) {
    return m("td", [
               m("input[type=checkbox][name=" +item+ "]", {onchange: function(e) {return ctrl.checked(e)}}), item
                ]) 
  } 

  ctrl.row = ["Distribution Main", "Gathering", "Meter/Meter Setting", "NGL Plant", "Service Line", 
              "Gas Transmission", "Interstate", "NGL Distribution", "NGL Transmission", "Storage"]
}

exports.view = function (ctrl, options) {
  return  m('table', [
     m("tr", [
      m('h5', "Affected Facility Type"),
      m('h6', "Use spacebar to check a box, tab to change between boxes."),
        m("form", [
          m("tr", [
            ctrl.row.slice(0,5).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.row.slice(5,10).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            m('input', {onchange: function(e) {window.App.otherFacility = e.target.value}}), ' Other'
            ]),
         ]),
        ]),
     m('button', {onclick: function() {ctrl.submit()}}, "Submit"),
    ])
}
