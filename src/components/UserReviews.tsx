import { useEffect, useState } from "react"
import type { Reviews } from "../typescript/interface/blogInterface"
import axios from "axios";


function UserReviews() {

    const [reviews,setReviews] = useState<Reviews[]>([]);
    const [error,setError] = useState("");

    useEffect(() => {

        const fetchReviews = async() => {
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
                setReviews(response?.data);
            }catch(errors:any){
                setError(errors.message);
                console.log(error);
            };
        };

        fetchReviews();

    },[]);

    const comments = reviews?.slice(0,3);

  return (
    <>
    <div className="w-[1170px] flex flex-wrap justify-between gap-y-6 md:gap-y-12 px-2 md:px-0">
        <div className="w-full flex justify-center">
            <h2 className="text-center text-gray-400 items-center text-3xl md:text-[72px] font-bold md:mb-5 flex">Top 
            <p className="text-yellow-500 ml-4">Reviews</p>
          </h2>
        </div>
    {comments?.map((post) => (
           <div key={post.id} className="w-full md:w-[32%] flex flex-wrap justify-between gap-2 rounded-md bg-gray-900 backdrop-blur-md p-4">
            <div>
                <h3 className="text-blue-500 font-bold">{post.name}</h3>
            <p className="text-gray-500 text-sm font-semibold">{post.email}</p>
            </div>
            <div>
                <p className="text-gray-600 text-sm">{post.body}</p>
            </div>
           </div>
    ))}
    </div>
    </>
  )
}

export default UserReviews