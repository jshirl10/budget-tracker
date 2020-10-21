import { BaseExpense, Expense } from '../../models/expense';
import { ExpenseDao } from '../dao';

export class ExpensePgDao implements ExpenseDao {
  create(entity: BaseExpense): Expense {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Expense {
    throw new Error('Method not implemented.');
  }
  update(entity: Expense): Expense {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number): void {
    throw new Error('Method not implemented.');
  }
}
