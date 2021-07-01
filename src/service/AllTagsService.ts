import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

export class AllTagsService
{
  async execute()
  {
    const tagsRepo = getCustomRepository( TagsRepositories );

    const tags = await tagsRepo.find();

    return tags;
  }
}
