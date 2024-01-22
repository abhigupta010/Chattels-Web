import * as React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import SubHeader from '../components/shared/SubHeader'
import EditInventory from './EditInventory'
import './Pages.css'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import DeleteInventor from './DeleteInventory'
export default function Cards() {
    const [inventoryBox, setInventoryBox]=React.useState(false)
    
    const inventoryData= useSelector((state) => state.inventory)
    const [visible, setVisible]=React.useState({});
    const [inventoryId, setInventoryId]=React.useState(0);
    const [inventoryDeleteBox, setInventoryDeleteBox]=React.useState(false)
    const [, setIsShow] = React.useState(false)
    function IconButton({ to, icon }) {
        return (
            <button className="icon-button">
                <Link to={to}>{icon}</Link>
            </button>
        )
    }
    useEffect(()=>
    {

    },[inventoryData])
    const inventoryEditHandler=(emp)=>
    {
        setVisible(emp);
        setInventoryBox(true);
    }
    const inventoryDeleteHandler=(id)=>
    {
        setInventoryId(id);
        setInventoryDeleteBox(true);
    }


    function CardMetaViews(setIsShow, inventory) {
        return (
			<section>
			<div>
			  <h6 className='text-sm'>Inventory Specification</h6>
			  <ul className="check-list">
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
        <div className="column">
            {inventoryData?.map((inventory) => {
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
                                        to=''
                                        icon={
                                            <AiOutlineEdit
                                                className="hover-edit text-xs text-yellow-600"
                                                size={'1rem'}
                                                onClick={()=>inventoryEditHandler(inventory)}
                                            />
                                        }
                                    />
                                    <IconButton
                                        to=''
                                        icon={
                                            <MdOutlineDelete
                                                className="hover-delete text-xs text-red-600"
                                                size={'1rem'}
                                                onClick={()=>inventoryDeleteHandler(inventory.id)}
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
      {
        inventoryBox && <EditInventory setshowinventorybox ={setInventoryBox} showinventorybbox={inventoryBox} inventorydata={visible}></EditInventory>
          
      }
            {
        inventoryDeleteBox && <DeleteInventor setshowdeletebox ={setInventoryDeleteBox} showdeletebox={inventoryDeleteBox} id={inventoryId}></DeleteInventor>
          
      }
        </div>
        </div>
    )
}
