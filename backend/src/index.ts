import express from 'express';
import { categoryRouter } from './routes/category.routes';
import { expenseRouter } from './routes/expense.routes';
import { incomeRouter } from './routes/income.routes';
import { userRouter } from './routes/user.routes';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users/:userId/categories/:categoryId/expenses', expenseRouter);
app.use('/users/:userId/categories', categoryRouter);
app.use('/users/:userId/incomes', incomeRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
