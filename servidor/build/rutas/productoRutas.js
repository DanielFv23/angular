"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerProductos_1 = __importDefault(require("../controladores/controllerProductos"));
class RutaProductos {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', controllerProductos_1.default.createProducto);
        this.router.get('/', controllerProductos_1.default.listProducto);
    }
}
const rutaProducto = new RutaProductos();
exports.default = rutaProducto.router;
