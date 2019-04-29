import {Request, Response} from 'express';
import pool from '../db';

class Controller {

    public async create (req: Request, res: Response): Promise <void> {
        await pool.query('INSERT INTO user set ?',[req.body]);
        res.json({menssage:'Saved user'});
        //Request.body es por donde viajan todos los datos del cliente(Se declara en index.ts)
        //console.log(req.body);
    }

    // Todos los usuarios
    public async list (req: Request,res : Response){
        const games = await pool.query ('SELECT * FROM user');
        res.json(games);
        //  res.send('games') ;
     }
 
    // Un usuario
     public async getOne(req:Request, res: Response): Promise<any>{
        //Destructuacion para obtener 1 solo una parte del objeto id en este caso...
         const { id }= req.params;
         const { usuario }= req.params;
         const { contrasena }= req.params;

         const games = await pool.query('SELECT * FROM user WHERE usuario=? AND contrasena=?',[usuario,contrasena]);
         // res.json({text:'This is game '+ req.params.id})
         if(games.length>0){
             return res.json(games[0]);
         }res.status(404).json({ text: "The user doesn't exist"});
     }
}

const controller = new Controller();
export default controller;