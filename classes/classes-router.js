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


//edit class working but not returning edited class object
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Classes.findClassById(id)
    .then(classs => {
        if(classs) {
            Classes.editClass(changes, id)
            .then(updatedClass => {
                res.json(updatedClass);
            })
        } else {
            res.status(404).json({message: "couldn't find class with given id"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "server error editing class"})
    });
});

//delete class => working but not returning full object
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Classes.removeClass(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: "could not find class with matching id"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "server error deleting class"})
    })
})

  
  module.exports = router;

  
  
