import Sequelize from 'sequelize';
import sequelize from '../dbConfig.js';

const Utilizatori=sequelize.define("Utilizatori", {
    UserID:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false
    },
    UserName:{
        type: Sequelize.STRING,
        allowNull: true
    },
    AdresaEmail:{
        type: Sequelize.STRING,
        allowNull: false
    },
    TipUser:{
        type: Sequelize.STRING,
        allowNull:false
    }
}, {timestamps:false})

export default Utilizatori;