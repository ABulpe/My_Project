const req = require('express/lib/request');
const User = require('../models/User.js');

const index = (req,res) =>{
    User.find({})
        .then(users =>{
            if(users.length) return res.status(200).send({users});
            return res.status(204).send({message: 'NO CONTENT'}) //Esto no lo imprime el navegador pero me ayuda a saber como va la cosa.
        }).catch(error => res.status(500).send({error}));
}

const show = (req, res) => {
    if (req.body.error) return res.status(500).send({error});
    if (req.body.users) return res.status(200).send({users});
    return res.status(404).send({message: 'NOT FOUND'});
}

const create = (req,res) =>{
    let user = new User(req.body);
    user.save().then(user => res.status(201).send({user})).catch(error => res.status(500).sed({error}));
}

const update = (req,res) =>{
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'})
    let user = req.body.users[0];
    user = Object.assign(user,req.body)
    user.save().then(user => res.status(200).send({message: 'UPDATED', user})).catch(error => res.status(500).send(error));
}

const remove = (req,res) =>{
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.users) return res.status(404).send({message: 'NOT FOUND'})
    req.body.users[0].remove().then(user => res.status(200).send({message: 'REMOVED', user})).catch(error => res.status(500).send(error));

}

//Middleware 
const find = (req,res,next) =>{
    
    let query = {};
    query[req.params.key] = req.params.value;
    User.find(query).then(users => {
        if(!users.length) return next();
        req.body.user = users;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}