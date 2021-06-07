const router = require('express').Router();
const { Location } = require('../db');
module.exports = router;

//GET ALL LOCATIONS /api/locations
router.get('/', async (req, res, next) => {
    try {
      const allLocations = await Location.findAll();
      res.json(allLocations);
    } catch (err) {
      next(err);
    }
  });


//GET SINGLE LOCATION /api/locations/locationId
router.get('/:id', async (req, res, next) => {
  try {
    const singleLocation = await Location.findByPk(req.params.id);
    res.json(singleLocation);
  } catch (err) {
    next(err);
  }
});

  //CREATE NEW LOCATION /api/locations
  router.post('/', async (req, res, next) => {
    try {
      const newLocation = await Location.create(req.body);
      res.json(newLocation);
    } catch (error) {
      next(error);
    }
  });

  //GET /api/locations/locationId
  router.put('/:id', async (req, res, next) => {
    try {
      const editLocation = await Location.update(req.body, {
        where: {id: req.params.id}
      });
      res.json(editLocation);
    } catch (error) {
      next(error);
    }
  });


