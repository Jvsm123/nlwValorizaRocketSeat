import { AllTagsService } from '../service/AllTagsService';
import { Request, Response } from 'express';

export class AllTagsController
{
   async tratamento( req: Request, res: Response )
   {
      const listTagsService = new AllTagsService();

      const tags = await listTagsService.execute();

      return res.json( tags );
   }
}
