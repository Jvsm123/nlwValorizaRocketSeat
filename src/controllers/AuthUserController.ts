import { AuthUserService } from '../service/AuthUserService';
import { Request, Response } from 'express';

export class AuthUserController
{
  async tratamento( req: Request, res: Response )
  {
    const { email, password } = req.body;

    const authUser = new AuthUserService();

    const token = await authUser.execute(
    {
      email,
      password
    });

    return res.json( token );
  }
}
