const router = require("express").Router();

const db = require('../data/db-config.js');


const Classes = require("../users/users-model.js");


//working as long as the person has logged in and passed in the token
router.get("/", (req, res) => {
    Classes.findClasses()
      .then(classes => {
        res.json(classes);
      })
      .catch(err => res.send(err));
  });

//get classes by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    Classes.findClassById(id)
    .then(classes => {
        if(classes) {
            res.json(classes)
        } else {
            res.status(404).json({message: "could not find project with given id"})
        }

    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "server error"})
    })
})

//add class
router.post('/', (req, res) => {
    const classData = req.body;
    db("classes")
    .insert(classData, "id")
    .then(ids => {
        db("classes")
        .where({id: ids[0]})
        .then(newClass => {
            res.status(201).json(newClass)
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "server error adding class"})
    })
});


// //edit class
// router.put('/:id', (req,res) => {

// })

  
  module.exports = router;

  
  
