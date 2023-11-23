import { CiExport } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import { IoIosAdd } from "react-icons/io";
export const ActionBtns = ({handleOpenForm }) =>{
    return (
        <div className="relative flex justify-end text-lg text-white w-full  gap-0.5 mr-5 mt-7 max-md:justify-center max-md:mr-2.5">
        <button className="hover:opacity-50 flex items-center justify-center text-black border border-[color:var(--light-gray-light-gray-2,#DDE2E4)] bg-white p-4 mt-2 py-1 rounded-md border-solid self-start cursor-pointer">
          <LuFilter className="w-6 h-6 mr-2" />
          <span className="text-sm">Filter</span>
        </button>
        <button className="hover:opacity-50 flex items-center justify-center text-black border border-[color:var(--light-gray-light-gray-2,#DDE2E4)] bg-white p-4 mt-2 py-1 rounded-md border-solid self-start cursor-pointer">
          <CiExport className="w-6 h-6 mr-2" />
          <span className="text-sm">Export</span>
        </button>
        <button
        onClick={handleOpenForm}
        className="hover:opacity-50 flex items-center justify-center bg-blue-500 p-4 mt-2 py-1 rounded-md self-start cursor-pointer"
      >
        <IoIosAdd className="w-6 h-6 mr-2" />
        <span className="text-sm">Add New</span>
      </button>
      </div>
    )
}