import React from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { empActions } from '../reducers/empslice';
import { useSelector, useDispatch } from 'react-redux'
export const DeleteEmployeeForm = (props) => {
    const dispatch = useDispatch()

    const deleteEmpHandler=()=>
    {   
        
        dispatch(
            empActions.delete({
                emp_id: props.empid
            })
        );
        props.setshowdeletebox(false);
    }
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => props.setshowdeletebox(!props.showdeletebox)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" autoFocus onClick={deleteEmpHandler} />
        </div>
    );
  return (
    <Dialog  visible={props.showdeletebox} style={{ width: '50vw' }} onHide={() =>props.setshowdeletebox(!props.showdeletebox)} footer={footerContent}>
             <p>{props.empid}</p>
           </Dialog>
  )
}
