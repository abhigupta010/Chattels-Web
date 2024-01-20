import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { empDetails } from '../Constant';
import { InputNumber } from 'primereact/inputnumber';
import { useSelector, useDispatch } from 'react-redux'
import { empActions } from '../reducers/empslice';

export default function EditEmployeeForm(props) {
    const [empdata, setempdata]=useState(empDetails);
    const dispatch = useDispatch()
    const [form , setform]=useState({
        emp_id: props.empdata.emp_id,
        designation:props.empdata.designation,
        emp_name: props.empdata.emp_name,
        phone:props.empdata.phone,
        email:props.empdata.email,
        project_assigned:props.empdata.project_assigned,
        other_details: props.empdata.other_details

    })
    
    const submitHandler=(e)=>
    {
        e.preventDefault();
     
        dispatch(
            empActions.edit({
                emp_id: form.emp_id,
                designation:form.designation,
                emp_name: form.emp_name,
                phone:form.phone,
                email:form.email,
                project_assigned:form.project_assigned,
                other_details: form.other_details
            })
        );
        props.setshoweditbox(!props.showeditbbox)

    }
    const changeHandler = (e) => {
        setform((prevData) => ({
          ...prevData,
          [e.target.id]: e.target.value,
        }));
      };
  return (
<Dialog  visible={props.showeditbbox} style={{ width: '50vw' }} onHide={() =>props.setshoweditbox(!props.showeditbbox)}>
    <form onSubmit={submitHandler} className="flex flex-col gap-2">
    <div className="flex flex-row gap-2">
        <label htmlFor="emp_id">emp_id</label>
        <InputText id="emp_id" value={form.emp_id} onChange={(e)=>changeHandler(e)}/>
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="designation">designation</label>
        <InputText id="designation" value={form.designation} onChange={(e)=>changeHandler(e)}/>
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="emp_name">emp_name</label>
        <InputText id="emp_name" value={form.emp_name} onChange={(e)=>changeHandler(e)}/>
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="phone">phone</label>
        <InputText keyfilter="int" placeholder="Integers" id="phone" value={form.phone} onChange={(e)=>changeHandler(e)}/>
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="email">email</label>
        <InputText id="email" value={form.email} onChange={(e)=>changeHandler(e)} />
    </div>

    <div className="flex flex-row gap-2">
        <label htmlFor="project_assigned">project_assigned</label>
        <InputText id="project_assigned" value={form.project_assigned} onChange={(e)=>changeHandler(e)} />
    </div>
    <div className="flex flex-row gap-2">
        <label htmlFor="other_details">other_details</label>
        <InputText id="other_details" value={form.other_details} onChange={(e)=>changeHandler(e)}/>
    </div>
    <Button type="submit" label="Submit" />

    </form>
</Dialog>
  )
}
