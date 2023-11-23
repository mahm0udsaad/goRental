import { CollabsedTable, StaticTable } from "@/components/tables";
import { Cards } from "@/components/cards";
import { ActionBtns } from "@/components/actionBtns";
import { VehicleDetails } from "@/data/info";

const cards = [
  {title:'Total Cars',number: `120` , color:'black'},
  {title:'Rented Cars',number: `70`, color:'#ff8f00'},
  {title:'Available Cars',number: `50` , color:'green'},
]

export default function Cars (){
  return (
    <div className="">
    <h1>Cars</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {cards.map((card , i )=> (
        <Cards card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns />
      <CollabsedTable data={VehicleDetails} />
      </div>
  )
}
