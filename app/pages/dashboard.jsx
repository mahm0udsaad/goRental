import { BarChart, Doughnut, LineChart, TotalSummaryChart } from "@/components/data";
import { RentalRows } from "@/components/tables";
import { RentalExport } from '@/data/info';

export default  function Dashboard (){
    return (
      <div className="flex flex-col justify-between h-full">
      <div>
      <h1>Dashboard</h1>
      <div className="flex sm:flex-row flex-col sm:items-center justify-between w-full pt-4">
      <BarChart />
      <Doughnut />
      </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-between pt-8">
      <div className="w-[30%]">
        <TotalSummaryChart />
      </div>
      <RentalRows rentalData={RentalExport} />
      <div className="w-[40%]">
        <h1 className="text-center text-xl text-[#666666]">orders</h1>
        <LineChart />
      </div>
      </div>
      </div>
    )
  }
  

