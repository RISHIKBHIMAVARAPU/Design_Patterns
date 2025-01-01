import { DbConnectionPoolManager } from "./DbConnectionPoolManager.js";

let poolManager =  DbConnectionPoolManager.getInstance();

console.log(poolManager.getConnection());
console.log(poolManager.getConnection());
console.log(poolManager.getConnection());
console.log(poolManager.getConnection());
console.log(poolManager.getConnection());

let dbConnection =  poolManager.getConnection()
if(dbConnection!=null)
poolManager.releaseConnection(dbConnection);

console.log(poolManager.getConnection());


// we have a pool of objects 
// we can use any of the objects bases on availablility
// imporatant thing : pool manager class need to be singleton 
// else mulitple pool manager classes multiple connections

// pros : reduce the latency of creating and destroying of the frequently required objects
// reduce the latency as it uses pre initlaized connections


// cons : 
// adds applicaiton level complexity for managing the pools
// requires more memory for managing the pool
// resource leakage can happen if it not handled properly (consider an object is not returned)