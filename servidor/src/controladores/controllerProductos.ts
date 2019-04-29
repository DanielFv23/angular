import {Request, Response} from 'express';
import pool from '../db';

class Productos {

    public async createProducto (req: Request, res: Response): Promise <void> {
        await pool.query('INSERT INTO producto set ?',[req.body]);
        res.json({menssage:'Saved Game'});
        //Request.body es por donde viajan todos los datos del cliente(Se declara en index.ts)
        //console.log(req.body);
    }

    public async listProducto (req: Request,res : Response){
        const producto = await pool.query ('SELECT * FROM producto');
        res.json(producto);
        //  res.send('games') ;
     }

}

const controllerProducto = new Productos();
export default controllerProducto;