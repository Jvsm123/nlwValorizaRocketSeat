import { AllUserReceiverComplimentService } from '../service/AllUserReceiverComplimentService';
import { Request, Response } from 'express';

export class AllComplimentReceiverController
{
   async tratamento( req: Request, res: Response )
   {
      const { user_id } = req;

      const AllComplimentReceiverController = new AllUserReceiverComplimentService();

      const compliments = AllComplimentReceiverController.execute( user_id );

    return res.json( compliments );
   }
}
