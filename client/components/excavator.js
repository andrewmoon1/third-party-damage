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
    m.route('/worktype');
  }
  ctrl.newRow = function(item) {
    return m("td", [
               m("input[type=checkbox][name=" +item+ "]", {onchange: function(e) {return ctrl.checked(e)}}), item
                ]) 
  } 

  ctrl.row = ["Contractor", "Developer", "Home Owner", "Occupant", "Self", "Utility", "Not Applicable",
              "County", "Farmer", "Municipality", "Railroad", "State", "St. DOT"]
  ctrl.equip = ["Auger", "Directional Drill", "Farm Equipment", "Milling Equipment", "Track Hoe",
              "Vacuum Equipment", "Backhoe", "Drilling", "Grader/Scraper", "Motor Vehicle", "Trencher", "Not Applicable",
              "Boring", "Explosives", "Hand Tools", "Probing Device", "Trimming"]
}

exports.view = function (ctrl, options) {
  return  m('table', [
     m("tr", [
      m('h4', "Excavator Type"),
      m('h5', "Use spacebar to check a box, tab to change between boxes."),
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
            ctrl.row.slice(10, ctrl.row.length).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            m('input', {onchange: function(e) {window.App.otherExcavatorType = e.target.value}}), ' Other'
            ]),
        ]),
      ]),
     m("tr", [
      m('h4', "Excavation Equipment Type"),
      m('h5', "Use spacebar to check a box, tab to change between boxes."),
        m("form", [
          m("tr", [
            ctrl.equip.slice(0,6).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.equip.slice(6,12).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            ctrl.equip.slice(12, ctrl.equip.length).map(function(item) {
             return ctrl.newRow(item)
            })
          ]),
          m("tr", [
            m('input', {onchange: function(e) {window.App.otherEquipType = e.target.value}}), ' Other'
            ]),
        ]),
      ]),
     m('button', {onclick: function() {ctrl.submit()}}, "Submit"),
    ])
}
