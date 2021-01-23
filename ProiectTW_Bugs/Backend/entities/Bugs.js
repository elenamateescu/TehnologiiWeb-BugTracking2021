import Sequelize from 'sequelize';
import sequelize from '../dbConfig.js';

const Bugs= sequelize.define("Bugs",{
    BugId:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement : true,
        allowNull: false
    },
    Denumire:{
        type:Sequelize.STRING,
        allowNull:false
    },
    StatusID:{
        type: Sequelize.INTEGER,
        allowNull:false

    },
    DescriereBug:{
        type:Sequelize.STRING,
        allowNull:true
    }
}, {timestamps:false});

export default Bugs;

