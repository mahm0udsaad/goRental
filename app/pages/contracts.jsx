import { ActionBtns } from "@/components/actionBtns"
import { Cards } from "@/components/cards"
import { CollabsedTable } from "@/components/tables"
import { Contracts as ContractsData } from "@/data/info"
const ContractsCards =[
  {title: 'Total Contracts ' ,number: 50},
  {title: 'Opend Contracts ' ,number: 20},
  {title: 'Limited Contracts ' ,number: 30},
]

export default  function Contracts (){
  return (
    <div className="">
    <h1>Contracts</h1>
    <div className="relative flex w-full gap-4 justify-around py-8">
      {ContractsCards.map((card , i )=> (
        <Cards card={card} key={i}/>
      ))}
      </div>
      <ActionBtns />
      <CollabsedTable data={ContractsData} />
      </div>
  )
}
