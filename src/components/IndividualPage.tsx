import { useParams } from "react-router-dom";
import type { DataType } from "../typescript/interface/blogInterface";
import { useEffect, useState } from "react";
import axios from "axios";


function IndividualPage() {

    const {id} = useParams();
 
// const location = useLocation()
// const post = location.state as DataType;

const [data,setData] = useState<DataType[]>([]);
// const [showMore,setShowMore] = useState<DataType[]>([]);
const [loading,setLoading] = useState<Boolean>(false);
const [error,setError] = useState<string>();

useEffect(() => {
    const fetch = async () => {
        try{
            const response = await axios.get(`https://jsonfakery.com/blogs`);
            setData(response?.data);
            // setShowMore(response?.data);
        }catch(errors:any){
            setError(errors.message);
            console.log(error);
            
        }finally{
            setLoading(false);
        }
    }

    fetch();
},[])

const post = data.filter((item) => item.id === id);
// const similarData = showMore.filter((item) => item.id === post?.[0]?.category);
// console.log(similarData?.[0]?.category);


  return (
    <>
        {loading? (
            <div className="w-full h-[100vh] flex justify-center items-center text-3xl text-white">Loading ..... </div>
        ):(
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="w-full h-[30vh] md:h-[65vh] bg-cover bg-center" style={{backgroundImage: `url(${post?.[0]?.featured_image})`}}>
                <div className="w-full h-full py-8 md:py-[100px] flex justify-center items-end bg-gradient-to-b from-transparent to-gray-950">
                    <div className="w-full md:w-[1170px]">
                        <p className="text-white font-bold px-5 md:px-0 text-center text-lg md:text-[54px] md:leading-normal">{post?.[0]?.title}</p>
                    </div>
                    </div>
            </div>

            <div className="w-full md:w-[1170px] flex flex-wrap justify-between pb-16">
                <div className="w-full px-2 md:w-[65%] flex flex-wrap gap-3 md:gap-5">
                    <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">Introduction :</h2>
                    <p className="text-gray-600 text-sm md:text-lg">{post?.[0]?.summary}{post?.[0]?.summary}{post?.[0]?.summary}</p>
                    <div className="w-full h-[1px] bg-gray-600 my-5 md:my-10"></div>
                    <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">Main Content :</h2>
                    <p className="text-gray-600 text-sm md:text-lg">{post?.[0]?.summary}{post?.[0]?.summary}{post?.[0]?.summary}{post?.[0]?.summary}</p>
                    <p className="text-gray-600 text-sm md:text-lg">{post?.[0]?.summary}{post?.[0]?.summary}{post?.[0]?.summary}</p>
                    <p className="text-gray-600 text-sm md:text-lg">{post?.[0]?.summary}{post?.[0]?.summary}{post?.[0]?.summary}{post?.[0]?.summary}</p>
                    <div className="w-full h-[1px] bg-gray-600 my-5 md:my-10"></div>
                    <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">Conclusion :</h2>
                    <p className="text-gray-600 text-sm md:text-lg">{post?.[0]?.summary}{post?.[0]?.summary}{post?.[0]?.summary}</p>
                </div>
                <div className="w-[1px] hidden md:block bg-gray-600"></div>
                <div className="w-full md:w-[32%] h-[500px] flex flex-wrap">
                    <div className="w-full flex flex-wrap justify-center md:justify-normal pt-8 md:pt-0 md:pl-8 h-[300px]">
                        <div className="w-[90%] h-[200px] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${post?.[0]?.user.profile_pic})`}}></div>
                        <h3 className="text-gray-500 text-lg font-semibold">Author : {post?.[0]?.user.first_name} {post?.[0]?.user.middle_name} {post?.[0]?.user.last_name}</h3>
                    </div>
                    <div className="w-full pl-8 flex flex-wrap gap-1">
                        <p className="w-[48%] text-gray-600">Category: {post?.[0]?.category}</p>
                        <p className="w-[48%] text-gray-600">Created: {post?.[0]?.created_at}</p>
                        <p className="w-[48%] text-gray-600">Updated: {post?.[0]?.updated_at}</p>
                        <p className="w-[48%] text-gray-600">Category: {post?.[0]?.category}</p>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
  );
}

export default IndividualPage;
