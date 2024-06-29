import { ObjectId } from "mongoose";

export  interface RecyclerInterface extends Document{
    eWasteTypes:Array<string>;
    processingMethods:Array<string>;
    serviceAreas:Array<string>;
    recyclerName:string;
    recyclerId:ObjectId;
    timeSlots:Array<Date>
}