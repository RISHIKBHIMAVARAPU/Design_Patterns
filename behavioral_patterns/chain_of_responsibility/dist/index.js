import { DebugLogger } from "./DebugLogger.js";
import { ErrorLogger } from "./ErrorLogger.js";
import { InfoLogger } from "./InfoLogger.js";
let loggerInst = new InfoLogger(new DebugLogger(new ErrorLogger(null)));
loggerInst.log(1, "this is info log testing");
// use cases of this pattern : logger,ATM, Vending machine
// there will be a chain in this desing pattern
// request goes through the chain and then gets full filled
// here the chain is info -> debug ->error
