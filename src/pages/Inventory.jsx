import * as React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { invontoryDetails } from '../Constant'
import SubHeader from '../components/shared/SubHeader'
import './Pages.css'
export default function Cards() {
    const [, setIsShow] = React.useState(false)
    function IconButton({ to, icon }) {
        return (
            <button className="icon-button">
                <Link to={to}>{icon}</Link>
            </button>
        )
    }

    function CardMetaViews(setIsShow, inventory) {
        return (
			<section>
			<div>
			  <h6 className='text-sm'>Inventory Specification</h6>
			  <ul class="check-list">
				{inventory?.ram&&<li className='text-xs'>{"RAM: " + inventory.ram}</li>}
				{inventory?.processor&&<li className='text-xs'>{"Proccessor: "+inventory.processor}</li>}
				{inventory?.generation&&<li className='text-xs'>{"Generation: "+inventory.generation}</li>}
				{inventory?.other&&<li className='text-xs'>{"Other Details: "+inventory.other}</li>}
			  </ul>
			</div>
		  </section>
        )
    }
    return (
        <div>
             <SubHeader/>
        <div class="column">
            {invontoryDetails?.map((inventory) => {
                return (
                    <div className="card-list">
                        <article className="card">
                            <div className="card-header">
                                <div className="flex flex-col">
                                    <h1 className="titleHeading text-2xl">{inventory.id}</h1>
                                    <h1 className="titleHeadingg text-xs">{inventory.brand + ' ' + inventory.name}</h1>
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

                            <div className="card-footer">{CardMetaViews(setIsShow, inventory)}</div>
                        </article>
                    </div>
                )
            })}
            {/* {
        isShow && <BookInfo isShow={isShow} setIsShow={setIsShow} title={title} author={author} publisher={publisher} description={description}/>
      } */}
        </div>
        </div>
    )
}
