var counter = 1;
var users = [];


exports.addUser = function(param1, param2) {
    var user = 
    {
        id: counter++,
        name: param1,
        surname: param2,
    }
    users.push(user);
    return user; 
}

exports.removeUser = function(param) {
    for (var i=0; i<users.length; i++) {
        if (users[i].id === param) {
            return users.splice(i, 1);
        }
    }
}

exports.reset = function() {
    users = [];
    counter = 0;
}

exports.filterUserById = function(param) {
    var newArrayID = [];
    for (var i=0; i<users.length; i++) {
        if (users[i].id === param) {
            newArrayID.push(users[i]);
        }
    }
    if (newArrayID != undefined) {
        return newArrayID;
    } else {
        return "User non present in database!";
    }
}

exports.filterUserByName = function(param) {
    var newArrayName = [];
    for (var i=0; i<users.length; i++) {
        if (users[i].name === param) {
            newArrayName.push(users[i]);
        }
    }
    if (newArrayName != undefined) {
        return newArrayName;
    } else {
        return "User non present in database!";
    }
}

this.reset();