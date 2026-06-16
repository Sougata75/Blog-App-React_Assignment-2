import { useEffect, useState } from "react";
import CommonSection from "../components/CommonSection"
import type { DataType } from "../typescript/interface/blogInterface";
import axios from "axios";
import Loading from "../assets/vecteezy_icon-loading-circle-two-line-loop-out-animation-with-a_4844747.mp4";
import Banner from '../assets/hero-banner.jpg';
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


function BlogPge() {
  const [blogData,setBlogData] = useState<DataType[]>([]);
  const [error, setError] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);
  const [category,setCategory] = useState<string>("All");

  //const [page,setPage] = useState<number>(1);
  // const blogPage = 20;

  const selectCatagory = [
  "All",  
  "Art & Culture",
  "Education",
  "Entertainment",
  "Environment & Sustainability",
  "Fashion & Beauty",
  "Finance & Business",
  "Food & Drink",
  "Health & Wellness",
  "Lifestyle",
  "Politics & Social Issues",
  "Programming & Development",
  // "Science & Space",
  "Sports & Fitness",
  "Technology",
  "Travel & Leisure"
]

const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const fetchData = async() => {
      try{
        const response = await axios.get(`https://jsonfakery.com/blogs`);
        setBlogData(response?.data);
      }catch(errors:any){
        setError(errors.message);
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  const filteredData = blogData?.slice(0,30).filter((item) => category === "All" || item.category === category)
  // const startIndex = (page - 1)* blogPage
  // const currentPage  = filteredData.slice(startIndex, startIndex + blogPage);

  return (
    <>
    {loading? (
      <div className="w-full h-[60vh] md:h-[100vh] flex justify-center bg-black items-center text-3xl text-white">
          <video
            className="w-[200px] md:w-[400px] h-[200px] md:h-[400px]"
            src={Loading}
            autoPlay
            muted
            loop
          ></video>
        </div>
    ):(
      <>
      <section className="pb-[15px] md:pb-[50px] flex justify-center">
        <div className="w-full h-[25vh] md:h-[50vh] bg-cover bg-center" style={{backgroundImage:`url(${Banner})`}}>
          <div className="w-full h-full py-8 md:py-[70px] flex justify-center items-end bg-gradient-to-b from-transparent to-gray-950">  
             <div className="md:max-w-[1170px] h-auto w-full flex flex-wrap items-center">
               <div className="flex flex-wrap justify-center items-end ">
                 <h1 className=" text-[25px] justify-center md:justify-normal md:text-[75px] w-full font-bold text-gray-500 flex items-center gap-2 md:gap-4">
                  Explore The World of 
                 <p className="font-bold text-yellow-500">Headlines</p>
                 </h1>
               </div>
             </div>
            </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] pb-6 md:pb-0 px-2 md:px-0 flex justify-center">
        <div className="w-full md:w-[1170px] flex flex-wrap justify-between">
          <div className="w-full flex justify-between border-b border-gray-600">
            <div className="md:p-4 w-[30%]">
              <h3 className="text-gray-500 md:text-3xl font-semibold">Blogs :</h3>
            </div>
            <div className="flex items-center">
              <label className="text-gray-500 md:text-xl font-semibold">Category :</label>
              <select onChange={(e)=> {setCategory(e.target.value);{/*setPage(1);*/}}} className="w-[150px] md:w-[300px] text-center md:font-semibold outline-none bg-transparent text-gray-500">
                {selectCatagory.map((item)=>(
                  <option className="text-gray-500" key={item} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full md:w-[1170px] flex flex-wrap justify-center pt-4 md:pt-5 gap-5">
            {filteredData.map((blog) => (
              <div key={blog.id} className="w-full flex flex-wrap justify-between px-2 md:px-0">
                <div className="w-full md:w-[25%]">
                  <div className="w-[100%] h-[150px] bg-cover bg-center rounded-md" style={{backgroundImage: `url(${blog.featured_image})`}}></div>
                </div>
                <div className="pt-3 md:pt-0 md:w-[57%] px-2">
                  <h3 className="text-gray-500 font-semibold text-xl">{blog.title}</h3>
                  <h4 className="text-gray-600 my-2 font-semibold text-[16px] w-[75%] flex justify-between">Author: {blog.user.first_name} {blog.user.middle_name} {blog.user.last_name}
                    <p>Category: {blog.category}</p>
                  </h4>
                  <p className="text-gray-600 my-2 font-semibold text-sm">{blog.summary}</p>
                </div>
                <div className="w-full pt-4 md:pt-0 md:w-[16%] flex justify-center items-center">
                  <button onClick={()=> navigate(`/blogPost/${blog.id}`)} className="text-white flex gap-2 border border-gray-500 px-8 py-3 rounded-sm">View <ArrowUpRight color="#eab308"/></button>
                </div>
              </div>
            ))}
            {/* <div className="w-[40%] flex py-6 justify-between">
              <button onClick={()=>{setPage((page) => page - 20); window.scrollTo(0,0)}}><ArrowLeft color=" #6b7280"/> </button>
              <button onClick={()=>setPage((page) => page + 20)}><ArrowRight color=" #6b7280"/> </button>
            </div> */}
          </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] bg-gray-900 flex justify-center">
        <CommonSection/>
      </section>
    </>
    )}
    </>
  )
}

export default BlogPge