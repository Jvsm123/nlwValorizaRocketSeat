import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

export class AllUserSendComplimentService
{
  async execute( user_id: string )
  {
    const complimentRepo = getCustomRepository( ComplimentsRepositories );

    const compliments = await complimentRepo.find(
    {
      where: { user_receiver: user_id }
    });

    return compliments;
  }
}
