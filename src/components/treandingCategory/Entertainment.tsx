import type React from "react"
import type { PropCards } from "../../typescript/type/homePropType"
import { useNavigate } from "react-router-dom"


const Entertainment:React.FC<PropCards> = ({posts}) => {

   const navigate = useNavigate()

  return (
    <>
    {posts?.map((item) => (
        <div key={item.id} className="w-full flex flex-wrap justify-center gap-4 md:gap-0 md:justify-between border border-gray-600 p-2">
            <div className="w-[340px] flex flex-wrap gap-2">
                <h3 className="text-gray-500 font-semibold text-lg w-full">{item.title}</h3>
                <p className="mr-4 text-gray-600 text-sm">{item.category}</p>
                <p className="text-gray-600 text-sm">{item.created_at}</p>
            </div>
            <div className="w-[650px]">
                <p className="text-gray-600 text-sm">{item.summary}{item.summary}</p>
            </div>
            <div className="w-full md:w-[100px] flex items-center justify-center md:justify-end md:pr-2">
                <button onClick={() => navigate(`/blogPost/${item.id}`,{state:item})} className="text-blue-600 text-sm md:text-[16px] font-semibold">View Full</button>
            </div>
        </div>
    ))}
    </>
  )
}

export default Entertainment