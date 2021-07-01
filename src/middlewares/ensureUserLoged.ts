import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface ISub
{
  sub: string;
}

export function ensureUserLoged( req: Request, res: Response, next: NextFunction )
{
  //Recebendo o authToken:
  const authToken = req.headers.authorization;

  //Validando seu preenchimento:
  if( !authToken )
  {
    return res.status(401).end('Seu token está incorreto!');
  }

  const [ , token ] = authToken.split(' ');

  //Validar se authToken é valido:
  //numero gigante = MD5
  try
  {
    const { sub } = verify( token , "4691be1626144551547a4c2e20df3527" ) as ISub;

    req.user_id = sub;

    return next();
  } 
  catch( err )
  {
    return res.status( 401 ).end('Não foi possível ver seu token!');
  }

  //Recuperar informações do usuário
}
