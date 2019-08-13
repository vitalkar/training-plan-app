// const db = require('../../db');
const user = require('../../db/models/user');

function getUser(req, res, next) {
    console.log(req.query)
    console.log('READ');
    res.status(200).json({ text: 'resource read!' });

}

function createUser(req, res, next) {
    console.log('CREATE');
    console.log(req.body)
    user.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    })
    .then((result) => {
        if (result) {
            console.log(result)
            res.status(200).json({ text: 'resource created!'});
        }
    })
    .catch((err) => console.log(err));


}

function updateUser(req, res, next) {
    console.log('UPDATE');
    console.log(req.query)
    console.log(req.body.params)
    
    res.status(200).json({ text: 'resource updated!' });
}

function deleteUser(req, res, next) {
    console.log('DELETE');
    console.log(req.query)
    
    res.status(200).json({ text: 'resource deleted!' });

}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
};