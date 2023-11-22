import { BarChart, Doughnut, LineChart, TotalSummaryChart } from "@/components/data";
import { RentalRows } from "@/components/tables";
import { RentalExport } from '@/data/info';

export default  function Dashboard (){
    return (
      <div className="flexflex-col justify-between h-full">
      <div>
      <h1>Dashboard</h1>
      <div className="flex sm:flex-row flex-col sm:items-center justify-between w-full pt-4">
      <BarChart />
      <Doughnut />
      </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between pt-8">
      <div className="">
        <TotalSummaryChart />
      </div>
      <RentalRows rentalData={RentalExport} />
      <div className="w-[30%]">
        <h1>orders</h1>
        <LineChart />
      </div>
      </div>
      </div>
    )
  }
  

