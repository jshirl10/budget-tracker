import { CategoryDao, ExpenseDao, IncomeDao, UserDao } from './dao';
import { CategoryPgDao } from './postgres/category.postgres.dao';
import { ExpensePgDao } from './postgres/expense.postgres.dao';
import { IncomePgDao } from './postgres/income.postgres.dao';
import { UserPgDao } from './postgres/user.postgres.dao';

export class DaoFactory {
  static userDao: UserDao = new UserPgDao();
  static incomeDao: IncomeDao = new IncomePgDao();
  static categoryDao: CategoryDao = new CategoryPgDao();
  static expenseDao: ExpenseDao = new ExpensePgDao();
}
