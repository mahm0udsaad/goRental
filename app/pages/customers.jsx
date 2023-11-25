"use client"
import { Cards } from "@/components/cards"
import { Customers as CustomersData } from "@/data/info"
import { CollabsedTable, DaynamicTable } from "@/components/tables";
import { ActionBtns } from "@/components/actionBtns";
import { useState } from "react";

const cards = [
  {title:'Total Customers',number: `120`, color:'black'},
  {title:'Active Customers',number: `70`, color:'#ff8f00'},
  {title:'Inactive Customers',number: `50`, color:'green'},
]
export default function Customers (){
  const [formData , setFormData ] = useState({
    FullName: "",
    Category: "",
    IDNumber: "",
    IDExpirationDate: "",
    Mobile: "",
    Debt: 0.00
  })
  return (
    <div className="">
    <h1>Customers</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {cards.map((card , i )=> (
        <Cards card={card} key={i}/>
      ))}
      </div>
      <ActionBtns formTitle={"New Customer"} data={CustomersData} fileName={"Customers"} formData={formData} setFormData={setFormData} />
      <CollabsedTable data={CustomersData} />
      </div>
  )
}
