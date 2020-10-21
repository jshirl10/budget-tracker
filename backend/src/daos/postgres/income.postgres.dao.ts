import { BaseIncome, Income } from '../../models/income';
import { IncomeDao } from '../dao';

export class IncomePgDao implements IncomeDao {
  create(entity: BaseIncome): Income {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Income {
    throw new Error('Method not implemented.');
  }
  update(entity: Income): Income {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number): void {
    throw new Error('Method not implemented.');
  }
}
