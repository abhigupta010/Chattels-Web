import * as React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import SubHeader from '../components/shared/SubHeader'
import EditEmployeeForm from './EditEmployeeForm'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteEmployeeForm } from './DeleteEmployeeForm'
import { useEffect } from 'react'

function EmployeeDetails() {
  const count = useSelector((state) => state.emp)
  const [, setIsShow] = React.useState(false)
  const [showeditbbox, setshoweditbox]=React.useState(false);
  const [showdeletebox, setshowdeletebox]=React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [deleteEmp, setdeleteEmp] = React.useState(false);
  const dispatch = useDispatch()

   useEffect(()=>
   {
    
   },[count])
  function IconButton({ to, icon }) {
    return (
      <button className="icon-button">
        <Link to={to}>{icon}</Link>
      </button>
    )
  }


  const deleteHandler=(e)=>
  {
    setshowdeletebox(true);
    setdeleteEmp(e);
     

  }

  const editHandler=(emp)=>
  {
    setVisible(emp);
    setshoweditbox(true);
    console.log(showeditbbox);
  }

  function CardMetaViews(setIsShow, emp) {
    return (
      <section>
        <div>
          <h6 className='text-sm' onClick={() => dispatch(test())}>Employee Details</h6>
          <ul className="check-list">
            {emp?.phone && (
              <li className='text-xs'>
                {"Phone: " + emp.phone}
              </li>
            )}
            {emp?.email && (
              <li className='text-xs'>
                {"Email: " + emp.email}
              </li>
            )}
            {emp?.project_assigned && (
              <li className='text-xs'>
                {"Project Assigned: " + emp.project_assigned}
              </li>
            )}
            {emp?.other_details && (
              <li className='text-xs'>
                {"Other Details: " + emp.other_details}
              </li>
            )}
          </ul>
        </div>
      </section>
    )
  }
  return (
    <div>
      <SubHeader />
      <div className="column">
        {count?.map((emp) => {
          return (
            <div className="card-list">
              <article className="card">
                <div className="card-header">
                  <div className="flex flex-col">
                    <h1 className="titleHeading text-2xl">
                      {emp.emp_id}
                    </h1>
                    <h1 className="titleHeadingg text-xs">
                      {emp.designation + ' ' + emp.emp_name}
                    </h1>
                  </div>
                  <div className="icons">
                    <IconButton
                      to=''
                    
                      icon={
                        <AiOutlineEdit
                          className="hover-edit text-xs text-yellow-600"
                          size={'1rem'}
                          onClick={()=>{editHandler(emp)}}

                        />
                      }
                    />

                    <IconButton
                      to=''
                      icon={
                        <MdOutlineDelete
                          className="hover-delete text-xs text-red-600"
                          size={'1rem'}
                          onClick={()=>{deleteHandler(emp.emp_id)}}
                        />
                      }
                    />
                  </div>
                </div>

                <div className="card-footer">
                  {CardMetaViews(setIsShow, emp)}
                </div>
              </article>
           
           
              {showeditbbox&&<EditEmployeeForm showeditbbox={showeditbbox} setshoweditbox={setshoweditbox} empdata={visible} />}
              {showdeletebox && <DeleteEmployeeForm showdeletebox={showdeletebox} setshowdeletebox={setshowdeletebox} empid={deleteEmp}></DeleteEmployeeForm>}
              </div>
            
          )
        })}
    
      </div>
      
    </div>
  )
}

export default EmployeeDetails