"use client"
import React, { useState } from 'react';
import { IoIosMore } from "react-icons/io";

export const RentalRows = ({ rentalData  }) => {
      const carNames = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
  
    return (
      <div className="relative">
        <h1 className='text-sm py-3'>Most Rented Cars</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs  text-blue-900 uppercase bg-gray-50 ">
            <tr >
              <th scope="col" className="px-2 py-3">
                Plate Number
              </th>
              <th scope="col" className="px-2 py-3">
                Car Name
              </th>
              <th scope="col" className="px-2 py-3">
                Frequency
              </th>
            </tr>
          </thead>
          <tbody>
            {rentalData.map((car, index) => (
              <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b  text-blue-900`}>
                <td className="px-4 py-4 font-medium whitespace-nowrap">
                  {car.PlateNumber}
                </td>
                <td className="px-4 py-4">
                  {carNames[index]}
                </td>
                <td className="px-4 py-4 flex justify-center">
                  {car.RentalFrequency}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export const StaticTable = ({ data ,tableTh}) => {
  return (
    <div className="flex flex-col h-[55dvh] overflow-y-scroll overflow-x-hidden">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {tableTh && tableTh.map((item , i )=>(
                    <th key={i} scope="col" className="px-6 py-4">{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b transition duration-300 ease-in-out hover:bg-[#253665] hover:text-white"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{item.ID}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.AMOUNT}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.VEHICLE}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.PLATE_NUMBER}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.CUSTOMER}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.DATE}</td>
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer"><IoIosMore /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export const DaynamicTable = ({ data }) => {
  return (
    <div className="flex flex-col h-[55dvh] overflow-y-scroll overflow-x-hidden">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {Object.keys(data[0]).map((item , i )=>(
                    <th key={i} scope="col" className="px-6 py-4">{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b transition duration-300 ease-in-out hover:bg-[#253665] hover:text-white"
                  >
                    {item && Object.values(item).map((tdItem , i )=>(
                      <td key={i} className="whitespace-nowrap px-6 py-4 font-medium">{tdItem}</td>
                    ))}
                    <td className="whitespace-nowrap px-6 py-4 cursor-pointer"><IoIosMore /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CollabsedTable = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (index) => {
    const updatedExpandedRows = [...expandedRows];
    if (updatedExpandedRows.includes(index)) {
      updatedExpandedRows.splice(updatedExpandedRows.indexOf(index), 1);
    } else {
      updatedExpandedRows.push(index);
    }
    setExpandedRows(updatedExpandedRows);
  };

  const tableHeaders = Object.keys(data[0]).slice(0, 6); // Displaying only the first 6 headers

  return (
    <div className="flex flex-col h-[55dvh] overflow-y-scroll overflow-x-hidden">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  {tableHeaders.map((item, i) => (
                    <th key={i} scope="col" className="px-6 py-4">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-[#253665] hover:text-white"
                      onClick={() => toggleRow(index)}
                    >
                      {tableHeaders.map((header, i) => (
                        <td  key={i} className="whitespace-nowrap px-6 py-4 font-medium">
                          {item[header] === "open" ? (
                            <span className='bg-green-500 text-white p-2 rounded-full'>{item[header]}</span>
                          ):(
                           item[header]
                          )}
                        </td>
                      ))}
                      <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                        <IoIosMore />
                      </td>
                    </tr>
                    {expandedRows.includes(index) && (
                    <tr className="bg-gray-100">
                      <td colSpan={tableHeaders.length + 1} className="border-t border-gray-200 p-4">
                        {/* Render expanded content here */}
                        {/* For example, you might map and display remaining items */}
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(item)
                            .slice(6) // Displaying items after the first 6
                            .map(([key, value], idx) => (
                              <div key={idx} className="flex py-1">
                                <div className="w-1/2 font-bold">{key}:</div>
                                <div className="w-1/2">{value}</div>
                              </div>
                            ))}
                        </div>
                      </td>
                    </tr>
                  )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};