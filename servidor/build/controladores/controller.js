"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
class Controller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default.query('INSERT INTO user set ?', [req.body]);
            res.json({ menssage: 'Saved user' });
            //Request.body es por donde viajan todos los datos del cliente(Se declara en index.ts)
            //console.log(req.body);
        });
    }
    // Todos los usuarios
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield db_1.default.query('SELECT * FROM user');
            res.json(games);
            //  res.send('games') ;
        });
    }
    // Un usuario
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Destructuacion para obtener 1 solo una parte del objeto id en este caso...
            const { id } = req.params;
            const { usuario } = req.params;
            const { contrasena } = req.params;
            const games = yield db_1.default.query('SELECT * FROM user WHERE usuario=? AND contrasena=?', [usuario, contrasena]);
            // res.json({text:'This is game '+ req.params.id})
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The user doesn't exist" });
        });
    }
}
const controller = new Controller();
exports.default = controller;
