import React from 'react'
import { BsPlus } from 'react-icons/bs';

function SubHeader() {
  return (
    <div className='p-4'>
    <div className='flex justify-end items-center'>
        <div className='flex cursor-pointer'><BsPlus className='text-sky-800 text-xl mr-1' />
          <h6 className='text-sky-800 text-sm cursor-pointer'>Add New</h6>
        </div>
    </div>
    {/* {loading ? <Spinner /> : showType === 'card' ? <BooksTable books={books} /> : <BookSingleCard books={books} />} */}
  </div>
  )
}

export default SubHeader