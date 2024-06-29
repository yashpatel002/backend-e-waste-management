import { Schema ,Model,model} from "mongoose"
import { RecyclerInterface } from "../Recyclers/classes/recyclerClasses"
const recyclerSchema= new Schema({
    eWasteTypes:{
        type:[String],
        required:true
    },
    processingMethods:{
        type:[String],
        required:true
    },
    serviceAreas:{
        type:[String],
        required:true
    },
    recyclerName:{
        type:String
    },
    timeSlots:{
        type:[Date]
    }
    
});

const Recycler: Model<RecyclerInterface> = model<RecyclerInterface>('Recycler', recyclerSchema);
export default Recycler;