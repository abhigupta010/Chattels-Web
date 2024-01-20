import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs';
import AddEmployee from '../../pages/AddEmployee'
import AddInventory from '../../pages/AddInventory';
import AddAssignedInventory from '../../pages/AddAssignedInventory';
function SubHeader() {
  const [addNewEmp, setAddNewEmp]=useState(false);
  const[addInventory, setAddInventory]=useState(false)
  const[assignInventory, setAssignInventory]=useState(false)
  
  const path=window.location.pathname;
  console.log(path,"path");

 

  const onClickHandler=()=>
  {
    if(path=='/employees')
    {
      setAddNewEmp(true)
    }
    else if (path=='/inventory')
    {
      setAddInventory((prevState)=>
      {
        return !prevState;
      })
    }
    else{

      setAssignInventory((prevState)=>
      {
        return !prevState;
      })
    }
  }
  
  return (
    <div className='p-4'>
    <div className='flex justify-end items-center' onClick={onClickHandler}>
        <div className='flex cursor-pointer'><BsPlus className='text-sky-800 text-xl mr-1' />
          <h6 className='text-sky-800 text-sm cursor-pointer'>Add New</h6>
        </div>
        
    </div>
    {addNewEmp && <AddEmployee AddEmployeebox ={addNewEmp} setAddEmployeebox={setAddNewEmp}></AddEmployee>}
    {addInventory && <AddInventory showinventorybbox ={addInventory} setshowinventorybox={setAddInventory}></AddInventory>}
    {assignInventory &&  <AddAssignedInventory showAssignedInventor={assignInventory} setShowAssignInventory={setAssignInventory}></AddAssignedInventory>}
    {/* {loading ? <Spinner /> : showType === 'card' ? <BooksTable books={books} /> : <BookSingleCard books={books} />} */}
  </div>
  )
}

export default SubHeader