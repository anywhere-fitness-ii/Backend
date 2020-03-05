const router = require("express").Router();

const db = require('../data/db-config.js');

const Users = require("../users/users-model.js");


//get all users info: 
router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
})

//get user info by id
router.get('/:id', (req, res) => {
    const {id} = req.params
    Users.findById(id)
    .then(user => {
        if(user) {
            res.json(user)
        } else {
            res.status(404).json({message: "could not find user with given id"})
        }

    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "server error"})
    })
})

//delete user
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Users.removeUser(id)
    .then(deleted => {
        if(deleted) {
            res.json({removed: deleted})
        } else {
            res.status(404).json({message: "could not find user with matching id"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "server error deleting user"})
    })
})


module.exports = router;