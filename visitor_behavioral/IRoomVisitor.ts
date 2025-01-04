import { DeluxeRoom } from "./DeluxeRoom.js";
import { DoubleRoom } from "./DoubleRoom.js";
import { SingleRoom } from "./SingleRoom.js";


export interface IRoomVisitor{
    visit(singleRoomObj : SingleRoom):void;
    visit(doubleRoomObj : DoubleRoom):void;
    visit(deluxeRoomObj : DeluxeRoom):void;
}

