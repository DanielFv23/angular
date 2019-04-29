import { Router} from 'express';
import controllerProductos from '../controladores/controllerProductos';

class RutaProductos {
    public router :Router = Router();

    constructor(){
        this.config();
    }

    config () :void {
        this.router.post('/',controllerProductos.createProducto);
        this.router.get('/',controllerProductos.listProducto);
      
    }
}
const rutaProducto = new RutaProductos ();
export default rutaProducto.router;