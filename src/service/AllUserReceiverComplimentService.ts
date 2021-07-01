import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

export class AllUserReceiverComplimentService
{
  async execute( user_id: string )
  {
    const complimentsRepo = getCustomRepository( ComplimentsRepositories );

    const compliments = complimentsRepo.find(
    {
      where: { user_receiver: user_id },
      relations: [ 'userSender', 'userReceiver', 'tag' ]
    });

    return compliments;
  }
}
