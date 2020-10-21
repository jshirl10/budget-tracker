import { BaseCategory, Category } from '../models/category';
import { BaseExpense, Expense } from '../models/expense';
import { BaseIncome, Income } from '../models/income';
import { BaseUser, User } from '../models/user';

export interface Dao<BaseEntity, Entity> {
  create(entity: BaseEntity): Entity;
  findById(id: number): Entity;
  update(entity: Entity): Entity;
  deleteById(id: number): void;
}

export interface UserDao extends Dao<BaseUser, User> {}
export interface IncomeDao extends Dao<BaseIncome, Income> {}
export interface CategoryDao extends Dao<BaseCategory, Category> {}
export interface ExpenseDao extends Dao<BaseExpense, Expense> {}
