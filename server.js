var _, path, express, app, stats, staticDir;

_ = require('underscore');
path = require('path');
express = require('express');

// in-memory cache of dummy stats
stats = [
    { user: 'bruce',  name: 'xp', value: 10 },
    { user: 'dick',   name: 'xp', value: 5 },
    { user: 'celina', name: 'xp', value: 6 },
    { user: 'victor', name: 'xp', value: 8 }
];

// set creation date for all
_.each(stats, function(stat) { stat.createdAt = new Date(); });

// configure express
// staticDir = path.join(__dirname, "public/");
staticDir = path.join(__dirname, "/");
app = express();
app.use(express.bodyParser());
app.use(express.static(staticDir));

// get all stats
// 
// supported query params:
//   ?user='username' (get stats for user)
//   ?name='statname' (get specific stat for all users)
//   ?limit=10        (data page size)
//   ?offset=0        (data page offset)
app.get('/stats', function(req, res) {
    var user = req.query.user,
        name = req.query.name,
        limit = req.query.limit || 10,
        offset = req.query.offset || 0;

    res.json(stats);
});

// get stats for a specific user
app.get('/stats/:username', function(req, res) {
    var userstats = _.where(stats, { username: req.params.username });
    res.json(userstats);
});

// save stat for a specific user
app.post('/stats', function(req, res) {

    var newStat = {
        username : req.body.user,
        statname : req.body.name,
        statvalue: req.body.value,
        createdAt: new Date()
    };

    stats.push(newStat);
    res.json(newStat);
});

app.listen(3000);

console.log('server started at port 3000');