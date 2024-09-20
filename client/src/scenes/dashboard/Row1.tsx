import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useMemo } from "react";
import { ResponsiveContainer, 
    AreaChart,CartesianGrid ,
XAxis,YAxis,Tooltip,ReferenceLine,Area} from "recharts";

type Props = {};

const Row1 = (props: Props) => {
const {data}=useGetKpisQuery();
console.log("data",data);

const revenueExpenses=useMemo(()=>{
    return(
        data &&
        data[0].monthlyData.map(({month,revenue,expenses})=>{
           return { 
            name : month.substring(0,3),
            revenue : revenue,
            expenses : expenses}
        })
    );
},[data])

    return ( 
        <>
        <DashboardBox gridArea="a" >

            </DashboardBox>

            <ResponsiveContainer width={700} height="80%">
    <AreaChart
     data={data}
     width={500}
     height={400}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
      <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>


            <DashboardBox gridArea="b" >

            </DashboardBox>
            <DashboardBox gridArea="c" >

            </DashboardBox>
            </>
     );
}
 
export default Row1;