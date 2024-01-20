import React from 'react'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { inventoryActions } from '../reducers/inventorySlice';
import { useSelector, useDispatch } from 'react-redux'
const DeleteInventor = (props) => {
    const dispatch = useDispatch()

    const deleteEmpHandler=()=>
    {   
        
        dispatch(
            inventoryActions.delete({
                id: props.id
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
             <p>{props.id}</p>
           </Dialog>
  )
}
export default DeleteInventor;