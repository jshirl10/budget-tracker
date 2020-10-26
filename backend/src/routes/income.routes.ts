import express from 'express';

/**
 * A router for all paths beginning with /users/:userId/incomes
 */
const incomeRouter = express.Router({ mergeParams: true });

incomeRouter.post('/', (req, res) => {
  res.send('create income');
});

incomeRouter.get('/', (req, res) => {
  res.send('get incomes');
});

incomeRouter.put('/:incomeId', (req, res) => {
  res.send('edit income');
});

incomeRouter.delete('/:incomeId', (req, res) => {
  res.send('delete income');
});

export { incomeRouter };
