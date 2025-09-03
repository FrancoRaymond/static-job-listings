import React from 'react'
import remove from '../../public/images/icon-remove.svg' 

const FilterBar = ({filterTerms, setFilterTerms }) => {

  const handleDelete = (term) => {
    setFilterTerms((prev) => prev.filter(itemToRemove => itemToRemove !== term))
  }

  return (
    <div className={`${filterTerms.length === 0 ? 'hidden' : 'flex gap-5 flex-wrap'} bg-white px-6 h-fit py-3 w-full -mt-16 rounded-md`}>
      {
        filterTerms.map(term => (
          <div key={term} className='flex rounded-md overflow-clip h-fit'>
            <span className='text-sm text-cyan-600 bg-gray-50 py-1 px-2'>{term}</span>
            <button onClick={() => handleDelete(term)} className='bg-cyan-600 hover:bg-black px-1'><img src={remove} alt="" className='size-3' /></button>
          </div>
        ))
      }
    </div>
  )
}

export default FilterBar