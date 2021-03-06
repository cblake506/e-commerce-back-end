const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categoryDb = await Category.findAll();
  res.status(200).json(categoryDb);
});

router.get('/:id', async (req, res) => {
  const categoryDb = await Category.findByPk(req.params.id);
  res.status(200).json(categoryDb);
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
