import React,{useState, useEffect} from 'react'
import headerBg from '../../public/images/bg-header-mobile.svg'
import desktopHead from '../../public/images/bg-header-desktop.svg'



const Navbar = () => {
    const [size, setSize] = useState(window.innerWidth)

    const handleResize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    },[size])

  return (
    <div className='bg-cyan-600'>
        <img src={size < 640 ? headerBg : desktopHead} alt="" className='w-full'/>
    </div>
  )
}

export default Navbar
