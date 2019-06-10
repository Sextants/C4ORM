import { Sequelize } from 'sequelize-typescript';
import TestTable from './DAO/TestTable'

const sequelize = new Sequelize({
    database : 'postgres',
    dialect : 'postgres',
    username : 'postgres',
    password : 'password',
    host : '0.0.0.0',
    port : 5432,
    pool : {
        max : 10,
        min : 0,
        acquire : 3000,
        idle : 10000
    },
    logging : false,
    // operatorsAliases : false,
    // timezone : "+08:00"
});


sequelize.addModels([__dirname + '/DAO/*.js']);

async function launch() {
    sequelize.models
    await TestTable.sync();
    await TestTable.create({
        test_time : (new Date())
    });

    let QueryRes = await TestTable.findAll();
    console.log(JSON.stringify(QueryRes, null, 4));
}

launch().catch((err) => {
  console.log(err);
});