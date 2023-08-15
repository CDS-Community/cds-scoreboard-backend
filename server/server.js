const express = require('express')
const cors = require('cors')
// const fileUpload = require('express-fileupload')

const config = require('./config')
const db = require('../db/connection');

class Server {

    constructor() {
        this.app = express()
        this.port = config.PORT;

        // Añadir los path { url } de cada elemento
        this.paths = {
            // auth: '/api/auth',
            user: '/api/user',
            role: '/api/roles',
            position: '/api/position',
            level: '/api/level',
            level_detail: '/api/level_detail',

            event: '/api/events',
            assitance: '/api/assistances',
            staff_event: '/api/staff-events',
            commission: '/api/commissions',
            stake: '/api/stakes',
            img_event: '/api/img-events'

        }
        // Conectar a la Base de Datos
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log("Database online");
        } catch (error) {
            console.log("Database ofline - " + error);
        }

    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y Parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'));

        // FileUpload - Carga de Archivos
        // this.app.use(fileUpload({
        //     useTempFiles: true,
        //     tempFileDir: '/tmp/',
        //     createParentPath: true
        // }));
    }

    // Añadir las rutas que se encuentran en el path
    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth'));
        // AUTH MODULE
        this.app.use(this.paths.user, require('../modules/auth/routes/user.routes'));
        this.app.use(this.paths.role, require('../modules/auth/routes/role.routes'));
        this.app.use(this.paths.position, require('../modules/auth/routes/position.routes'));
        this.app.use(this.paths.level, require('../modules/auth/routes/levels.routes'));
        this.app.use(this.paths.level_detail, require('../modules/auth/routes/level_detail.routes'));
        // EVENTS MODULE
        this.app.use(this.paths.event, require('../modules/events/routes/events.routes'));
        this.app.use(this.paths.assitance, require('../modules/events/routes/assistance.routes'));
        this.app.use(this.paths.staff_event, require('../modules/events/routes/staff_events.routes'));
        this.app.use(this.paths.commission, require('../modules/events/routes/commissions.routes'));
        this.app.use(this.paths.stake, require('../modules/events/routes/stake.routes'));
        this.app.use(this.paths.img_event, require('../modules/events/routes/img_event.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ', this.port);
        })
    }

}

module.exports = Server;
