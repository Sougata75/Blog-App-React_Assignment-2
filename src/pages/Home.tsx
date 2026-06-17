import { useEffect, useState } from "react";
import axios from "axios";
import type { DataType } from "../typescript/interface/blogInterface";
import TreandingPosts from "../components/TreandingCards";
import PopulerNews from "../components/PopulerNews";
import ExploreTechnology from "../components/ExploreTechnology";
import Technology from "../components/treandingCategory/Technology";
import Entertainment from "../components/treandingCategory/Entertainment";
import Politics from "../components/treandingCategory/Politics";
import FashionAndBeuty from "../components/treandingCategory/FashionAndBeuty";
import CommonSection from "../components/CommonSection";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import UserReviews from "../components/UserReviews";



function Home() {
  const [blogData,setBlogData] = useState<DataType[]>([]);
  const [error, setError] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);
  const [slide,setSlide] = useState<number>(0);

  //state for trending categories
  const [active,setAcitev] = useState<string>("first");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0);
    const fetchBlogData = async () => {
      setLoading(true);
      try{
        const blogs = await axios.get(`https://jsonfakery.com/blogs`);
        setBlogData(blogs?.data);
      }catch(error:any){
        setError(error.message);
      }finally{
        setLoading(false);
      }
    };
    fetchBlogData();
    console.log(error,loading);

    const autoSlider = setInterval(() => {
      setSlide((item) => {
        if(item === blogData.length -1){
          return 0;
        }
        return item + 1
      })
    },30000);

    return () => clearInterval(autoSlider)
  },[]);

  return (
    <>
      {loading? (
        <>
          <Loading/>
        </>
      ):(
        <>
        <section className="pb-[10px] md:pb-[50px]">
        <div className="flex  justify-center bg-cover bg-center md:h-[80vh]"
        style={{ background: `url(${blogData[slide]?.featured_image})` }}>
        <div className="w-full h-full py-8 md:py-[100px] flex justify-center items-end bg-gradient-to-b from-transparent to-gray-950">
        <div className="md:max-w-[1170px] h-auto md:h-[600px] w-full flex flex-wrap items-center">
          <div className="flex flex-wrap justify-center md:justify-normal text-center md:text-start gap-6 md:gap-12 md:w-[70%]">
            <h1 className=" text-[25px] justify-center md:justify-normal md:text-[75px] w-full font-bold text-gray-700 flex items-center gap-2 md:gap-4">
            Welcome To
            <p className="font-bold text-yellow-500">TechBlog</p>
          </h1>
          <div className="w-[90%] md:w-full flex flex-wrap gap-y-2">
            <h2 className="font-bold text-lg text-start md:text-3xl text-white">{blogData[slide]?.title}</h2>
            <h3 className="font-semibold hidden md:block text-start text-lg my-3 text-yellow-500">{blogData[slide]?.subtitle}</h3>
            <p className="text-white text-[8px] md:text-xl text-start">{blogData[slide]?.summary}{blogData[slide]?.summary}</p>
          </div>
          <button onClick={() => navigate(`/blogPost/${blogData[slide]?.id}`)} className='text-black font-semibold bg-yellow-500 px-2 py-1 md:px-7 md:py-4 text-sm md:text-[18px] rounded-lg md:rounded-xl hover:bg-yellow-700 transition-all'>View Full Article</button>
          </div>
        </div>
        </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] flex justify-center">
        <div className="w-full md:max-w-[1170px] flex flex-wrap justify-center md:gap-4">
          <h2 className=" text-center text-gray-400 items-center text-3xl md:text-[72px] font-bold mb-5 flex">Treanding 
            <p className="text-yellow-500 ml-4">Posts</p>
          </h2>
          <div className="flex flex-wrap justify-between px-2 md:px-0 gap-y-4">
          <TreandingPosts posts={blogData.slice(1,7)}/>
          </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] flex flex-wrap flex-col items-center md:gap-12 justify-center">
        <div className="w-full bg-gray-900 py-5 md:py-12 flex flex-wrap flex-col items-center gap-5 md:gap-12">
          <h2 className="text-center text-gray-400 items-center text-3xl md:text-[72px] font-bold mb-8 md:mb-5 flex">Populer 
            <p className="text-yellow-500 ml-4">News</p>
          </h2>
          <PopulerNews posts={blogData.filter((item => item.tags)).slice(0,1)} />
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] flex flex-wrap flex-col items-center gap-12">
        <h2 className="text-center text-gray-400 items-center text-3xl md:text-[72px] font-bold md:mb-5 flex">Explore 
            <p className="text-yellow-500 ml-4">Technology</p>
          </h2>
          <div className="md:w-[1170px]  px-2  mx-1 md:mx-0 flex flex-wrap justify-between">
            <ExploreTechnology posts={blogData.filter((item) => item.category === "Technology").slice(0,6)}/>
          </div>
      </section>
      <section className="py-[15px] md:py-[50px]">
        <div className="w-full bg-gray-900 py-5 md:py-12 flex flex-wrap flex-col items-center gap-5 md:gap-12">
          <h2 className="text-center text-gray-400 items-center text-3xl md:text-[72px] font-bold md:mb-5 flex">Trending 
            <p className="text-yellow-500 ml-4">Categories</p>
          </h2>
          <div className="w-full  md:w-[1170px] flex flex-wrap md:gap-y-2">
              <div className="w-full flex flex-wrap justify-between px-2 md:px-0 py-4">
                <div onClick={()=>setAcitev("first")}  className="w-[23%] md:w-[24.5%] border border-gray-500 rounded-md flex justify-center py-2 md:py-3"><button onClick={()=>setAcitev("first")} className={`${active === "first"? "text-yellow-500":"text-yellow-500/50"} text-[10px] md:text-xl font-semibold  `}>Technology</button></div>
                <div onClick={()=>setAcitev("second")} className="w-[23%] md:w-[24.5%] border border-gray-500 rounded-md flex justify-center py-2 md:py-3"><button onClick={()=>setAcitev("second")} className={`${active === "second"? "text-yellow-500":"text-yellow-500/50"} text-[10px] md:text-xl font-semibold  `}>Entertainment</button></div>
                <div onClick={()=>setAcitev("third")}  className="w-[23%] md:w-[24.5%] border border-gray-500 rounded-md flex justify-center py-2 md:py-3"><button onClick={()=>setAcitev("third")} className={`${active === "third"? "text-yellow-500":"text-yellow-500/50"} text-[10px] md:text-xl font-semibold  `}>Politics</button></div>
                <div onClick={()=>setAcitev("fourth")} className="w-[23%] md:w-[24.5%] border border-gray-500 rounded-md flex justify-center py-2 md:py-3"><button onClick={()=>setAcitev("fourth")} className={`${active === "fourth"? "text-yellow-500":"text-yellow-500/50"} text-[10px] md:text-xl font-semibold  `}>Fashion</button></div>
               </div>

              <div className={`${active === "first"? "block":"hidden"} w-full border border-x-0 border-t-0  border-gray-600 flex flex-wrap gap-5`}>
                <Technology posts={blogData.filter((items) => items.category === "Technology").slice(0,7)}/>
              </div>
              <div className={`${active === "second"? "block":"hidden"} w-full border border-x-0 border-t-0  border-gray-600 flex flex-wrap gap-5`}>
                <Entertainment posts={blogData.filter((items) => items.category === "Entertainment").slice(0,7)}/>
              </div>
              <div className={`${active === "third"? "block":"hidden"} w-full border border-x-0 border-t-0  border-gray-600 flex flex-wrap gap-5`}>
                <Politics posts={blogData.filter((items) => items.category === "Politics & Social Issues").slice(0,7)}/>
              </div>
              <div className={`${active === "fourth"? "block":"hidden"} w-full border border-x-0 border-t-0  border-gray-600 flex flex-wrap gap-5`}>
                <FashionAndBeuty posts={blogData.filter((items) => items.category === "Fashion & Beauty").slice(0,7)}/>
              </div>
            </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] mb-[15px] md:mb-[50px] flex flex-wrap justify-center">
        <UserReviews/>
      </section>
      <section  className="py-[15px] md:py-[50px] bg-gray-900 flex justify-center px-2 md:px-0">
        <CommonSection/>
      </section>
        </>
      )}
    </>
  );
}

export default Home;
