import { TagsRepositories } from '../repositories/TagsRepositories';
import { getCustomRepository } from "typeorm";

export class CreateTagService
{
  async execute( name: string )
  {
    const tagsRepo = getCustomRepository( TagsRepositories );

    if( !name )
    {
      throw new Error( "Nome Incorreto!" );
    }

    const jaExiste = await tagsRepo.findOne({ name });

    if( jaExiste )
    {
      throw new Error( "Essa Tag já está cadastrada!" );
    }

    const tag = tagsRepo.create({ name });

    await tagsRepo.save( tag );

    return tag;
  }
}
