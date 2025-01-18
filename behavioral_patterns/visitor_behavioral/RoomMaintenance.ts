import { DeluxeRoom } from "./DeluxeRoom.js";
import { DoubleRoom } from "./DoubleRoom.js";
import { IRoomVisitor } from "./IRoomVisitor.js";
import { SingleRoom } from "./SingleRoom.js";

export class RoomMaintenance implements IRoomVisitor{
    visit(singleRoomObj: SingleRoom): void;
    visit(doubleRoomObj: DoubleRoom): void;
    visit(deluxeRoomObj: DeluxeRoom): void;

    visit(roomObj: unknown): void {
        if(roomObj instanceof SingleRoom){
            console.log("inside single room maintenace info");
        }else if(roomObj instanceof DoubleRoom){
            console.log("inside double room maintenace info");
        }
        else if(roomObj instanceof DeluxeRoom){
            console.log('inside the double room maintenance info');
        }
    }
}