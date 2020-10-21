import express from 'express';

const expenseRouter = express.Router({ mergeParams: true });

expenseRouter.post('/', (req, res) => {
  res.send('create expense');
});

expenseRouter.get('/', (req, res) => {
  res.send('get expenses');
});

expenseRouter.put('/:expenseId', (req, res) => {
  res.send('edit expense');
});

expenseRouter.delete('/:expenseId', (req, res) => {
  res.send('delete expense');
});

export { expenseRouter };
