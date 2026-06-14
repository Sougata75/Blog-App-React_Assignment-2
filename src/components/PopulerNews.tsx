import React, { useState } from 'react'
import type { PropCards } from '../typescript/type/homePropType'

const PopulerNews:React.FC<PropCards> = ({posts}) => {
    const [show,setShow] = useState<boolean>(false);
  return (
    <>
    {posts?.map((post) => (
        <div key={post.id} className="md:w-[1170px] flex flex-wrap justify-center gap-5 md:gap-12">
            <div className="w-full h-[25vh] md:h-[55vh] bg-cover bg-center md:rounded-t-2xl" style={{backgroundImage: `url(${post.featured_image})`}}>
                <div className="w-full h-full py-5 md:py-[90px] flex justify-center items-end bg-gradient-to-b from-transparent to-gray-950">
                    <div className="w-[75%] md:w-[950px]">
                        <h2 className="text-white font-bold text-center text-[16px] md:text-[60px]">{post.title}</h2>
                    </div>
                    </div>
            </div>

            <div className="w-full px-2 md:px-0 md:w-[1170px] flex justify-between">
                <div className="w-full flex flex-wrap gap-3 md:gap-5">
                    <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">Introduction :</h2>
                    <p className="text-gray-600 text-[12px] md:text-lg">{post.summary}{post.summary}{post.summary}</p>
                    <div className={`${show? "hidden":"block"} w-full flex justify-center py-5`}><button onClick={() => setShow(true)} className={`${show? "hidden":"block"} text-[12px] md:text-[16px] text-blue-600`}>Show Full Artical</button></div>
                    <div className={`${!show? "hidden":"block"} flex flex-wrap gap-5`}>
                      <div className="w-full h-[1px] bg-gray-600 my-5 md:my-10"></div>
                    <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">Main Content :</h2>
                    <p className="text-gray-600 text-[12px] md:text-lg">{post.summary}{post.summary}{post.summary}{post.summary}</p>
                    <p className="text-gray-600 text-[12px] md:text-lg">{post.summary}{post.summary}{post.summary}</p>
                    <p className="text-gray-600 text-[12px] md:text-lg">{post.summary}{post.summary}{post.summary}{post.summary}</p>
                    <div className="w-full h-[1px] bg-gray-600 my-5 md:my-10"></div>
                    <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">Conclusion :</h2>
                    <p className="text-gray-600 text-[12px] md:text-lg">{post.summary}{post.summary}{post.summary}</p>
                    <div className="w-full flex justify-center py-5"><button onClick={() => setShow(false)} className="text-[12px] md:text-[16px] text-blue-600">Hide </button></div>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default PopulerNews;