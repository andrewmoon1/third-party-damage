var m = require('mithril');
var RowLocation = require('./components/rowLocation');
var Company = require('./components/company');
var Header = require('./components/header');
var Parties = require('./components/parties');
var Facility = require('./components/facilityType');
var Excavator = require('./components/excavator');
var WorkType = require('./components/work_type');
//var db =require('../server/lib/db');
//
// Global variable for global state (e.g. currentUser)
//
window.App = {}

//
// Client-side routing
//
m.route.mode = 'pathname'
m.route(document.getElementById('app'), '/', {

  '/': {
    // Controllers are optional
    // controller: function () {},

    view: function (ctrl) {
    	return  m('body', [
    		m('h1', Header),
    	  m.component(Company)
    		])
    }
  },
  '/row': {
  	view: function (ctrl) {
    	return  m('body', [
    		m('h1', Header),
    	  m.component(RowLocation)
    		])
    }
  },
  '/parties': {
  	view: function (ctrl) {
    	return  m('body', [
    		m('h1', Header),
    	  m.component(Parties)
    		])
    }
  },
  '/facility': {
  	view: function (ctrl) {
    	return  m('body', [
    		m('h1', Header),
    	  m.component(Facility)
    		])
    }
  },
  '/excavator': {
  	view: function (ctrl) {
    	return  m('body', [
    		m('h1', Header),
    	  m.component(Excavator)
    		])
    }
  },
  '/worktype': {
  	view: function (ctrl) {
    	return  m('body', [
    		m('h1', Header),
    	  m.component(WorkType)
    		])
    }
  },
  '/all': {
  	view: function (ctrl) {
    	return  m('body', [
    		m('h1', Header),
    	  m.component(Company),
    	  m.component(RowLocation),
    	  m.component(Parties),
    	  m.component(Facility),
    	  m.component(Excavator),
    	  m.component(WorkType)
    		])
    }
  }

})
