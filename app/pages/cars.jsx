import { StaticTable } from "@/components/tables";
import { Cards } from "@/components/cards";
import { ActionBtns } from "@/components/actionBtns";

const dataArray = [
  {
    ID: '#1',
    AMOUNT: '$9.54',
    STATUS: 'Active',
    VEHICLE: 'KIA RIO',
    PLATE_NUMBER: 'R S L 8656 ر س ل',
    CUSTOMER: 'manhhachkt08@gmail.com',
    DATE: 'Dec 30, 09:42 PM',
  },
  {
    ID: '#2',
    AMOUNT: '$9.54',
    STATUS: 'Active',
    VEHICLE: 'KIA RIO',
    PLATE_NUMBER: 'R S L 8656 ر س ل',
    CUSTOMER: 'manhhachkt08@gmail.com',
    DATE: 'Dec 30, 09:42 PM',
  },
  {
    ID: '#3',
    AMOUNT: '$9.54',
    STATUS: 'Active',
    VEHICLE: 'KIA RIO',
    PLATE_NUMBER: 'R S L 8656 ر س ل',
    CUSTOMER: 'manhhachkt08@gmail.com',
    DATE: 'Dec 30, 09:42 PM',
  },
  {
    ID: '#4',
    AMOUNT: '$9.54',
    STATUS: 'Active',
    VEHICLE: 'KIA RIO',
    PLATE_NUMBER: 'R S L 8656 ر س ل',
    CUSTOMER: 'manhhachkt08@gmail.com',
    DATE: 'Dec 30, 09:42 PM',
  },
  {
    ID: '#5',
    AMOUNT: '$9.54',
    STATUS: 'Active',
    VEHICLE: 'KIA RIO',
    PLATE_NUMBER: 'R S L 8656 ر س ل',
    CUSTOMER: 'manhhachkt08@gmail.com',
    DATE: 'Dec 30, 09:42 PM',
  },
  {
    ID: '#6',
    AMOUNT: '$9.54',
    STATUS: 'Active',
    VEHICLE: 'KIA RIO',
    PLATE_NUMBER: 'R S L 8656 ر س ل',
    CUSTOMER: 'manhhachkt08@gmail.com',
    DATE: 'Dec 30, 09:42 PM',
  }
];
const tableThData = [
"ID",
"AMOUNT",
"VEHICLE",
"PLATE NUMBER",
"CUSTOMER",
"DATE",
]
const cards = [
  {title:'Total Cars',number: `120`},
  {title:'Rented Cars',number: `70`},
  {title:'Available Cars',number: `50`},
]

export default function Cars (){
  return (
    <div className="">
    <h1>Cars</h1>
    <div className="relative flex w-full gap-4 justify-around py-8">
      {cards.map((card , i )=> (
        <Cards card={card} key={i}/>
      ))}
      </div>
      <ActionBtns />
      <StaticTable tableTh={tableThData} data={dataArray} />
      </div>
  )
}
