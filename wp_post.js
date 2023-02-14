const { Sequelize, DataTypes } = require('sequelize');


//const sequelize = new Sequelize('sqlite::memory:');
const sequelize = new Sequelize('mssql::autorreformaps:40Psb29f7z1@mysql.autorreformapsb.com.br/autorreformaps');

const Wp_post = sequelize.define('Wp_post', {
    ID: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    post_author: {
        type: DataTypes.BIGINT,
        allowNull: false        
    },
    post_date: {
        type: DataTypes.DATETIME,
        allowNull: false        
    },
    post_content: {
        type: DataTypes.LONGTEXT,
        allowNull: false        
    },
    post_name: {
        type: DataTypes.VARCHAR,
        allowNull: false        
    },
    post_parent: {
        type: DataTypes.BIGINT,
        allowNull: false        
    }
});

console.log(Wp_post === sequelize.models.Wp_post);

