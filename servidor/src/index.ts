import express , {Application} from 'express';
//Rutas 
import indexRutas from './rutas/indexRutas';
import productoRutas from './rutas/productoRutas';

//Modulos
import morgan from 'morgan';
import cors from 'cors';

class Servidor {
    public app:Application ;
    constructor(){
        this.app = express();
        this.config();
        this.rutas();
    }
    config (){
        this.app.set ('port', process.env.port || 3500);
        this.app.use (morgan('dev'));
        this.app.use (cors());
        this.app.use (express.json());
    }
    rutas ():void{
        this.app.use('/api/games',indexRutas);
        this.app.use('/api/producto',productoRutas);
    }
    star (){
        this.app.listen(this.app.get('port'),()=>{
             console.log ('Server on port ' +this.app.get('port'))});
    }
}
const server = new Servidor ();
server.star();