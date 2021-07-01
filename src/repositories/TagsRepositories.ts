import { EntityRepository, Repository } from 'typeorm';
import { Tag } from '../database/entity/Tags';

@EntityRepository( Tag )
export class TagsRepositories extends Repository< Tag >
{

}
