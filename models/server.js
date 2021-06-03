const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares()
        

        this.routes();
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicación corriendo en puerto ', this.port)
        });
    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Directorio Público
        this.app.use(express.static('public'));

        //Lectura y Parseo del body
        this.app.use(express.json());
    }
}

module.exports = Server;