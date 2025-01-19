import { AcCommandInvoker } from "./AcCommandInvoker.js";
import { AcReceiver } from "./AcReceiver.js";
import { AcTurnOffCommand } from "./AcTurnOffCommand.js";
import { AcTurnOnCommand } from "./AcTurnOnCommand.js";

const acReceiver= new AcReceiver();
const acTurnOnCommand = new AcTurnOnCommand(acReceiver);
const acCommandInvoker = new AcCommandInvoker(acTurnOnCommand);
acCommandInvoker.pressButton();


const acTurnOffCommand = new AcTurnOffCommand(acReceiver);
acCommandInvoker.setAcCommand(acTurnOffCommand);
acCommandInvoker.pressButton();

acCommandInvoker.undo();
acCommandInvoker.undo();


// where we need to deal with commands we can use this pattern
// it has 4 parts (receiver,command,invoker,client)
// here we have implemented undo command also in it


// provides good abstraction
// undo-redo  functionality can be implemented
// easy for the code maintenance

// for abstraction part : we can also achieve it in facade
// for undo-redo : we can also do it memento
