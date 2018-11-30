var assert = require('assert');
var users = require('../index');

describe('User Manager', function(){
    it('Aggiungere un User', function() {
        assert.equal(typeof(users.addUser("andrea", "ardenti")), 'object');
    });

    it('Rimuovere un User', function() {
        assert.equal(typeof(users.removeUser(1)), 'undefined');

    });

    it('Seleziona un User in base all\'ID', function() {
        assert.equal(typeof(users.filterUserById(1)), 'object');
    });

    it('Seleziona un User in base al nome', function() {
        assert.equal(typeof(users.filterUserByName("andrea")), 'object');
    });
});