const router = require('express').Router();
const { Match } = require('../db');
module.exports = router;

//GET /api/matches
router.get('/', async (req, res, next) => {
    try {
      const allMatches = await Match.findAll();
      res.json(allMatches);
    } catch (err) {
      next(err);
    }
  });

  //GET /api/matches
  router.post('/', async (req, res, next) => {
    try {
      const newMatch = await Match.create(req.body);
      res.json(newMatch);
    } catch (error) {
      next(error);
    }
  });
  //GET /api/matches/matchId
  router.put('/:id', async (req, res, next) => {
    try {
      const editMatch = await Match.update(req.body, {
        where: {id: req.params.id}
      });
      res.json(editMatch);
    } catch (error) {
      next(error);
    }
  });
  
