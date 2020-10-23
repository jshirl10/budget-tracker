export type Expense = {
  expense_id: number;
  category_id: number;
  amount: number;
  expense_date: Date;
  summary: string | null;
};

export type CreateExpensePayload = Omit<Expense, 'expense_id' | 'category_id'>;
export type BaseExpense = Omit<Expense, 'expense_id'>;
