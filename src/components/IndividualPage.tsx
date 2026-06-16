import { useNavigate, useParams } from "react-router-dom";
import type { DataType } from "../typescript/interface/blogInterface";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../assets/vecteezy_icon-loading-circle-two-line-loop-out-animation-with-a_4844747.mp4";
import { Send, ThumbsUp } from "lucide-react";

function IndividualPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  // const location = useLocation()
  // const post = location.state as DataType;

  const [data, setData] = useState<DataType[]>([]);
  const [showMore, setShowMore] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>();

  const [like, setLike] = useState<string[]>([]);

  const handleLike = (id: string) => {
    setLike((prev) => {
      return prev.includes(id)
        ? prev.filter((likedId) => likedId !== id)
        : [...prev, id];
    });
  };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://jsonfakery.com/blogs`);
        setData(response?.data);
        setShowMore(response?.data);
      } catch (errors: any) {
        setError(errors.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  const post = data.filter((item) => item.id === id);
  const similarData = showMore
    .filter((item) => item.category === post?.[0]?.category)
    .slice(1, 4);

  return (
    <>
      {loading ? (
        <div className="w-full h-[60vh] md:h-[100vh] flex justify-center bg-black items-center text-3xl text-white">
          <video
            className="w-[200px] md:w-[400px] h-[200px] md:h-[400px]"
            src={Loading}
            autoPlay
            muted
            loop
          ></video>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center ">
          <div
            className="w-full h-[30vh] md:h-[65vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${post?.[0]?.featured_image})` }}
          >
            <div className="w-full h-full py-8 md:py-[100px] flex justify-center items-end bg-gradient-to-b from-transparent to-gray-950">
              <div className="w-full md:w-[1170px]">
                <p className="text-white font-bold px-5 md:px-0 text-center text-lg md:text-[54px] md:leading-normal">
                  {post?.[0]?.title}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[1170px] flex flex-wrap justify-between py-6 md:py-16">
            <div className="w-full  md:w-[65%] px-2 md:px-0 md:border-r border-b pb-6 md:pb-12 border-gray-600 flex flex-wrap gap-3 md:gap-5">
              <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">
                Introduction :
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">
                {post?.[0]?.summary}
                {post?.[0]?.summary}
                {post?.[0]?.summary}
              </p>
              <div className="w-full h-[1px] bg-gray-600 my-5 md:my-10"></div>
              <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">
                Main Content :
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">
                {post?.[0]?.summary}
                {post?.[0]?.summary}
                {post?.[0]?.summary}
                {post?.[0]?.summary}
              </p>
              <p className="text-gray-600 text-sm md:text-lg">
                {post?.[0]?.summary}
                {post?.[0]?.summary}
                {post?.[0]?.summary}
              </p>
              <p className="text-gray-600 text-sm md:text-lg">
                {post?.[0]?.summary}
                {post?.[0]?.summary}
                {post?.[0]?.summary}
                {post?.[0]?.summary}
              </p>
              <div className="w-full h-[1px] bg-gray-600 my-5 md:my-10"></div>
              <h2 className="text-gray-400 text-lg md:text-2xl font-semibold">
                Conclusion :
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">
                {post?.[0]?.summary}
                {post?.[0]?.summary}
                {post?.[0]?.summary}
              </p>
            </div>
            {/* <div className="w-[1px] hidden md:block bg-gray-600"></div> */}
            <div className="w-full md:w-[35%] h-auto border-b pb-6 md:pb-12 border-gray-600  flex flex-wrap flex-col">
              <div className="w-full flex flex-wrap justify-center md:justify-normal pt-8 md:pt-0 md:pl-8 h-[300px]">
                <div
                  className="w-[90%] h-[200px] bg-cover bg-center rounded-xl"
                  style={{
                    backgroundImage: `url(${post?.[0]?.user.profile_pic})`,
                  }}
                ></div>
                <h3 className="text-gray-500 text-lg font-semibold">
                  Author : {post?.[0]?.user.first_name}{" "}
                  {post?.[0]?.user.middle_name} {post?.[0]?.user.last_name}
                </h3>
              </div>
              <div className="w-full pl-8 flex flex-wrap gap-1 gap-y-6">
                <p className="w-[48%] text-gray-600">
                  Category: {post?.[0]?.category}
                </p>
                <p className="w-[48%] text-gray-600">
                  Created: {post?.[0]?.created_at}
                </p>
                <p className="w-[48%] text-gray-600">
                  Updated: {post?.[0]?.updated_at}
                </p>
                <p className="w-[48%] text-gray-600">
                  Category: {post?.[0]?.category}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-center bg-gray-900 py-6 md:py-16">
            <div className="w-[1170px] flex flex-wrap px-2 md:px-0 gap-5">
                <h2 className="w-full text-yellow-500 text-xl md:text-5xl font-bold mb-2 md:mb-5">View Similer Post's</h2>
              {similarData?.map((item) => (
                <div key={item.id} className="w-full md:w-[32%]">
                  <div
                    className="w-full h-52 bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${item.featured_image})` }}
                  ></div>
                  <h3 className="mt-6 mb-3 text-[15px] text-white font-bold">
                    {" "}
                    {item.title}
                  </h3>
                  <p className="w-full text-gray-600">{item.category}</p>
                  <div>
                    <div className="w-full flex flex-wrap justify-between pt-4 md:pt-7">
                      <div className="w-[20%] flex justify-between">
                        <button onClick={() => handleLike(item.id)}>
                          <ThumbsUp
                            color={`${like.includes(item.id) ? "#dc2626" : "#4b5563"}`}
                          />
                        </button>
                        <button className="text-gray-600">
                          <Send color=" #4b5563 " />
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() =>
                            navigate(`/blogPost/${item.id}`, { state: item })
                          }
                          className="text-black font-semibold bg-yellow-500 p-2 px-4 rounded-lg hover:translate-y-[-2px] hover:bg-yellow-700 transition-all"
                        >
                          Vire More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndividualPage;
