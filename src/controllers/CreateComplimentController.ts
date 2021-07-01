import { Request, Response } from 'express';
import { CreateCompliments } from '../service/CreateCompliments';

export class CreateComplimentController
{
  async tratameno( req: Request, res: Response )
  {
    const
    { 
      tag_id, 
      user_receiver, 
      message 
    } = req.body;

    const { user_id } = req;

    const CreateComplimentController = new CreateCompliments();

    const compliment = await CreateComplimentController.execute(
    {
      tag_id,
      user_sender: user_id,
      user_receiver,
      message
    });

    return res.json( compliment );
  }
}
