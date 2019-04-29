import mysql from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.dataBase);
pool.getConnection().then(conection =>{
    pool.releaseConnection(conection);
    console.log ('Db is conection')
});
export default pool;