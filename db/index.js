const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize( config.DATABASE, config.USER, config.PASSWORD , {
    host: config.HOST,
    dialect: 'postgres',
    //todo add connection pool in production
});

// module.exports = sequelize;
module.exports = sequelize;
// module.exports = sequelize.authenticate();
                                                                        