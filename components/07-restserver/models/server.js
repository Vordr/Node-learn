require('dotenv').config();

const express = require('express');
const cors = require('cors');


class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.userRoutePath = '/api/users';

        // Middlewares
        this.middlewares();

        // Routes of the application
        this.routes();

    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Reading and parser of the body
        this.app.use( express.json() );

        // Public directory
        this.app.use( express.static('public') )

    }

    routes() {

        this.app.use(this.userRoutePath, require('../routes/user.routes'));

    }

    listen() {
        
        this.app.listen(this.port, () => {
            console.log('Server running at', this.port)
        });

    }

}

module.exports = Server;