const Sequelize = require('sequelize');
const sequelize = new Sequelize('#username#', '#database#','#password#',
options={
    dialect:'mysql',
    host: '#hostname#',
    operatorsAliases: false,
});
sequelize
    .authenticate()
    .then(() => console.log('Authenticated'))
    .catch(() => console.log('Error Auth'));

sequelize.sync();
module.exports = sequelize;
