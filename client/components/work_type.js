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
    m.route('/onecall')
  }
  ctrl.newRow = function(item) {
    return m("td", [
               m("input[type=checkbox][name=" +item+ "]", {onchange: function(e) {return ctrl.checked(e)}}), item
                ]) 
  } 

  ctrl.row = ["Agriculture", "Electric", "Milling Activity", "Site Development", "Waterway Improvements",
              "Blading/Lot Grading", "Engineering/Surveying", "Motor Vehicle", "Steam", "Not Collected/Applicable",
              "Building Construction", "Fencing", "Petroleum Pipeline", "Storm Drain/Culvert", "Unknown",
              "Building Demolition", "Gas", "Pole/Post", "Street Light", "Cable Television", "General Homeowner Work",
              "Public Transit Authority", "Telecom", "Curb/Sidewalk", "Irrigation/Sprinkler", "Railroad Maintainence",
              "Traffic Sign", "Drainage", "Landscaping", "Road Work", "Traffic Signal", "Driveway", "Lawn Mowing", 
              "Sanitary Sewer", "Water"]

  
}

exports.view = function (ctrl, options) {
  return  m('table', [
     m("tr", [
      m('h4', "Work Performed Type"),
      m('h5', "Use spacebar to check a box, tab to change between boxes."),
        m("form", [
          m("tr", [
            ctrl.row.slice(0,6).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.row.slice(6,12).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.row.slice(12,18).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.row.slice(18,24).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.row.slice(24,30).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.row.slice(30, ctrl.row.length).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            m('input', {onchange: function(e) {window.App.otherWorkType = e.target.value}}), ' Other'
            ]),
          m("h5", "Pipeline Encroachment"),
          m("tr", [
            m('input[type=checkbox][name=compEncroachment]', {onchange: function(e) {return ctrl.checked(e)}}), ' Company'
            ]),
          m("tr", [
            m('input', {onchange: function(e) {window.App.otherEncroachment = e.target.value}}), ' Other'
            ]),
        ]),
      ]),
     
     m('button', {onclick: function() {ctrl.submit()}}, "Submit"),
    ])
}
