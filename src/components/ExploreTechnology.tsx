import type React from "react"
import type { PropCards } from "../typescript/type/homePropType"
import { Heart, MessageCircle, Send } from "lucide-react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ExploreTechnology:React.FC<PropCards> = ({posts}) => {
 const [like, setLike] = useState<string[]>([]);
 const [active,setActive] = useState<string[]>([]);
 const navigation = useNavigate();

    const handleLike = (id:string) => {
    setLike((prev) => {
     return prev.includes(id)
     ?prev.filter((likedId) => likedId !== id)
     :[...prev, id]
    });
  };

  const handleComment = (id:string) => {
    setActive((prev) => {
        return prev.includes(id)
        ?prev.filter((comment) => comment !== id)
        :[...prev,id]
    })
  }

  return (
    <>
    {posts?.map((item) => (
        <div key={item.id} className="w-full border border-y-1 border-x-0 border-gray-600 py-1 md:py-2 flex flex-wrap justify-between gap-2 md:gap-0">
            <div className="w-full md:w-1/3 md:border md:border-y-0 md:border-l-0 border-gray-600 flex justify-between px-2" >
            <div className="w-[80px] h-[80px] bg-cover bg-center rounded-full " style={{backgroundImage:`url(${item.user.profile_pic})`}}></div>
            <div className="w-[60%]">
                <h3 className="text-gray-500 font-bold py-2">{item.user.first_name} {item.user.middle_name} {item.user.last_name}</h3>
                <p className="text-gray-500 font-semibold text-sm">{item.user.role}</p>
            </div>
            </div>
            <div className="w-full md:w-[50%] md:border md:border-y-0 md:border-l-0 border-gray-600 flex flex-wrap justify-center md:justify-between px-2">
            <p className="text-gray-500 py-3 font-semibold text-sm w-full">{item.created_at}</p>
            <div className="w-full">
                <h3 className="text-gray-400 font-bold">{item.title}</h3>
            </div>
            <div className="md:ml-4 py-4 w-[85%] md:w-[30%] flex flex-wrap justify-between">
                <button onClick={() =>handleLike(item.id)}><Heart color={like.includes(item.id) ? "#dc2626":"#6b7280"}/></button>
                <button onClick={() =>handleComment(item.id)}><MessageCircle color={active.includes(item.id)? "#eab308":"#6b7280"}/></button>
                <button><Send color="#6b7280"/></button>
            </div>
            <div className={`${active.includes(item.id)? "block":"hidden"} w-full border border-gray-600 rounded-xl p-2 `}>
                {item.comments && item.comments.length > 0? (
                    <div>
                        <h3 className="text-gray-600 pb-2">Comments - </h3>
                <h3 className="text-gray-600 text-sm">User : {item.comments?.[0]?.user_id}</h3>
                <p className="text-gray-600 text-sm justify-self-end w-[90%] mr-4 my-2">{item.comments?.[0]?.main_content}</p>
                    </div>
                ):(
                    <div>
                        <h3 className="text-gray-600 text-sm">No Comments !</h3>
                    </div>
                )}
            </div>
            </div>
            <div className="w-full md:w-[15%] flex justify-center items-center pb-3 md:pb-0">
                <div>
                    <button onClick={() => navigation(`/blogPost/${item.id}`,{state:item})} className="text-black bg-yellow-500 py-2 p-[120px] md:px-4 md:py-3 font-semibold hover:bg-yellow-700 rounded-md md:rounded-xl">View More</button>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default ExploreTechnology