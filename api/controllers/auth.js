const bcrypt = require('bcryptjs');
const usersService = require('../../services/dummyData');
const jwt = require('jsonwebtoken');


function register(req, res) {
    // console.log(req.body)
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({error: err});
        } else {
            usersService.addUser({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
            });

        }
    });
}

function login(req, res) {
    console.log(req.body)
    const user = usersService.getUser(req.body);
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
            return res.status(401).json({faild: 'Unauthorized Access'});
        } else if (result) {
            
            const JWTToken = jwt.sign({
                //fields
                id: user.id,
                email: user.email,
            },
            'secret',
            {
                expiresIn: '12h',
            });
            
            return res.status(200).json({
                success: 'Welcome to the JWT Auth',
                token: JWTToken
            });
        
        }
    });
}

module.exports = {
    register,
    login,
}