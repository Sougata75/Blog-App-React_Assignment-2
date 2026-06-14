import type React from "react"
import {useState } from "react"
import { useNavigate } from "react-router-dom"
import type { PropCards } from "../typescript/type/homePropType"
import {Send,ThumbsUp } from "lucide-react"



const TreandingPosts:React.FC<PropCards> = ({posts}) => {

  const [like, setLike] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleLike = (id:string) => {
    setLike((prev) => {
     return prev.includes(id)
     ?prev.filter((likedId) => likedId !== id)
     :[...prev, id]
    });
  };

    
  return (
    <>
    {posts?.map((item) => (
        <div key={item.id} className="w-full md:w-1/3 p-5 md:h-[430px] flex flex-col justify-between rounded-2xl">
          <div className="w-full bg-cover bg-center h-[200px] rounded-xl " style={{backgroundImage: `url(${item.featured_image})`}} ></div>
          <h3 className="mt-6 mb-3 text-[15px] text-white font-bold"> {item.title}</h3>
          <p className="w-full text-gray-600">{item.category}</p>
          <div>
            <div className="w-full flex flex-wrap justify-between pt-7">
            <div className="w-[20%] flex justify-between">
              <button onClick={() => handleLike(item.id)}><ThumbsUp color={`${like.includes(item.id)?"#dc2626":"#4b5563"}`}/></button>
              <button className="text-gray-600"><Send color=" #4b5563 "/></button>
            </div>
            <div>
              <button onClick={() => navigate(`/blogPost/${item.id}`,{state:item})} className="text-black font-semibold bg-yellow-500 p-2 px-4 rounded-lg hover:translate-y-[-2px] hover:bg-yellow-700 transition-all">Vire More</button>
            </div>
          </div>
          </div>
        </div>
    ))}
    </>
  )
}

export default TreandingPosts;