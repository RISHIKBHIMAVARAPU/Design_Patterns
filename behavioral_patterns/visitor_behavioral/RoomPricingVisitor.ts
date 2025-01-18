import { DeluxeRoom } from "./DeluxeRoom.js";
import { DoubleRoom } from "./DoubleRoom.js";
import { IRoomVisitor } from "./IRoomVisitor.js";
import { SingleRoom } from "./SingleRoom.js";

export class RoomPricingVisitor implements IRoomVisitor{

    visit(singleRoomObj: SingleRoom): void;
    visit(doubleRoomObj: DoubleRoom): void;
    visit(deluxeRoomObj: DeluxeRoom): void;

    visit(roomObj: unknown): void {
        if(roomObj  instanceof SingleRoom){
            console.log("inside single room pricing");
            roomObj.roomPrice=100;
        }else if (roomObj instanceof DoubleRoom){
            console.log("inside double room pricing");
            roomObj.roomPrice=200;
        }else if(roomObj instanceof DeluxeRoom){
            console.log("inside deluxe room pricing");
            roomObj.roomPrice= 400;
        }
    } 
}