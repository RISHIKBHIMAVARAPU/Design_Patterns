import { DbConnection } from "./DbConnection.js";

export class DbConnectionPoolManager{
    freeConnections : Array<DbConnection>;
    connectionsInUse : Array<DbConnection>;
    MAX_POOL_SIZE : number = 6;
    INITIAL_POOL_SIZE : number = 3;
    private static dbConnectionPoolManager : DbConnectionPoolManager;

    private constructor(){
        this.connectionsInUse = new Array<DbConnection>();
        this.freeConnections = new Array<DbConnection>();

        for(let i = 0;i<this.INITIAL_POOL_SIZE;i++){
            this.freeConnections.push(new DbConnection("db connection url : "+i));
        }
    }

    static getInstance(){
        if(this.dbConnectionPoolManager==null){
            this.dbConnectionPoolManager = new DbConnectionPoolManager();
        }
        return this.dbConnectionPoolManager;
    }
    getConnection(){

        if(this.freeConnections.length ==0 && this.connectionsInUse.length<this.MAX_POOL_SIZE){
            console.log("currently total connections are less than max so adding");
            
            this.freeConnections.push(new DbConnection("db connection"));
        }

        let dbConnection = this.freeConnections.pop();

        if(dbConnection!=null)
        this.connectionsInUse.push(dbConnection);

        return dbConnection;
    }

    releaseConnection(dbConnection:DbConnection){
        console.log("connection use length before releasing "+this.connectionsInUse.length);
        
        this.connectionsInUse = this.connectionsInUse.filter((connection)=>connection!=dbConnection)

        console.log("connection use length after releasing "+this.connectionsInUse.length);
        
        this.freeConnections.push(dbConnection);
    }
}