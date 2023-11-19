import { BarChart, Doughnut, LineChart } from "@/components/data";

export default  function Dashboard (){
    return (
      <>
      <h1>Dashboard</h1>
      <div className="flex justify-between w-full">
      <BarChart />
      <Doughnut />
      </div>
      <LineChart />
      </>
    )
  }
  