import { Request, Response } from 'express';
import { AllUserService } from '../service/AllUsersService';

export class AllUsersController
{
   async tratamento( req: Request, res: Response )
   {
      const AllUsersService = new AllUserService();

      const Users = await AllUsersService.execute();

      return res.json( Users );
   }
}
