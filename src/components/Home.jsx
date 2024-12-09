import React from 'react'
import data from '../../public/data/data.json'

const Home = () => {
    const roleAndSkills = []

  return (
    <div className='bg-cyan-100 min-h-screen py-10 px-2 grid grid-cols-1 gap-10 '>
        {
            data.map(job => 
                <div key={job.id} className='rounded-md bg-white p-5 relative pt-8 flex flex-col gap-2  border-l-4 border-cyan-600'>
                    <img src={job.logo} alt="" className='size-12 rounded-full bg-red-600 absolute -translate-y-14'/>
                    <div className='flex flex-col gap-2'>
                        <div className=' flex gap-2'>
                            <p className='text-cyan-600 font-semibold mr-4'>{job.company}</p>
                            <span className={`${job.new ? '' : 'hidden'} py-[2px] px-2 text-sm font-semibold text-white rounded-3xl bg-cyan-600`}>New</span>
                            <span className={`${job.featured ? '' : 'hidden'} py-[2px] px-2 text-sm font-semibold text-white rounded-3xl bg-black`}>FEATURED</span>
                        </div>
                        <span className='font-semibold'>{job.position}</span>
                        <div className='text-gray-500 list-disc flex gap-5 pb-4 border-b border-gray-400  flex-wrap'>
                            <span className='text-nowrap'>{job.postedAt}</span>
                            <span className='text-nowrap'>{job.contract}</span>
                            <span className='text-nowrap'>{job.location}</span>
                        </div>
                    </div> 
                    <div className='flex gap-5 mt-3 flex-wrap'>
                        {
                          roleAndSkills.concat(job.level, job.languages, job.tools).map((item, index) =>
                                <span key={index} className='font-semibold text-cyan-600 text-sm rounded-md p-1 bg-cyan-50'>{item}</span>
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
