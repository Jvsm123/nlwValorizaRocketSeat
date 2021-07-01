import { Request, Response, NextFunction } from 'express';
import { repoUser } from '../repositories/UsersRepositories';
import { getCustomRepository } from 'typeorm';

export async function ensureAdmin( req: Request, res: Response, next: NextFunction)
{
  //Verificar se é Admin
  const { user_id } = req;

  const userRepo = getCustomRepository( repoUser );

  const { admin } = await userRepo.findOne( user_id );

  // Se admin, ele avança para o proximo nível
  if( admin )
  {
    return next();
  }

  return res.status( 401 ).json(
  {
    error: "Não Autorizado!"
  });
}
