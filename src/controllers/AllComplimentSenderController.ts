import { AllUserSendComplimentService } from '../service/AllUserSendComplimentService';
import { Request, Response } from 'express';

export class AllComplimentSenderController
{
   async tratamento( req: Request, res: Response )
   {
      const { user_id } = req;

      const AllComplimentsSenderContoller = new AllUserSendComplimentService();

      const compliments = await AllComplimentsSenderContoller.execute( user_id );

      return res.json( compliments );
   }
}
