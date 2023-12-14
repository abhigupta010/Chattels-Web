import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {newInventoryDetails} from '../../src/Constant'
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css'; // Replace with your preferred theme
import 'primereact/resources/primereact.min.css';
import SubHeader from '../components/shared/SubHeader';
import { MdDelete } from "react-icons/md";

export default function AssignedInventory() {

	const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

	const deleteTemplate = (rowData) => {
		const handleDeleteClick = (rowData) => {
		  console.log('Row data to delete:', rowData);
		};
	  
		return (
		  <button className="" onClick={() => handleDeleteClick(rowData)}>
			<MdDelete />
		  </button>
		);
	  };
	
	return(
		<div className="card p-fluid">
		<SubHeader/>
		<DataTable value={newInventoryDetails} editMode="row" dataKey="id" size="small" onRowEditComplete={console.log('j')} tableStyle={{ minWidth: '50rem' }}>
		<Column field="id" header="Id"  editor={(options) => textEditor(options)}></Column>
		<Column field="emp_id" header="EMP ID"   editor={(options) => textEditor(options)}></Column>
		<Column field="emp_name" header="EMP NAME"   editor={(options) => textEditor(options)}></Column>
		<Column field="laptop_type" header="LAPTOP TYPE"   editor={(options) => textEditor(options)}></Column>
		<Column field="laptop_id" header="LAPTOP ID"   editor={(options) => textEditor(options)}></Column>
		<Column field="charger_type" header="CHARGER"   editor={(options) => textEditor(options)}></Column>
		<Column field="charger_id" header="CHARGER ID"   editor={(options) => textEditor(options)}></Column>
		<Column field="other_assest" header="Other Assest"   editor={(options) => textEditor(options)}></Column>
		<Column field="" header=""   body={(rowData)=>deleteTemplate(rowData)}></Column>
		<Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
		</DataTable>
	</div>
	)
	
}
