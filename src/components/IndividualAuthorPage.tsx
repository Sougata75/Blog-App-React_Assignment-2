import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type { DataType } from "../typescript/interface/blogInterface";
import axios from "axios";
import CommonSection from "./CommonSection";
import { ArrowUpRight } from "lucide-react";
import Loading from "./Loading";



function IndividualAuthorPage() {

    const navigate = useNavigate();
    const {id} = useParams();

    const [postData,setPostData] = useState<DataType[]>([]);
    const [loading,setLoading] = useState<boolean>(false);
    const [errors,setErrors] = useState("");

    useEffect(() => {
        setLoading(true);
        window.scrollTo(0,0);

        const fetchFunction = async() => {
            try{
                const response = await axios.get(`https://jsonfakery.com/blogs`);
                setPostData(response?.data);
            }catch(error:any){
                setErrors(error.message);
                console.log(errors)
            }finally{
                setLoading(false);
            };
        };

        fetchFunction();

    },[id]);

    const authorsPosts = postData?.filter((post) => post.user.id === id);

  return (
    <>
    {loading? (
        <>
          <Loading/>
        </>
    ):(
        <>
        <section className="pb-[15px] md:pb-[50px] flex justify-center">
        <div className="w-full h-[25vh] md:h-[50vh] bg-cover bg-center" style={{backgroundImage: `url(${authorsPosts?.[0]?.user.profile_pic})`}}>
          <div className="w-full h-full py-8 md:py-[70px] flex justify-center items-end bg-gradient-to-b from-transparent to-gray-950">
            <div className="md:max-w-[1170px] h-auto w-full flex flex-wrap justify-center items-center">
               <div className="w-[80%] flex flex-wrap justify-center items-end ">
                 <h1 className=" text-[25px] justify-center md:justify-normal md:text-[75px] w-full font-bold text-gray-500 flex flex-wrap items-center gap-2 md:gap-4">
                  Find Your Favorite 
                 <p className="font-bold text-yellow-500">Articles</p>
                 </h1>
               </div>
             </div>
          </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] mb-4 md:mb-0 flex justify-center">
        <div className="w-full px-2 md:px-0 md:w-[1170px] flex flex-wrap justify-between">
          <div className="w-full border-b border-gray-600 mb-6">
            <h2 className="text-gray-500 font-semibold text-xl mb-2">Post's By: {authorsPosts?.[0]?.user.first_name} {authorsPosts?.[0]?.user.middle_name} {authorsPosts?.[0]?.user.last_name}</h2>
          </div>
          
          <div className="w-full md:w-[1170px] flex flex-wrap justify-center pt-4 md:pt-5 gap-5">
            {authorsPosts.map((blog) => (
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
                  <button onClick={()=> navigate(`/blogPost/${blog.id}`)} className="text-white flex gap-2 border border-gray-500 px-20 md:px-8 py-2 md:py-3 rounded-md md:rounded-sm md:hover:translate-y-[-2px] transition-all">View <ArrowUpRight color="#eab308"/></button>
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

export default IndividualAuthorPage