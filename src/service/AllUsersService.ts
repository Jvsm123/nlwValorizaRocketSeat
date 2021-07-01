import { repoUser } from '../repositories/UsersRepositories';
import { getCustomRepository } from 'typeorm';

export class AllUserService
{
  async execute()
  {
    const userRepo = getCustomRepository( repoUser );

    const users = await userRepo.find();

    return users;
  }
}
