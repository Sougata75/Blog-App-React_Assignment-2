import { useEffect, useState } from "react";
import axios from "axios";
import type { DataType } from "../typescript/interface/blogInterface";

function Home() {
  const [blogData,setBlogData] = useState<DataType[]>([]);
  const [error, setError] = useState<string>("");
  const [loading,setLoading] = useState<boolean>(false);
  const [slide,setSlide] = useState<number>(0);

  useEffect(() => {
    const fetchBlogData = async () => {
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
      <section
        className=" mb-[20px] md:mb-[50px] pb-[10px] md:pb-[50px] flex  justify-center bg-cover bg-center"
        style={{ background: `url(${blogData[slide]?.featured_image})` }}
      >
        <div className="md:max-w-[1170px] h-auto md:h-[600px] w-full flex flex-wrap items-center">
          <div className="flex flex-wrap justify-center md:justify-normal text-center md:text-start gap-6 md:gap-12 md:w-[70%]">
            <h1 className=" text-[25px] justify-center md:justify-normal md:text-[75px] w-full font-bold text-gray-700 flex items-center gap-2 md:gap-4">
            Welcome To
            <p className="font-bold text-yellow-500">TechBlog</p>
          </h1>
          <div>
            <p className="text-white text-[8px] md:text-xl px-6 md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            consectetur maiores unde nostrum dolorum ad optio, autem distinctio
            natus! Molestias iusto pariatur explicabo qui accusantium aut
            aliquid, delectus et consectetur. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Voluptas asperiores vel non repellat
            eius officiis eos voluptates, itaque voluptatum, harum est, delectus
            sint nobis consequuntur praesentium. Ratione, qui voluptates. Error?
          </p>
          </div>
          <button className='text-yellow-500 border border-white bg-black px-2 py-1 md:px-8 md:py-4 text-sm md:text-[18px] rounded-lg md:rounded-2xl'>Explore More</button>
          </div>

          <div className="w-[30%] flex flex-col">

          </div>
        </div>
      </section>
      <section className="py-[50px]"></section>
    </>
  );
}

export default Home;
