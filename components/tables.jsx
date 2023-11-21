import React from 'react';
import { IoIosMore } from "react-icons/io";

export const RentalRows = ({ rentalData  }) => {
    const generateRandomCarName = () => {
      const carNames = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan'];
      return carNames[Math.floor(Math.random() * carNames.length)];
    };
  
    return (
      <div className="relative shadow-md sm:rounded-lg">
        <h1 className='text-lg py-3'>Most Rented Cars</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs  text-blue-900 uppercase bg-gray-50 ">
            <tr >
              <th scope="col" className="px-4 py-3">
                Plate Number
              </th>
              <th scope="col" className="px-4 py-3">
                Car Name
              </th>
              <th scope="col" className="px-4 py-3">
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
                  {car.carName ? car.carName : generateRandomCarName()}
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
      <div className="flex flex-col h-[50dvh] overflow-y-scroll overflow-x-hidden">
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
      <div className="flex flex-col h-[22rem] overflow-y-scroll overflow-x-hidden">
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