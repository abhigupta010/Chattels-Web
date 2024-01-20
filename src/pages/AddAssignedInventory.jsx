import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { empDetails } from '../Constant';
import { InputNumber } from 'primereact/inputnumber';
import { useSelector, useDispatch } from 'react-redux'
import { assignedInventoryActions } from '../reducers/assignInventory';
const AddAssignedInventory = (props) => {
    const dispatch = useDispatch()

    const [form , setform]=useState({
        id:'',
        emp_id: '',
        emp_name: '',
        laptop_type: '',
        laptop_id: '',
        charger_type: '',
        charger_id: '',
        other_assest: ''

    })

    const submitHandler=(e)=>
    {
        e.preventDefault();
     
        dispatch(
            assignedInventoryActions.add({
                id: form.id, 
    emp_id: form.emp_id,
    emp_name: form.emp_name,
    laptop_type: form.laptop_type,
    laptop_id: form.laptop_id,
    charger_type: form.charger_type,
    charger_id: form.charger_id,
    other_assest: form.other_assest
            })
        );
        props.setShowAssignInventory(false)

    }
    const changeHandler = (e) => {
        setform((prevData) => ({
          ...prevData,
          [e.target.id]: e.target.value,
        }));
      };

  return (
    <Dialog  visible={props.showAssignedInventor} style={{ width: '50vw' }} onHide={() =>props.setShowAssignInventory(!props.showAssignedInventor)}>
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
    <div className="flex flex-row gap-2">
        <label htmlFor="id">id</label>
        <InputText id="id" value={form.id} onChange={(e)=>changeHandler(e)}/>
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="emp_id">emp_id</label>
        <InputText id="emp_id" value={form.emp_id} onChange={(e)=>changeHandler(e)}/>
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="laptop_type">laptop_type</label>
        <InputText id="laptop_type" value={form.laptop_type} onChange={(e)=>changeHandler(e)} />
    </div>

    <div className="flex flex-row gap-2">
        <label htmlFor="laptop_id">laptop_id</label>
        <InputText id="laptop_id" value={form.laptop_id} onChange={(e)=>changeHandler(e)} />
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="charger_type">charger_type</label>
        <InputText id="charger_type" value={form.charger_type} onChange={(e)=>changeHandler(e)} />
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="charger_id">charger_id</label>
        <InputText id="charger_id" value={form.charger_id} onChange={(e)=>changeHandler(e)} />
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="other_assest">other_assest</label>
        <InputText id="other_assest" value={form.other_assest} onChange={(e)=>changeHandler(e)}/>
    </div>
    <Button type="submit" label="Submit" />

    </form>
</Dialog>
  )
}
export default AddAssignedInventory;

