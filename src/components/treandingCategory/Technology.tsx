import type React from "react"
import type { PropCards } from "../../typescript/type/homePropType"
import { useNavigate } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"


const Technology:React.FC<PropCards> = ({posts}) => {

   const navigate = useNavigate()

  return (
    <>
    {posts?.map((item) => (
        <div key={item.id} className="w-full flex flex-wrap justify-center gap-6 md:gap-0 md:justify-between border-t border-gray-600 py-5 md:py-16 p-2">
            <div className="w-[340px] flex flex-wrap gap-2">
                <h3 className="text-gray-500 font-semibold text-lg w-full">{item.title}</h3>
                <p className="mr-4 text-gray-600 text-sm">{item.category}</p>
                <p className="text-gray-600 text-sm">{item.created_at}</p>
            </div>
            <div className="w-[640px]">
                <p className="text-gray-600 text-sm">{item.summary}{item.summary}</p>
            </div>
            <div className="w-full md:w-[140px] flex items-center justify-center md:justify-end md:pr-2">
                <button onClick={() => navigate(`/blogPost/${item.id}`,{state:item})} className="text-blue-600 text-sm md:text-[16px] font-semibold flex gap-2 items-center border border-gray-600 p-2 px-4 rounded-lg ">View Full <ArrowUpRight color="#eab308"/> </button>
            </div>
        </div>
    ))}
    </>
  )
}

export default Technology