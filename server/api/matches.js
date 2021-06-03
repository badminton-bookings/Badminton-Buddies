const router = require('express').Router();
const { Match } = require('../db');
module.exports = router;

// GET ALL MATCHES /api/matches
router.get('/', async (req, res, next) => {
    try {
      const allMatches = await Match.findAll();
      res.json(allMatches);
    } catch (err) {
      next(err);
    }
  });

  // CREATE NEW MATCH /api/matches
  router.post('/', async (req, res, next) => {
    try {
      const newMatch = await Match.create(req.body);
      res.json(newMatch);
    } catch (error) {
      next(error);
    }
  });
  // EDIT MATCH /api/matches/matchId
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
  
  // DELETE MATCH /api/matches
  router.delete('/id', async (req, res, next) => {
    try {
      const deletedMatch = await Match.delete()
      res.sendStatus(200)
    } catch (error) {
      next(error)
    }
  })
  
