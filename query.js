const sequelize = require('db.js');
const Wp_post = require('wp_post.js');


const query = await Wp_post.findAll();

console.log(query);
