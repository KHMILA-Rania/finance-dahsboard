import mongoose, { get } from "mongoose";
import {loadType} from "mongoose-currency";

const Schema =mongoose.Schema;
loadType(mongoose);

const daySchema= new Schema({
    date:String,
    revenue:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    expenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
  
  

});


const monthSchema = new Schema({
    month:String,
    revenue:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    expenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    operationalExpenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },
    nonOperationalExpenses:{
        type:mongoose.Types.Currency,
        Currency:"USD",
        get:(v)=>v/100
    },

},
{toJSON:{getters:true}}
)

const KPISchema=new Schema(
    {
        toyalPRofit:{
            type: mongoose.Types.Currency,
            Currency:"USD",
            get: (v)=>v/100
        },
        toyalExpenses:{
            type: mongoose.Types.Currency,
            Currency:"USD",
            get: (v)=>v/100
        },
        expensesByCategory:{
            type: Map,
            of:{
                type: mongoose.Types.Currency,
                Currency:"USD",
                get: (v)=>v/100
            }
        },
        monthlyData:[monthSchema],
        dailyData:[daySchema],
    },
    {
       timestamps:true, toJSON:{getters:true}
    }
);
const KPI=mongoose.model("KPI",KPISchema);

export default KPI;