var _, path, express, Datastore, Stat, test,
    app, staticDir, stats;

// import modules
_ = require('underscore');
path = require('path');
express = require('express');
Datastore = require('nedb');

Stat = require('./domain').Stat;
test = require('./test');

// init the db
initializeDatabase();

// configure express
staticDir = path.join(__dirname, "/..");
app = express();
app.use(express.bodyParser());
app.use(express.static(staticDir));

// initializes the database with dummy data
function initializeDatabase() {
    console.log('initializing database');
    stats = new Datastore({ filename: 'stats.db', autoload: true });

    // load dummy data
    var dummies = test.generateDummyStats();
    _.each(dummies, function(dummy) {
        stats.insert(dummy);
    });
};

// a stat query object built from request query parameters
// 
// supported query params:
//   ?user='username' (get stats for user)
//   ?name='statname' (get specific stat for all users)
//   ?limit=10        (data page size)
//   ?offset=0        (data page offset)
function StatQuery(query) {
    this.properties = {};
    if (query.user) { this.properties.user = query.user; };
    if (query.name) { this.properties.name = query.name; };

    this.limit = parseInt(query.limit, 10) || 10;
    this.offset = parseInt(query.offset, 10) || 0;
};

// async helper function for finding all stats that meet the given query specified in a StatQuery object
function findStats(query, callback) {
    console.log(query);

    stats.find(query.properties, function(err, results) {
        // HACK: we're fetching ALL results that meet the search criteria
        // and throwing away any extra past the specified limit.
        // This is OK for this example, but not optimal.
        results = results.slice(query.offset, query.offset + query.limit);
        results = _.sortBy(results, 'value').reverse();
        callback(err, results);
    });
};

// helper function for saving a stat
function saveStat(stat, callback) {
    stats.insert(stat, callback);
};

// get all stats
app.get('/stats', function(req, res) {
    var query= new StatQuery(req.query);
    findStats(query, function(err, results) {
        res.json(results);
    });
});

// get stats for a specific user
app.get('/stats/:user', function(req, res) {
    var query= new StatQuery(req.query);
    query.properties.user = req.params.user;
    res.json(findStats(query));
});

// save stat for a specific user
app.post('/stats', function(req, res) {
    var newStat = new Stat(req.body.user, req.body.name, req.body.value);
    if (!newStat.isValid()) {
        res.json(400, { error: 'invalid data' });
        return;
    }

    saveStat(newStat);
    res.json(newStat);
});

app.listen(3000);

console.log('server started at port 3000');