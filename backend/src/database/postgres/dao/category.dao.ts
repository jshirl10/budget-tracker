import { BaseCategory, Category } from '../../../models/category';
import { CategoryDao } from '../../dao';

export class PgCategoryDao implements CategoryDao {
  create(entity: BaseCategory): Category {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Category {
    throw new Error('Method not implemented.');
  }
  update(entity: Category): Category {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number): void {
    throw new Error('Method not implemented.');
  }
}
