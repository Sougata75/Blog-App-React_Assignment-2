import { useEffect, useState } from "react"
import CommonSection from "../components/CommonSection"
import type { DataType } from "../typescript/interface/blogInterface"
import AuthorBanner from '../assets/Author.jpg.jpeg';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import UserReviews from "../components/UserReviews";


function Author() {

  const [apiData,setApiData] = useState<DataType[]>([]);
  const [loading,setLoading] = useState<boolean>(false);
  const [error,setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0,0);
    const fetchData = async() => {
      try{
       const response = await axios.get(`https://jsonfakery.com/blogs`);
        setApiData(response?.data);
      }catch(errors:any){
        setError(errors.message);
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  const allAuthors = apiData?.map((data) => data?.user).filter(Boolean);
  const authors = allAuthors?.filter((user,index,self) => 
    index === self.findIndex((u) => u?.id === user?.id)
  );
 

  return (
    <>
    {loading? (
      <>
        <Loading/>
      </>
    ):(
      <>
      <section className="pb-[15px] md:pb-[50px] flex justify-center">
        <div className="w-full h-[25vh] md:h-[50vh] bg-cover bg-center" style={{backgroundImage: `url(${AuthorBanner})`}}>
          <div className="w-full h-full py-8 md:py-[70px] flex justify-center items-end bg-gradient-to-b from-transparent to-gray-950">
            <div className="w-full md:w-[1170px] h-auto flex flex-wrap justify-center items-center">
               <div className="w-[80%] flex flex-wrap justify-center items-end ">
                 <h1 className=" text-[25px] justify-center md:justify-normal md:text-[75px] w-full font-bold text-gray-500 flex flex-wrap items-center gap-2 md:gap-4">
                  Find Your Favorite 
                 <p className="font-bold text-yellow-500">Author</p>
                 </h1>
               </div>
             </div>
          </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] border-b border-gray-600 flex justify-center">
        <div className="w-full px-1 md:px-0 md:w-[1170px] flex flex-wrap mb-2 md:mb-0">
          <div className="w-full border-b border-gray-600 mb-6">
            <h2 className="text-gray-500 font-semibold text-xl mb-2">Authors:</h2>
          </div>
          <div className="w-full flex flex-wrap gap-y-4 md:gap-6">
            {authors?.map((id) => (
            <div key={id?.id} className="w-full flex flex-wrap justify-between">
              <div className="w-[45%] h-[150px] md:h-[400px] bg-cover bg-center rounded-lg" style={{backgroundImage:`url(${id.profile_pic})`}}></div>
              <div className="w-[52%] md:w-[50%] flex flex-wrap py-1 md:py-5">
                <div className="w-full flex flex-wrap h-[75px] md:h-[200px]">
                  <h3 className="text-gray-500 text-[16px] md:text-4xl font-black w-full md:mb-3">{id.first_name} {id.middle_name} {id.last_name}</h3>
                  <p className="text-gray-600 font-semibold text-[8px] md:text-xl w-full">User Name: {id.username}</p>
                  <p className="text-gray-600 font-semibold hidden md:block text-[8px] md:text-xl w-full">Email: {id.email}</p>
                  <p className="text-gray-600 font-semibold text-[8px] md:text-lg w-full">Joind From: {id.created_at}</p>
                  <p className="text-gray-600 font-semibold text-[8px] md:text-lg w-full">Role: {id.role}</p>
                </div>
                <div className="w-full flex justify-center items-end">
                  <div>
                    <button onClick={() => navigate(`/authorsPosts/${id.id}`)} className="text-black font-semibold text-sm md:text-lg bg-yellow-500 px-3 py-1 md:px-32 md:py-4 rounded-md md:rounded-xl">Blogs From This Author</button>
                  </div>
                </div>
              </div>
          </div>
          ))}
          </div>
        </div>
      </section>
      <section className="py-[15px] md:py-[50px] mb-[15px] md:mb-[50px] flex flex-wrap justify-center">
        <UserReviews/>
      </section>
      <section className="py-[15px] md:py-[50px] bg-gray-900 flex justify-center">
        <CommonSection/>
      </section>
      </>
    )}
    </>
  )
}

export default Author