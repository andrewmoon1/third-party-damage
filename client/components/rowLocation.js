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
    m.route('/row')
  }
  ctrl.newRow = function(item) {
    return m("td", [
               m("input[type=checkbox][name=" +item+ "]", {onchange: function(e) {return ctrl.checked(e)}}), item
                ]) 
  } 

  ctrl.row = ["City Street", "Federal Land", "Plant", "Private Land Owner", "Company ROW",
  "Commercial or Residence", "Interstate Highway", "Power/Transmission line (Elec)", "Railroad", "Other ROW",
  "County Road", "Pipeline", "Private Business", "State Highway", "Dedicated Public Utility Easement",
  "Private Easment", "Storage", "Data Not Collected"]
}

exports.view = function (ctrl, options) {
  return  m('table', [
     m("tr", [
      m('h5', "Right-Of-Way/Damage Location(Where Event Occurred) (Select all that apply)"),
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
            ctrl.row.slice(10,15).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.row.slice(15,ctrl.row.length).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
         ]),
        ]),
      m('tr', [
        m('h5', "Parties Involved"),
        m('tr', [
          m('input'), "Person To Be Billed",
          m('tr', [
            m('input[type=checkbox][name=item]'), "Same As Above"
            ]),
          ]),

        ])
    ])
}
