const router = require("express").Router();
module.exports = router;


router.get('/', async (req, res, next) => {
  try {
    const stats = await Stat.findAll();
    res.json(stats);
  } catch (error) {
    next(error);
  }
});