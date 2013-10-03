```
    __    __     __                        __
   / /___/ /____/ /_  ____  ________  ____/ /
  / / __  / ___/ __ \/ __ \/ ___/ _ \/ __  / 
 / / /_/ / /  / /_/ / /_/ / /  /  __/ /_/ /  
/_/\__,_/_/  /_.___/\____/_/   \___/\__,_/                                               
```                                             

## Summary

Ldrbored is a simple web-based game leaderboard visualization. It lists the stats and ranking of a fake set of players. It was written as a sample application to showcase the implementation of a simple REST API and web-based front-end.

![Screenshot](https://raw.github.com/naasir/ldrbored/master/screenshot.jpg)

## Quickstart

### Requirements

Ldrbored requires the following software to be pre-installed in order to run:

* [node.js](http://nodejs.org/)

### Running the server

Issue the following commands from a command shell to start the web server:

    $ cd path/to/ldrbored
    $ npm install
    $ node api/server.js

### Viewing the application

Open a web browser to the following url:

    http://localhost:3000/public

## REST API

### Querying for stats by user:


    GET http://localhost:3000/stats/:user

OR

    GET http://localhost:3000/stats?user=:user

Example

    GET http://localhost:3000/stats/john-doe

    // returns
    [
      {
        user: "john-doe"
        name: "time-working"
        value: 240
        createdAt: "2013-10-03T04:55:06.984Z"
        _id: "I54rWoMsXvuGEjNZ"
      },
      ...
    ]

### Querying for stats by stat name:

    GET http://localhost:3000/stats?name=:name

Example

    GET http://localhost:3000/stats?name=time-on-twitter

    // returns
    [
      {
        user: "john-doe"
        name: "time-on-twitter"
        value: 240
        createdAt: "2013-10-03T04:55:06.984Z"
        _id: "I54rWoMsXvuGEjNZ"
      },
      ...
    ]

### Posting a new stat:

    POST http://localhost:3000/stats?name=time-on-twitter
    Content-Type: application/json

    Body:
    {
      user:  "my-user-name"
      name:  "my-stat-name"
      value: "my-stat-value"
    }
    
## Browser Compatibility

Ldrbored has been tested on the following desktop web browsers:

* Google Chrome
* Mozilla Firefox `4+`
