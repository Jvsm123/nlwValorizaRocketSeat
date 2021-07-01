import { Repository, EntityRepository } from 'typeorm';
import { Compliments } from '../database/entity/Compliments';

@EntityRepository( Compliments )
export class ComplimentsRepositories extends Repository< Compliments >
{

}
