const usersService = (function() {
    
    console.log('created');
    
    let users = [
        {id: 6, firstname: 'peter', lastname: 'pan', password: 'blablabla',  email: 'peter@pan.com'},
    ];

    function addUser(newUser) {
        users.push(newUser);
        console.log('updated user list');
        console.log(users)  
    }

    function getUser(credentials) {
        const user = users.find((user) => {
            return user.firstname === credentials.firstname;
        });

        if (user) {
            console.log('user found');
            
            return user;
        } else {
            console.log('user not found');
        }
    }

    return {
        addUser,
        getUser
    }
}());


module.exports = usersService;

