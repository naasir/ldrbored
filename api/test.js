var _, Stat,
    senators, timestats, generateDummyStats;

// import modules
_ = require('underscore');
Stat = require('./domain').Stat;

// list of current US senators
senators = [
    "Patrick Leahy",
    "Orrin Hatch",
    "Max Baucus",
    "Thad Cochran",
    "Carl Levin",
    "Chuck Grassley",
    "Tom Harkin",
    "Mitch McConnell",
    "Jay Rockefeller",
    "Barbara Mikulski",
    "Richard Shelby",
    "John McCain",
    "Harry Reid",
    "Dianne Feinstein",
    "Barbara Boxer",
    "Patty Murray",
    "Jim Inhofe",
    "Ron Wyden",
    "Pat Roberts",
    "Dick Durbin",
    "Tim Johnson",
    "Jack Reed",
    "Mary Landrieu",
    "Jeff Sessions",
    "Susan Collins",
    "Mike Enzi",
    "Chuck Schumer",
    "Mike Crapo",
    "Bill Nelson",
    "Tom Carper",
    "Debbie Stabenow",
    "Maria Cantwell",
    "Lisa Murkowski",
    "Saxby Chambliss",
    "Lindsey Graham",
    "Lamar Alexander",
    "John Cornyn",
    "Mark Pryor",
    "Richard Burr",
    "Tom Coburn",
    "John Thune",
    "Johnny Isakson",
    "David Vitter",
    "Bob Menendez",
    "Ben Cardin",
    "Bernie Sanders",
    "Sherrod Brown",
    "Bob Casey",
    "Bob Corker",
    "Claire McCaskill",
    "Amy Klobuchar",
    "Sheldon Whitehouse",
    "Jon Tester",
    "John Barrasso",
    "Roger Wicker",
    "Mark Udall",
    "Tom Udall",
    "Mike Johanns",
    "Jeanne Shaheen",
    "Mark Warner",
    "Jim Risch",
    "Kay Hagan",
    "Jeff Merkley",
    "Mark Begich",
    "Michael Bennet",
    "Kirsten Gillibrand",
    "Al Franken",
    "Joe Manchin",
    "Chris Coons",
    "Mark Kirk",
    "Dan Coats",
    "Roy Blunt",
    "Jerry Moran",
    "Rob Portman",
    "John Boozman",
    "Pat Toomey",
    "John Hoeven",
    "Marco Rubio",
    "Ron Johnson",
    "Rand Paul",
    "Richard Blumenthal",
    "Mike Lee",
    "Kelly Ayotte",
    "Dean Heller",
    "Brian Schatz",
    "Tim Scott",
    "Tammy Baldwin",
    "Jeff Flake",
    "Joe Donnelly",
    "Chris Murphy",
    "Mazie Hirono",
    "Martin Heinrich",
    "Angus King",
    "Tim Kaine",
    "Ted Cruz",
    "Elizabeth Warren",
    "Deb Fischer",
    "Heidi Heitkamp",
    "Jeffrey Chiesa",
    "Ed Markey"
];

// list of some time-based stats
timestats = [
    'time-on-email',
    'time-on-facebook',
    'time-on-twitter',
    'time-on-reddit',
    'time-on-phone',
    'time-working',
    'time-dozing',
    'time-gaming'
];

// generate some dummy stats about our senators
generateDummyStats = function() {
    var stats = [];
    _.each(senators, function(senator, index) {
        var user = senator.toLowerCase().replace(' ', '-');

        stats.push(new Stat(user, 'rank', index + 1));
        stats.push(new Stat(user, 'age', _.random(30, 80)));

        _.each(timestats, function(timestat) {
            stats.push(new Stat(user, timestat, _.random(0, 240))); // 240 mins (4 hours)
        });
    });
    return stats;
};

exports.generateDummyStats = generateDummyStats;