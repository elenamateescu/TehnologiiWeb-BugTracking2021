import Sequelize from 'sequelize';
import sequelize from '../dbConfig.js';

const Istoric= sequelize.define("Istoric",{
    BugID:{
        type: Sequelize.INTEGER,
        allowNull:false

    },
    DataBug:{
        type: Sequelize.STRING,
        allowNull:false
    },

    UserID: {
        type: Sequelize.INTEGER,
        allowNull:false
    },

    Modificare:{
        type:Sequelize.STRING
    }
},  {timestamps:false})

export default Istoric;