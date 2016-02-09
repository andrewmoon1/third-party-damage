var db = require('../lib/db.js');

db.schema.createTableIfNotExists('rowLocation', function(table) {
	table.increments('id') //maybe useful for later
	table.string('value', 255);
	table.timestamps();
})
.then(function() {
	console.log('rowLocation table is ready')
});

db.schema.createTableIfNotExists('users', function (table) {
  table.increments('id').primary();
  table.string('username', 100).unique();
  table.string('password', 100);
  table.timestamps();
})
.then(function () {
  console.log('users table is ready.');
});