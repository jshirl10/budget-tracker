import express from 'express';

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', (req, res) => {
  res.send('create user');
});

userRouter.get('/:userId', (req, res) => {
  res.send('get user');
});

userRouter.put('/:userId', (req, res) => {
  res.send('edit user');
});

userRouter.delete('/:userId', (req, res) => {
  res.send('delete user');
});

userRouter.get('/:userId/expenses', (req, res) => {
  res.send('Get expenses');
});

userRouter.post('/:userId/login', (req, res) => {
  res.send('Login user');
});

export { userRouter };
