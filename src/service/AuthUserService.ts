import { getCustomRepository } from 'typeorm';
import { repoUser } from '../repositories/UsersRepositories';

import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthReq
{
  email: string;
  password: string;
}

export class AuthUserService
{
  async execute( { email, password } : IAuthReq )
  {
    const userRepo = getCustomRepository( repoUser );

    //Verifica se email existe
    const user = await userRepo.findOne({ email });

    if( !user )
    {
      throw new Error('Email ou Senha Incorreta!!!');
    }
    
    //Verifice se senha está correto
    //comparando a com a do banco de dados
    //usamos o compare para tal:
    const match = await compare( password, user.password )

    if( !match )
    {
      throw new Error('Email ou Senha Incorreta!!!');
    }
    
    //Gera Token: {payload}, chaveSecreta(MD5)
    const token = sign(
    {
      email: user.email
    }, '4691be1626144551547a4c2e20df3527',
    {
      subject : user.id,
      expiresIn: "1d"
    });

    console.log( token );

    return token;
  }
}
