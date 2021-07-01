//Essa é uma parte sensível do nosso app,
//Aqui, vai ter todo o manipulamento do nosso app,
//verificação de chamadas, ligação com o repositories do ORM...,
//o que podemos chamar de regra de negócios!
import { getCustomRepository } from 'typeorm';
import { repoUser } from '../repositories/UsersRepositories';
import { hash } from 'bcryptjs';

interface IUserRequest
{
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService
{
  async execute( { name, email, admin = false, password } : IUserRequest )
  {
    const User = getCustomRepository( repoUser );
    
    //Se não for passado email
    if( !email )
    {
      throw new Error("Email Inválido");
    }
    
    //Se já existente
    const userJaExiste = await User.findOne(
    {
      email
    });
    
    //Lança erro
    if( userJaExiste )
    {
      throw new Error("Usuário já cadastrado!");
    }
    
    const passHash = await hash( password, 8 );

    //Sem erros, é criado novo user:
    const newUser = User.create(
    {
      name,
      email,
      admin,
      password: passHash // Como nosso valor vai ser diferente, colocamos ele como objetos;
    });
    
    await User.save( newUser );
    
    return newUser;
  };
}
