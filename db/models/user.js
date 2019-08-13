const Sequelize = require('sequelize');
const sequelize = require('../../db');
// const sequelize = new Sequelize();

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [0, 30]
        } 
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [0, 30]
        } 
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true,     
        validate: {
            len: [0, 50]
        }       
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
        timestamps: true,
        classMethodes: {
            associate: function(models){}
        }
});

module.exports = User;