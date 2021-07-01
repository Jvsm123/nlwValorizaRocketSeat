import { Request, Response } from 'express';
import { CreateTagService } from '../service/CreateTagService';

export class CreateTagController
{
  async tratamento( req: Request, res: Response )
  {
    const { name } = req.body;

    const criaTagService = new CreateTagService();

    const tag = await criaTagService.execute( name );

    return res.json( tag );
  }
}
