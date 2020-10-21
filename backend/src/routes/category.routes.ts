import express from 'express';

const categoryRouter = express.Router({ mergeParams: true });

categoryRouter.post('/', (req, res) => {
  res.send('create category');
});

categoryRouter.get('/', (req, res) => {
  res.send('get categories');
});

categoryRouter.get('/:categoryId', (req, res) => {
  res.send('get category');
});

categoryRouter.put('/:categoryId', (req, res) => {
  res.send('edit category');
});

categoryRouter.delete('/:categoryId', (req, res) => {
  res.send('delete category');
});

export { categoryRouter };
