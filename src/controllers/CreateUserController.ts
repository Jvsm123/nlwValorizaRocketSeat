import { Request, Response } from 'express';
import { CreateUserService } from '../service/CreateUserService';

//Essa é a parte do nosso controller,
//Ele é responsável por delegar as informações que vem direto do nosso app
//assim, faz uma especie de tratamento, onde verifica se todos os requisitos
//necessários para nossa aplicação estão de acordo,
//assim, pode depois mandar para as camamadas de baixo(service -> ORM -> Repositorie -> DB)
export class CreateUserController
{
  async tratamento( req: Request, res: Response )
  {
    //Pegamos o corpo da nossa requisitção e então,
    //separamos eles por apenas 3 itens, name, email, admin
    //eles serão passados para o nosso Service que vai avaliar se está tudo de acordo
    const { name, email, admin, password } = req.body;

    const createUserService = new CreateUserService();

    //Se essa parte da validação der certo, mandaremos um json com os relatórios do nosso 
    //usuário criado!
    const user = await createUserService.execute(
      {
        name,
        email,
        admin,
        password
      });

      return res.json( user );
  }
}


