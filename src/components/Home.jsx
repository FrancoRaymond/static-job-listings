import React,{ useState } from 'react'
import FilterBar from './FilterBar'
import data from '../../public/data/data.json'

const Home = () => {
    const [ filterTerms, setFilterTerms ] = useState([])
    const roleAndSkills = []

    const handleClick = (item) => {
        setFilterTerms((prev) => {
            const itemExists = prev.find(existingItem => existingItem === item)
            if(itemExists){
                return prev
            }else{
                return [...prev, item]
            }
        }
        )
    }

  return (
    <div className='bg-cyan-100 min-h-screen py-10 px-2 grid grid-cols-1 gap-10 sm:gap-5 sm:px-4 md:px-16 lg:px-32'>
        <FilterBar 
            setFilterTerms={setFilterTerms} 
            filterTerms={filterTerms}
        />
        {
            data.map(job => 
                <div key={job.id} className='rounded-md sm:flex-row bg-white p-5 sm:items-center relative pt-8 sm:pt-5 flex flex-col gap-2  border-l-4 border-cyan-600'>
                    <img src={job.logo} alt="" className='size-12 sm:size-14 rounded-full bg-red-600 absolute -translate-y-14 sm:translate-y-0 sm:relative'/>
                    <div className='flex flex-col gap-2 sm:gap-1'>
                        <div className=' flex gap-2'>
                            <p className='text-cyan-600 font-semibold mr-4'>{job.company}</p>
                            <span className={`${job.new ? '' : 'hidden'} py-[2px] px-2 text-sm font-semibold text-white rounded-3xl bg-cyan-600`}>New</span>
                            <span className={`${job.featured ? '' : 'hidden'} py-[2px] px-2 text-sm font-semibold text-white rounded-3xl bg-black`}>FEATURED</span>
                        </div>
                        <span className='font-semibold'>{job.position}</span>
                        <div className='text-gray-500 list-disc flex gap-5 pb-4 sm:pb-0 border-b border-gray-400 sm:border-none flex-wrap font-semibold'>
                            <span className='text-nowrap'>{job.postedAt}</span>
                            <span className='text-nowrap'>{job.contract}</span>
                            <span className='text-nowrap'>{job.location}</span>
                        </div>
                    </div> 
                    <div className='flex gap-5 mt-3 flex-wrap sm:ml-auto'>
                        {
                          roleAndSkills.concat(job.level, job.languages, job.tools).map((item, index) =>
                                <span key={index} onClick={() => handleClick(item)} className='cursor-pointer font-semibold text-cyan-600 text-sm sm:h-fit rounded-md p-1 bg-cyan-50'>{item}</span>
                            )
                        }
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Home
