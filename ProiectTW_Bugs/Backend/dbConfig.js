import Sequelize from 'sequelize';

const sequelize=new Sequelize({
    dialect:'mssql',
    database: 'ProiectBugs',
    username:'sa',
    host:'localhost',
    port:'51688',
    password:'1234',
    validateBulkLoadParameters: true,
    define:{
        timestamp:false,
        freezeTableName:true
    }
})

export default sequelize;