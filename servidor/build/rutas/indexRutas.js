"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controladores/controller"));
class Ruta {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Insert
        this.router.get('/', controller_1.default.list);
        this.router.get('/:usuario/:contrasena', controller_1.default.getOne);
        this.router.post('/', controller_1.default.create);
    }
}
const ruta = new Ruta();
exports.default = ruta.router;
