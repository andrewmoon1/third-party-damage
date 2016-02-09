var m = require('mithril');
var RowLocation = require('./components/rowLocation');
var Company = require('./components/company');
var Header = require('./components/header');

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
  }

})
