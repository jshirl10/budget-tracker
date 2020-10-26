import { Pool, PoolClient, types } from 'pg';
import { BaseCategory, Category } from '../../models/category';
import { BaseExpense, Expense } from '../../models/expense';
import { BaseIncome, Income } from '../../models/income';
import { BaseUser, User } from '../../models/user';
import { Database } from '../database';

export class PgDatabase implements Database {
  private static singleton: PgDatabase | null;
  private static readonly pool = new Pool();

  static instance(): PgDatabase {
    if (this.singleton == null) {
      this.singleton = new PgDatabase();
    }
    return this.singleton;
  }

  private constructor() {
    // For when query results parse postgres types to typescript types
    types.setTypeParser(23, parseInt); // 23 represents int types in pg
    types.setTypeParser(701, parseFloat); // 701 represents double precision in pg
  }

  private async transaction<T>(
    action: (c: PoolClient, commit: () => Promise<void>, rollback: () => Promise<void>) => Promise<T>,
  ): Promise<T> {
    const client = await PgDatabase.pool.connect();
    await client.query('BEGIN');
    const transactionResult = action(
      client,
      async () => {
        await client.query('COMMIT');
      },
      async () => {
        await client.query('ROLLBACK');
      },
    );
    client.release();
    return transactionResult;
  }

  getUserByEmail(email: String): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getUser(userId: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  getCategories(userId: number): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  getCategory(categoryId: number): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  getExpenses(userId: number): Promise<Expense[]> {
    throw new Error('Method not implemented.');
  }
  getIncomes(userId: number): Promise<Income[]> {
    throw new Error('Method not implemented.');
  }
  addUser(newUser: BaseUser): Promise<User> {
    const { email, first_name, last_name, passwd } = newUser;
    return this.transaction<User>(async (client, commit, rollback) => {
      try {
        const queryResult = await client.query<User>({
          text: 'INSERT INTO users (email, first_name, last_name, passwd) VALUES ($1, $2, $3, $4);',
          values: [email, first_name, last_name, passwd],
        });
        const createdUser = queryResult.rows[0];
        await commit();
        return createdUser;
      } catch (error) {
        await rollback();
        throw error;
      }
    });
  }
  editUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(userId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  addCategory(newCategory: BaseCategory): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  editCategory(category: Category): Promise<Category> {
    throw new Error('Method not implemented.');
  }
  deleteCategory(categoryId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  addExpense(newExpense: BaseExpense): Promise<Expense> {
    throw new Error('Method not implemented.');
  }
  editExpense(expense: Expense): Promise<Expense> {
    throw new Error('Method not implemented.');
  }
  deleteExpense(expenseId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
  addIncome(newIncome: BaseIncome): Promise<Income> {
    throw new Error('Method not implemented.');
  }
  editIncome(income: Income): Promise<Income> {
    throw new Error('Method not implemented.');
  }
  deleteIncome(incomeId: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
