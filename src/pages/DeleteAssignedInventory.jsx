import React from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { assignedInventoryActions } from '../reducers/assignInventory';
import { useSelector, useDispatch } from 'react-redux'
const DeleteAssignedInventory = (props) => {
    console.log("hh", props.showDelete)
    const dispatch = useDispatch()

    const deleteEmpHandler=()=>
    {   
        
        dispatch(
            assignedInventoryActions.delete({
                id: props.id
            })
        );
        props.setShowDelete(false);
    }
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => props.setShowDelete(!props.showDelete)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" autoFocus onClick={deleteEmpHandler} />
        </div>
    );
  return (
    <Dialog  visible={props.showDelete} style={{ width: '50vw' }} onHide={() =>props.setShowDelete(!props.showDelete)} footer={footerContent}>
             <p>{props.id}</p>
           </Dialog>
  )
}
export default DeleteAssignedInventory;