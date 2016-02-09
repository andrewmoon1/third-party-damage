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
  return m('table', [
           m('tr', [
             m('h4', "Parties Involved"),
             m('tr', [
               m('input', {onchange: function(e) {window.App.party = e.target.value}}), " Company",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.operator = e.target.value}}), " Operator",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyAddress = e.target.value}}), " Address",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.ownerName = e.target.value}}), " Owner",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyDayPhone = e.target.value}}), " Day Phone",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyCellPhone = e.target.value}}), " Cell Phone",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyCity = e.target.value}}), " City",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyState = e.target.value}}), " State",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.operatorZipCode = e.target.value}}), " Zip Code",
              ]),
             m('tr', [
               m('input[type=checkbox][name=taxExempt]', {onchange: function(e) {return ctrl.checked(e)}}), ' Tax Exempt',
             ]),
          ]),
           m('tr', [
               m('h4', "Parties To Be Billed"),
             m('tr', [
               m('input[type=checkbox][name=item]', {onchange: function(e) {return ctrl.checked(e)}}), " Same As Above"
             ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyBilled = e.target.value}}), " Company/Person To Be Billed",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyInsurance = e.target.value}}), " Insurance Agent/Carrier",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyBillAddress = e.target.value}}), " Billing Address",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyBillCity = e.target.value}}), " City",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyBillState = e.target.value}}), " State",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyBillZip = e.target.value}}), " Zip Code",
              ]),
             m('tr', [
               m('input', {onchange: function(e) {window.App.partyBillPhone = e.target.value}}), " Phone Number",
              ]),

          ]),
           m('button', {onclick: function() {ctrl.submit()}}, "Submit"),
        ])
          
}
