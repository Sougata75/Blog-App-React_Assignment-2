import { ArrowUpRight, Atom } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


function CommonSection() {
    const navigation = useNavigate();
  return (
    <>
    <div className='w-[1170px] flex flex-wrap justify-between gap-12 md:gap-24'>
        <div className='w-full flex flex-wrap justify-center md:justify-between gap-3'>
            <div className='w-full flex justify-between md:w-auto'>
                <Atom className='size-[80px] md:size-[170px]' color='#eab308'/>
                <div className='w-[70%] flex items-center md:hidden'>
                    <p className='text-[15px] md:text-xl text-white bg-gray-700 inline-block px-4 py-1 rounded-md'>Learn,Connetc,and Innovate</p>
                </div>
            </div>
            <div className='w-full md:w-[80%] flex flex-wrap gap-2 md:gap-4'>
                <div className='w-full hidden md:block'>
                    <p className='text-xl text-white bg-gray-700 inline-block px-4 py-1 rounded-md'>Learn,Connetc,and Innovate</p>
                </div>
                <h2 className='text-xl md:text-5xl text-white font-semibold pl-2 md:pl-0 mb-2 md:mb-4'>Be Part of the Future Revolution</h2>
                <p className='text-gray-500 text-sm px-2 md:px-0 md:text-lg'>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
            </div>
        </div>
        <div className='w-full flex flex-wrap justify-between bg-gray-950 p-4 rounded-xl border border-gray-800 gap-4 md:gap-0'>
            <div className='w-full md:w-[32.5%] p-5 bg-gray-900 border border-gray-800 rounded-lg flex flex-wrap gap-6'>
                <div className='w-full flex justify-between items-center'>
                    <h3 className='text-white text-lg font-semibold'>Resource Access</h3>
                    <button onClick={()=>navigation("*")} className='bg-yellow-500 p-2 rounded-full'><ArrowUpRight size={30}/></button>
                </div>
                <p className='text-gray-500 text-sm'>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
            </div>
            <div className='w-full md:w-[32.5%] p-5 bg-gray-900 border border-gray-800 rounded-lg flex flex-wrap gap-6'>
                <div className='w-full flex justify-between items-center'>
                    <h3 className='text-white text-lg font-semibold'>Community Forum</h3>
                    <button onClick={()=>navigation("*")} className='bg-yellow-500 p-2 rounded-full'><ArrowUpRight size={30}/></button>
                </div>
                <p className='text-gray-500 text-sm'>Join our active community forum to discuss industry trends, share insights, and collaborate with peers.</p>
            </div>
            <div className='w-full md:w-[32.5%] p-5 bg-gray-900 border border-gray-800 rounded-lg flex flex-wrap gap-6'>
                <div className='w-full flex justify-between items-center'>
                    <h3 className='text-white text-lg font-semibold'>Tech Events</h3>
                    <button onClick={()=>navigation("*")} className='bg-yellow-500 p-2 rounded-full'><ArrowUpRight size={30}/></button>
                </div>
                <p className='text-gray-500 text-sm'>Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommonSection