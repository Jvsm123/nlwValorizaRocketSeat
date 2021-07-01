//Tudo isso aqui, serve para o ORM enteder como é o nosso banco de dados e fazer suas 
//"Referências"
import
{ 
  Entity, 
  PrimaryColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn 
} from "typeorm";

//Sistemas de uuid, serve como sistema de permissões,
//bem comum em Unix!
import { v4 as uuid } from "uuid"

//Esse vai ser onde temos de fato a relação do nosso banco de dados e nosso ORM,
//aqui, definimos o nome da nossa tabela na entity e em seguida, temos as suas
//colunas: name, email, admin, id, etc...
@Entity( "users" )
export class User 
{
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  admin: boolean;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor()
  {
    //Caso o id venha a ser nulo,
    //estaremos nesse caso criando um novo user!
    if(!this.id )
    {
      this.id = uuid();
    }
  }
}
