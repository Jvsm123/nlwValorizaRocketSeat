//Essa parte de repository, faz a conexão entre nossa entity(Users) e o nosso banco de dados,
//para tal, importamos uma classe que possui os métodos SQL
//E daí, juntamos o que temos na nossa entiti com as infos no banco de dados e pronto, Temos um sistema
//de repository fazendo sua comunicação!
import { EntityRepository, Repository } from 'typeorm'
import { User } from '../database/entity/User';

@EntityRepository( User )
//Fazemos esse extends para se ter os 
//itens por padrão
//Assim, não precisamos fazer todos os métodos defaults
export class repoUser extends Repository< User >
{
  
}
