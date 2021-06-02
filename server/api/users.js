const router = require('express').Router();
const { User } = require('../db');
// const { requireToken } = require('./authMiddleware');
module.exports = router;

// GET /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});


//GET api/users/login
router.get('/login', async (req, res, next) => {
  try {
    const loggedInUser = await User.findOne({
      where: {
        email: req.user.email,
      },
    });
    res.json(loggedInUser);
  } catch (error) {
    next(error);
  }
});


//CREATE api/users/
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});


//UPDATE api/users/userId
router.put('/:id', async (req, res, next) => {
  try {
    const editedUser = await User.update(req.body, {
      where: {id: req.params.id}
    });
    res.json(editedUser);
  } catch (error) {
    next(error);
  }
});
