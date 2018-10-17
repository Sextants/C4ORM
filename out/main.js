"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const TestTable_1 = require("./DAO/TestTable");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'postgres',
    dialect: 'postgres',
    username: 'postgres',
    password: 'password',
    host: '0.0.0.0',
    port: 5432,
    pool: {
        max: 10,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    logging: false,
    operatorsAliases: false,
});
sequelize.addModels([__dirname + '/DAO/*.js']);
function launch() {
    return __awaiter(this, void 0, void 0, function* () {
        sequelize.models;
        yield TestTable_1.default.sync();
        yield TestTable_1.default.create({
            test_time: (new Date())
        });
        let QueryRes = yield TestTable_1.default.findAll();
        console.log(JSON.stringify(QueryRes, null, 4));
    });
}
launch();
//# sourceMappingURL=main.js.map