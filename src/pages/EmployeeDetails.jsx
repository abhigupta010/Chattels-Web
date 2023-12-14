import * as React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { empDetails } from '../Constant'
import SubHeader from '../components/shared/SubHeader'

function EmployeeDetails() {
  
  const [, setIsShow] = React.useState(false)
  function IconButton({ to, icon }) {
    return (
      <button className="icon-button">
        <Link to={to}>{icon}</Link>
      </button>
    )
  }

  function CardMetaViews(setIsShow, emp) {
    return (
      <section>
        <div>
          <h6 className='text-sm'>Employee Details</h6>
          <ul class="check-list">
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
      <div class="column">
        {empDetails?.map((emp) => {
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
                      to={`/books/edit/`}
                      icon={
                        <AiOutlineEdit
                          className="hover-edit text-xs text-yellow-600"
                          size={'1rem'}
                        />
                      }
                    />
                    <IconButton
                      to={`/books/delete/`}
                      icon={
                        <MdOutlineDelete
                          className="hover-delete text-xs text-red-600"
                          size={'1rem'}
                        />
                      }
                    />
                  </div>
                </div>

                <div className="card-footer">
                  {CardMetaViews(setIsShow, emp)}
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EmployeeDetails