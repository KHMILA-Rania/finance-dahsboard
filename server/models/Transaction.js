import mongoose, { get } from "mongoose";
import {loadType} from "mongoose-currency";

const Schema =mongoose.Schema;
loadType(mongoose);



const TransactionSchema=new Schema(
    {
        buyer:{
            type: mongoose.Types.Currency,
            Currency:"USD",
            get: (v)=>v/100
        },
        animationTimmingFunction:{
            type: mongoose.Types.Currency,
            Currency:"USD",
            get: (v)=>v/100
        },
        amount:{
            type: mongoose.Types.Currency,
            Currency:"USD",
            get: (v)=>v/100
        },
        ProductIds:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Product"
            }
    ],
     
    },
    {
       timestamps:true, toJSON:{getters:true}
    }
);
const Transaction =mongoose.model("Transaction",TransactionSchema);

export default Product;