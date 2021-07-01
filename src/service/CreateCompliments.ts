import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';
import { getCustomRepository } from "typeorm";
import { repoUser } from '../repositories/UsersRepositories';

interface IComplimentsRequest
{
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export class CreateCompliments
{
  async execute( { tag_id, user_sender, user_receiver, message } : IComplimentsRequest )
  {
    const complimentsRepo = getCustomRepository( ComplimentsRepositories );
    const userRepo = getCustomRepository( repoUser );

    if( user_sender === user_receiver )
    {
      throw new Error('Usuário está enviando mensagem para sí mesmo!');
    }

    const userReceiverExiste = await userRepo.findOne( user_receiver );

    if( !userReceiverExiste )
    {
      throw new Error('Esse usuário não existe!');
    }

    const compliment = complimentsRepo.create(
    {
      tag_id,
      user_receiver,
      user_sender,
      message
    });

    await complimentsRepo.save( compliment );

    return compliment;
  }
}
