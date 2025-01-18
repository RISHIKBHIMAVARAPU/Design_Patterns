import { DoubleRoom } from "./DoubleRoom.js";
import { RoomPricingVisitor } from "./RoomPricingVisitor.js";
import { SingleRoom } from "./SingleRoom.js";
let singleRoom = new SingleRoom();
let doubleRoom = new DoubleRoom();
let roomPricing = new RoomPricingVisitor();
singleRoom.accept(roomPricing);
doubleRoom.accept(roomPricing);
// it allows to add new operations to the classes without changing their structure
// it uses double dispatch
// double dispatch : methods which needs to be invoked is based on both caller and the argument that is being passed
// here if we see in rooms lets consider singleRoom we are doing IRoomVisitor.visit(this); so both are responsible for calling the actual function
// what is a single disptach
// when we store the actual objects in its interface type and when we call the method it calls the acatual method
// this is single dispatch
// strategy vs visitor 
// in strategy we seprate out the algorithms
// here we sepearte out the operations , not the algorithms
