import express from 'express';
import { DatabaseFactory } from '../database/database-factory';
import { BaseUser } from '../models/user';

const userRouter = express.Router({ mergeParams: true });

userRouter.post('/', async (req, res) => {
  const body = req.body;
  const { email, first_name, last_name, passwd } = body;
  const newUser: BaseUser = {
    email,
    first_name,
    last_name,
    passwd,
    unallocated_funds: 0,
  };
  const db = DatabaseFactory.getDatabase();
  const user = await db.addUser(newUser);
  res.send(user);
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
