import {DataSource, DataSourceOptions} from "typeorm";
import {injectable} from "inversify";
import {QueryRunner} from "typeorm/query-runner/QueryRunner";

const dbConnectionOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sa',
    database: 'chronos-app',
    //autoLoadEntities: false,
    synchronize: false,
}

@injectable()
export class DBService {
    protected readonly connection: DataSource

    constructor() {
        this.connection = new DataSource(dbConnectionOptions)
    }

    async initialize() {
        try {
            await this.connection.initialize()
            console.log("Data Source has been initialized")
        } catch (err) {
            console.error("Error during Data Source initialization", err)
        }
    }

    get getConnection() {
        return this.connection
    }
}

