const Sequelize = require('sequelize');
const sequelize = new Sequelize('user', 'db','pass',
options={
    dialect:'mysql',
    host: '',
    operatorsAliases: false,
});
sequelize
    .authenticate()
    .then(() => console.log('Authenticated'))
    .catch(() => console.log('Error Auth'));

sequelize.sync();
module.exports = sequelize;
