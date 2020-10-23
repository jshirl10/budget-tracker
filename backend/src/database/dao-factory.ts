import { CategoryDao, ExpenseDao, IncomeDao, UserDao } from './dao';
import { PgCategoryDao } from './postgres/dao/category.dao';
import { PgExpenseDao } from './postgres/dao/expense.dao';
import { PgIncomeDao } from './postgres/dao/income.dao';
import { PgUserDao } from './postgres/dao/user.dao';

export class DaoFactory {
  static readonly userDao: UserDao = new PgUserDao();
  static readonly incomeDao: IncomeDao = new PgIncomeDao();
  static readonly categoryDao: CategoryDao = new PgCategoryDao();
  static readonly expenseDao: ExpenseDao = new PgExpenseDao();
}
