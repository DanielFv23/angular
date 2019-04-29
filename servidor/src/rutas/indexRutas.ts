import { Router} from 'express';
import controller from '../controladores/controller';

class Ruta {
public router :Router = Router();
    constructor () {
        this.config();
     }
     config ():void {
         //Insert
         this.router.get('/',controller.list);
         this.router.get('/:usuario/:contrasena',controller.getOne);
         this.router.post('/',controller.create);
     }
}

const ruta = new Ruta ();
export default ruta.router;