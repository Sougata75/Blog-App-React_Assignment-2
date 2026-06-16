import { Atom, Menu } from 'lucide-react'
import { pages } from '../services/json/blogData'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {
    const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <>
   <nav>
    <div className='w-full flex justify-center items-center bg-black p-4'>
       <div className='max-w-[1170px] w-full flex flex-wrap justify-between'>
         <div className='flex items-center '>
            <div className=''>
                <Atom className='size-[35px] md:size-[60px]' color='#eab308'/>
            </div>
            <p className='text-yellow-500 text-xl md:text-4xl font-bold ml-2 md:ml-3'>TechBlog</p>
        </div>
        <div className='md:flex flex-wrap text-end justify-between items-center w-[30%] hidden'>
            {pages?.map((navItem,index) => (
                <NavLink key={index} to={navItem.path}>
                    {({isActive}) => (
                        <span className={`${isActive? "bg-white/15 shadow-md shadow-yellow-500/30 backdrop-blur-sm text-yellow-500 font-bold ":""} text-white text-xl font-semibold py-2 px-6 rounded-3xl hover:text-yellow-500`}>{navItem.label}</span>
                    )}
                </NavLink>
            ))}
            {/* <NavLink to={"/logIn"}>
            <span className={` text-white text-xl font-semibold py-2 px-6 rounded-3xl`}>LogIn</span>
            </NavLink> */}
        </div>

        <button onClick={() => setIsActive((prev) => !prev) } className='justify-self-end block md:hidden'>
            <Menu size={30} color='#ffffff'/>
        </button>
    </div>
    <div className={`${isActive?"block":"hidden"} absolute flex flex-col items-center gap-6 justify-self-end bg-black/40 backdrop-blur-sm h-[80vh] w-[150px] rounded-xl top-[70px] right-1 pt-5`}>
            {pages?.map((navItem,index) => (
                <NavLink key={index} to={navItem.path} >
                    {({isActive}) => (
                        <span onClick={()=>setIsActive(false)} className={`${isActive? "bg-white/50 shadow-md shadow-yellow-500/30 backdrop-blur-sm text-yellow-500 font-bold ":""} text-white text-md font-semibold py-2 px-6 rounded-3xl hover:text-yellow-500`}>{navItem.label}</span>
                    )}
                </NavLink>
            ))}
            {/* <NavLink to={"/logIn"}>
            <span className={` text-white text-md font-semibold py-2 px-6 rounded-3xl`}>LogIn</span>
            </NavLink> */}
       </div>
        </div>
   </nav>
        </>
  )
}

export default Header