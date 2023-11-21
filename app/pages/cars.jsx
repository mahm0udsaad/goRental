import { StaticTable } from "@/components/tables";
import { CiExport } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
import { Cards } from "@/components/cards";

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
export default  function Cars (){
    return (
      <div className="">
      <h1>Cars</h1>
      <div className="relative flex w-full gap-4 justify-around py-8">
        {cards.map((card , i )=> (
          <Cards card={card} key={i}/>
        ))}
        </div>
        <div className="relative flex justify-end text-lg text-white w-full  gap-0.5 mr-5 mt-7 max-md:justify-center max-md:mr-2.5">
        <button className="hover:opacity-50 flex items-center justify-center text-black border border-[color:var(--light-gray-light-gray-2,#DDE2E4)] bg-white p-4 mt-2 py-1 rounded-md border-solid self-start cursor-pointer">
          <LuFilter className="w-6 h-6 mr-2" />
          <span className="text-sm">Export</span>
        </button>
        <button className="hover:opacity-50 flex items-center justify-center text-black border border-[color:var(--light-gray-light-gray-2,#DDE2E4)] bg-white p-4 mt-2 py-1 rounded-md border-solid self-start cursor-pointer">
          <CiExport className="w-6 h-6 mr-2" />
          <span className="text-sm">Filter</span>
        </button>
        <button className="hover:opacity-50 flex items-center justify-center bg-blue-500 p-4 mt-2 py-1 rounded-md self-start cursor-pointer">
          <IoIosAdd className="w-6 h-6 mr-2" />
          <span className="text-sm">Add New</span>
        </button>
      </div>
        <StaticTable tableTh={tableThData} data={dataArray} />
        </div>
    )
  }
