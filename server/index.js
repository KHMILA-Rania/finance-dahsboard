import express from 'express';
import bodyParser from 'body-parser';
import  cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import kpiRoutes from "./routes/kpi.js"
/*import kpi from "../server/routes/kpis.js"*/
import KPI from "./models/KPI.js";
import {kpis} from "../server/data/data.js";


dotenv.config();
const app= express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*Routes*/
app.use ("/kpi", kpiRoutes)


const Port=process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true,
    useUnifiedTopology: true,})
.then(async()=>{
    app.listen(Port,()=>console.log(`Server Port: ${Port}`));
    /*await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);*/
})

.catch(err=>{console.log(`${err} did not connect`)});

