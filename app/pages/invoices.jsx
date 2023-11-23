"use client"
import { ActionBtns } from "@/components/actionBtns";
import { Cards } from "@/components/cards";
import { CollabsedTable } from "@/components/tables";
import { Invoices as InvoicesData, overview  } from "@/data/info";
import InvoiceFormModal from "@/components/invoicesForm";
import { useState } from "react";

export default  function Invoices (){
  const [addNew , setAddNew ] = useState(false)
  return (
    <div className="">
    <h1>Invoices</h1>
    <div className="relative flex w-full gap-4 justify-around py-4">
      {overview.map((card , i )=> (
        <Cards card={card} i={i} key={i}/>
      ))}
      </div>
      <ActionBtns handleOpenForm={()=> setAddNew(true)} />
      <CollabsedTable data={InvoicesData} />
      {addNew && (
        <InvoiceFormModal isOpen={addNew} setIsOpen={setAddNew} />
      )}
      </div>
  )
}

