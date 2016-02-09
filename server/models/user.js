var db = require('../lib/db')
var Promise = require('bluebird')
var createModel = require('../lib/create-model')


var User = module.exports = createModel('User', 'users', {

  signIn: function (username, password) {
    return User.findBy({ username: username })
      .then(function(user) {
        // In a real app the user's password would be encrypted
        if (user.password === password) {
          return user
        }
        else {
          return Promise.reject(new User.InvalidCredentials())
        }
      })
  }

})

// Another custom error
User.InvalidCredentials = function InvalidCredentials() {
  Error.captureStackTrace(this, this.constructor)
  this.name = 'InvalidCredentials'
  this.message = modelName + ': not found.'
}
util.inherits(User.InvalidCredentials, Error)