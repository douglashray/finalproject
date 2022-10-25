const router = require("express").Router();
const teams = require("../models/teams");

router.get("/team", (req, res, next) => {
  const search = req.query.search;
  console.log('req' + req);
  console.log('route search' + search);

  if(!search || search === undefined) {
    teams.find({search: { "$regex": search}})
    .exec((err, teams) => {
      teams.count().exec((err, count) => {
        if(err) return next(err);

        res.send(teams);
      });
    });
  } else {
    teams.find({})
    .exec((err, teams) => {
      if(err) return next(err);

        res.send(teams);
    });
  }
});

module.exports = router;