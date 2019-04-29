"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Rutas 
const indexRutas_1 = __importDefault(require("./rutas/indexRutas"));
const productoRutas_1 = __importDefault(require("./rutas/productoRutas"));
//Modulos
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Servidor {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.rutas();
    }
    config() {
        this.app.set('port', process.env.port || 3500);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    rutas() {
        this.app.use('/api/games', indexRutas_1.default);
        this.app.use('/api/producto', productoRutas_1.default);
    }
    star() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ' + this.app.get('port'));
        });
    }
}
const server = new Servidor();
server.star();
