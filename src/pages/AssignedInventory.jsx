import React, { useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import 'primereact/resources/themes/saga-blue/theme.css' // Replace with your preferred theme
import 'primereact/resources/primereact.min.css'
import SubHeader from '../components/shared/SubHeader'
import { MdDeleteOutline } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import DeleteAssignedInventory from './DeleteAssignedInventory'
import { assignedInventoryActions } from '../reducers/assignInventory'
export default function AssignedInventory() {
    const dispatch = useDispatch()
    const [showDelete, setShowDelete] = useState(false)

    const [id, setId] = useState(0)
    const newInventoryDetail = useSelector((state) => state.assignedinventory)
    useEffect(() => {}, [newInventoryDetail])

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />
    }

    const deleteTemplate = (rowData) => {
        const handleDeleteClick = (rowData) => {
            setShowDelete(true)

            setId(rowData.id)
        }

        return (
            <button className="" onClick={() => handleDeleteClick(rowData)}>
                <MdDeleteOutline />
            </button>
        )
    }

    const onRowEditComplete = (e) => {
        let { newData } = e

        dispatch(
            assignedInventoryActions.edit({
                id: newData.id,
                emp_id: newData.emp_id,
                emp_name: newData.emp_name,
                laptop_type: newData.laptop_type,
                laptop_id: newData.laptop_id,
                charger_type: newData.charger_type,
                charger_id: newData.charger_id,
                other_assest: newData.other_assest
            })
        )
    }

    return (
        <div className="card p-fluid">
            <SubHeader />
            <DataTable
                value={newInventoryDetail}
                onRowEditComplete={onRowEditComplete}
                editMode="row"
                dataKey="id"
                size="small"
                tableStyle={{ minWidth: '50rem' }}
            >
                <Column field="id" header="Id" editor={(e) => textEditor(e)}></Column>
                <Column field="emp_id" header="EMP ID" editor={(options) => textEditor(options)}></Column>
                <Column field="emp_name" header="EMP NAME" editor={(options) => textEditor(options)}></Column>
                <Column field="laptop_type" header="LAPTOP TYPE" editor={(options) => textEditor(options)}></Column>
                <Column field="laptop_id" header="LAPTOP ID" editor={(options) => textEditor(options)}></Column>
                <Column field="charger_type" header="CHARGER" editor={(options) => textEditor(options)}></Column>
                <Column field="charger_id" header="CHARGER ID" editor={(options) => textEditor(options)}></Column>
                <Column field="other_assest" header="Other Assest" editor={(options) => textEditor(options)}></Column>
                <Column field="" header="" body={(rowData) => deleteTemplate(rowData)}></Column>
                <Column
                    rowEditor
                    headerStyle={{ width: '10%', minWidth: '8rem' }}
                    bodyStyle={{ textAlign: 'center' }}
                ></Column>
            </DataTable>
            {showDelete && (
                <DeleteAssignedInventory
                    showDelete={showDelete}
                    setShowDelete={setShowDelete}
                    id={id}
                ></DeleteAssignedInventory>
            )}
        </div>
    )
}
