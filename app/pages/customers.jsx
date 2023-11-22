import { Cards } from "@/components/cards"
import { Customers as CustomersData } from "@/data/info"
import { DaynamicTable } from "@/components/tables";
import { CiExport } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import { ActionBtns } from "@/components/actionBtns";

const cards = [
  {title:'Total Customers',number: `120`, color:'black'},
  {title:'Active Customers',number: `70`, color:'#ff8f00'},
  {title:'Inactive Customers',number: `50`, color:'green'},
]
const tableThData = [
  "ID",
  "AMOUNT",
  "VEHICLE",
  "PLATE NUMBER",
  "CUSTOMER",
  "DATE",
  ]
export default function Customers (){
  return (
    <div className="">
    <h1>Customers</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {cards.map((card , i )=> (
        <Cards card={card} key={i}/>
      ))}
      </div>
      <ActionBtns />
      <DaynamicTable data={CustomersData} />
      </div>
  )
}
