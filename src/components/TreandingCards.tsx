import type React from "react"
import type { PropCards } from "../typescript/type/homePropType"



const TreandingPosts:React.FC<PropCards> = ({posts}) => {
    
  return (
    <>
    {posts?.map((item) => (
        <div className="w-[49.3%] border border-black p-3 rounded-2xl">
          <div className="w-full bg-cover bg-center h-[300px] rounded-xl " style={{backgroundImage: `url(${item.featured_image})`}} ></div>
          <h3 className="my-6 text-xl text-black text-center font-bold"> {item.title}</h3>
          <div className="w-[80%] justify-self-center flex flex-wrap justify-end">
            <p className="text-lg font-semibold text-gray-600">{item.summary}</p>
            <button className="text-blue-600 font-semibold">View Full Post</button>
            </div>
          <div>
          </div>
        </div>
    ))}
    </>
  )
}

export default TreandingPosts;