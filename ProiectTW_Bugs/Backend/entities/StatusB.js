import Sequelize from 'sequelize';
import sequelize from '../dbConfig.js';

const StatusB= sequelize.define("StatusB", {
    StatusID: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false
    },
    TextStatus:{
        type: Sequelize.STRING,
        allowNull:false
    }
},  {timestamps:false})

export default StatusB;