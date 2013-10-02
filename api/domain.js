var _, Stat;

_ = require('underscore');

// Stat object constructor
Stat = function(user, name, value) {
    this.user = user;
    this.name = name;
    this.value = value;
    this.createdAt = new Date();
};

// Stat validation method
Stat.prototype.isValid = function() {
    return _.isString(this.user)
        && _.isString(this.name);
};

exports.Stat = Stat;
