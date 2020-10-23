import { BaseUser, User } from '../../../models/user';
import { UserDao } from '../../dao';

export class PgUserDao implements UserDao {
  create(entity: BaseUser): User {
    throw new Error('Method not implemented.');
  }
  findById(id: number): User {
    throw new Error('Method not implemented.');
  }
  update(entity: User): User {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number): void {
    throw new Error('Method not implemented.');
  }
}
