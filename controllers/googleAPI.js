const express         = require('express');
const router          = express.Router();


// Get a joke
router.get('/:id', (req,res)=>{
    jokes.find({ _id: req.params.id }, function(error, joke){
      res.send(joke);
    })
  });

  // Create new joke
router.post('/', (req,res)=>{
    jokes.create(req.body, (error, newJoke)=>{
      res.json(newJoke);
    })
  });

  // Edit joke (have to check, also have to edit joke in User's created jokes, as well as in favorited jokes for users)
  router.put('/:id', (req,res)=>{
    jokes.findByIdAndUpdate(req.params.id, req.body, { new: true },
    (err, update)=>{
      res.json(update);
    })
  });

  // Delete joke
  router.delete('/:id', (req,res)=>{
    jokes.findByIdAndRemove(req.params.id, (error, deletedJoke)=>{
      res.json(deletedJoke);
    })
  });



module.exports = router;
