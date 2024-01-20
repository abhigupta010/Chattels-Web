import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { inventoryDetails } from '../Constant';

import { useSelector, useDispatch } from 'react-redux'
import { inventoryActions } from '../reducers/inventorySlice';

export default function EditInventory(props) {
    const dispatch = useDispatch()
    const [form , setform]=useState({
        id: props.inventorydata.id, 
    name: props.inventorydata.name,
    ram: props.inventorydata.ram,
    processor: props.inventorydata.processor,
    generation: props.inventorydata.generation,
    brand: props.inventorydata.brand,
    other: props.inventorydata.other

    })
    
    const submitHandler=(e)=>
    {
        e.preventDefault();
     
        dispatch(
            inventoryActions.edit({
                id: form.id, 
                name: form.name,
                ram: form.ram,
                processor: form.processor,
                generation: form.generation,
                brand: form.brand,
                other: form.other
            
            })
        );
        props.setshowinventorybox(false)

    }
    const changeHandler = (e) => {
        setform((prevData) => ({
          ...prevData,
          [e.target.id]: e.target.value,
        }));
      };
  return (
<Dialog  visible={props.showinventorybbox} style={{ width: '50vw' }} onHide={() =>props.setshowinventorybox(!props.showinventorybbox)}>
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
    <div className="flex flex-row gap-2">
        <label htmlFor="id">inventory_id</label>
        <InputText id="id" value={form.id} onChange={(e)=>changeHandler(e)}/>
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="name">inventory_name</label>
        <InputText id="name" value={form.name} onChange={(e)=>changeHandler(e)}/>
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="ram">ram</label>
        <InputText id="ram" value={form.ram} onChange={(e)=>changeHandler(e)} />
    </div>

    <div className="flex flex-row gap-2">
        <label htmlFor="processor">processor</label>
        <InputText id="processor" value={form.processor} onChange={(e)=>changeHandler(e)} />
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="generation">generation</label>
        <InputText id="generation" value={form.generation} onChange={(e)=>changeHandler(e)} />
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="brand">brand</label>
        <InputText id="brand" value={form.brand} onChange={(e)=>changeHandler(e)} />
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="other">other_details</label>
        <InputText id="other" value={form.other} onChange={(e)=>changeHandler(e)}/>
    </div>
    <Button type="submit" label="Submit" />

    </form>
</Dialog>
  )
}
