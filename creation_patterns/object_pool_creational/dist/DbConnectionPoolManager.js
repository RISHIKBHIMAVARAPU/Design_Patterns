import { DbConnection } from "./DbConnection.js";
export class DbConnectionPoolManager {
    constructor() {
        this.MAX_POOL_SIZE = 6;
        this.INITIAL_POOL_SIZE = 3;
        this.connectionsInUse = new Array();
        this.freeConnections = new Array();
        for (let i = 0; i < this.INITIAL_POOL_SIZE; i++) {
            this.freeConnections.push(new DbConnection("db connection url : " + i));
        }
    }
    static getInstance() {
        if (this.dbConnectionPoolManager == null) {
            this.dbConnectionPoolManager = new DbConnectionPoolManager();
        }
        return this.dbConnectionPoolManager;
    }
    getConnection() {
        if (this.freeConnections.length == 0 && this.connectionsInUse.length < this.MAX_POOL_SIZE) {
            console.log("currently total connections are less than max so adding");
            this.freeConnections.push(new DbConnection("db connection"));
        }
        let dbConnection = this.freeConnections.pop();
        if (dbConnection != null)
            this.connectionsInUse.push(dbConnection);
        return dbConnection;
    }
    releaseConnection(dbConnection) {
        console.log("connection use length before releasing " + this.connectionsInUse.length);
        this.connectionsInUse = this.connectionsInUse.filter((connection) => connection != dbConnection);
        console.log("connection use length after releasing " + this.connectionsInUse.length);
        this.freeConnections.push(dbConnection);
    }
}
