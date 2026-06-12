import { NavLink } from "react-router-dom"
import { pages } from "../services/json/blogData"
import { Atom } from "lucide-react"


function Footer() {
  return (
    <>
    <div className="w-full md:h-[400px] py-5 md:py-10 flex flex-wrap justify-center bg-black">
      <div className="max-w-full md:max-w-[1170px] w-full flex flex-wrap justify-center md:justify-between gap-5 md:gap-0">
        <div className="w-full md:w-[49%] flex">
          <div className="w-1/2 flex flex-col items-center md:items-start gap-4">
            <div className='flex items-center '>
            <div className=''>
                <Atom className='size-[35px] md:size-[60px]' color='#eab308'/>
            </div>
            <p className='text-yellow-500 text-xl md:text-4xl font-bold ml-2 md:ml-3'>TechBlog</p>
        </div>
            <div className="flex justify-between gap-2 md:gap-0 md:pr-14">
              <a href="#" className="text-blue-600 text-xl md:text-3xl p-1 rounded-lg bg-white/20 inline-block"><i className="fa-brands fa-square-facebook"></i></a>
              <a href="#" className="text-blue-600 text-xl md:text-3xl p-1 rounded-lg bg-white/20 inline-block"><i className="fa-brands fa-square-instagram"></i></a>
              <a href="#" className="text-blue-600 text-xl md:text-3xl p-1 rounded-lg bg-white/20 inline-block"><i className="fa-brands fa-twitter"></i></a>
            </div>
            </div>
          <div className="w-1/2 flex flex-col text-center gap-5"> 
          <h2 className="text-yellow-500 md:text-xl font-semibold">Menu</h2>
          {pages?.map((navItem,index) => (
                <NavLink key={index} to={navItem.path}>
                        <div className="w-full">
                          <span className={`text-white md:text-lg`}>{navItem.label}</span>
                        </div>
                </NavLink>
            ))}
            </div>
        </div>
        <div className="w-full md:flex justify-between md:w-[51%]">
          <div className="mb-5 md:mb-0 md:w-[49%] flex flex-col text-center items-center gap-5">
          <h2 className="text-yellow-500 md:text-xl font-semibold">About US</h2>
          <p className="text-white text-[12px] md:text-[18px] w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia necessitatibus iusto rerum harum consequatur? Eum cum illo quaerat voluptatem. Laborum nihil ut eveniet vel consequatur dolorum dolorem sit voluptatibus iste?</p>
          </div>
          <div className=" md:w-1/2 flex flex-col text-center gap-5 md:gap-12 px-4 md:px-0 mb-4">
            <h2 className="text-yellow-500 md:text-xl font-semibold">Subscribe Our News Letter</h2>
            <div>
              <form>
                <div className="flex justify-between items-center  mb-2 md:mb-5">
                  <label className="text-white  md:text-lg">Email</label>
                  <input className="w-[80%] p-1 md:px-1 md:py-2 rounded-xl" type="text" name="email" placeholder="Enter you email . . . ." />
                </div>

                <button type="submit" className="bg-yellow-500 w-full p-1 md:p-2 rounded-xl text-black font-semibold hover:bg-yellow-700">Subscribe</button>
              </form>
            </div>
            </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-yellow-500/40"></div>
      <div className="w-full px-3 py-5 md:py-0 md:px-0 md:w-[1170px] flex justify-between">
        <a href="#" className="text-white text-sm md:text-md">Terms and Conditions</a>
        <a href="#" className="text-white text-sm md:text-md">© Copyright Policy</a>
      </div>
    </div>
    </>
  )
}

export default Footer