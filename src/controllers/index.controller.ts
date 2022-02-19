import { Request, Response } from 'express'

const pool = require('../database')



export async function Index  (req: Request, res: Response):Promise <Response | void> {
   res.send('Welcome start API ')
}

class querys{

   public async test(req:Request, res:Response):Promise<Response | void> {
      try {         
         const posts = await pool.query('SELECT * FROM posts');
         return res.json(posts[0]);
      }
      catch (e) {
         console.log(e)
      }  
   }
   
   public async firts(req:Request, res:Response):Promise<Response | void> {
      try {         
         return res.send('this mi second route')
      }
      catch (e) {
         console.log(e)
      }  
   }


}

const Querys = new querys();
export default Querys