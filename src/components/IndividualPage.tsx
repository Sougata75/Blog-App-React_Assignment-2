import { useLocation } from "react-router-dom";
import type { DataType } from "../typescript/interface/blogInterface";


function IndividualPage() {
//   const { id } = useParams();
//   const [post, setPost] = useState<DataType | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);

//   useEffect(() => {
//     const fetching = async () => {
//       try {
//         let fetchedData = await axios.get(`https://jsonfakery.com/blogs`);
//         setPost(fetchedData?.data)
//         console.log("all data")
//       } catch (error:any) {
//         console.log(error.message);
//       } finally {
//         setLoading(false);
//       }
//       fetching();
//     };
//   }, [id]);

//   console.log("route id",id);
//   console.log(post?.id)

const location = useLocation()
const post = location.state as DataType;



  return (
    <>
        <div className="flex flex-wrap justify-center gap-12">
            <div className="w-full h-[65vh] bg-cover bg-center" style={{backgroundImage: `url(${post.featured_image})`}}>
                <div className="w-full h-full py-[115px] flex justify-center items-end bg-gradient-to-b from-transparent to-gray-950">
                    <div className="w-[1170px]">
                        <p className="text-white font-bold text-[54px]">{post.title}</p>
                    </div>
                    </div>
            </div>

            <div className="w-[1170px] flex justify-between pb-16">
                <div className="w-[65%] flex flex-wrap gap-5">
                    <h2 className="text-gray-400 text-2xl font-semibold">Introduction :</h2>
                    <p className="text-gray-600 text-lg">{post.summary}{post.summary}{post.summary}</p>
                    <div className="w-full h-[1px] bg-gray-600 my-10"></div>
                    <h2 className="text-gray-400 text-2xl font-semibold">Main Content :</h2>
                    <p className="text-gray-600 text-lg">{post.summary}{post.summary}{post.summary}{post.summary}</p>
                    <p className="text-gray-600 text-lg">{post.summary}{post.summary}{post.summary}</p>
                    <p className="text-gray-600 text-lg">{post.summary}{post.summary}{post.summary}{post.summary}</p>
                    <div className="w-full h-[1px] bg-gray-600 my-10"></div>
                    <h2 className="text-gray-400 text-2xl font-semibold">Conclusion :</h2>
                    <p className="text-gray-600 text-lg">{post.summary}{post.summary}{post.summary}</p>
                </div>
                <div className="w-[1px] bg-gray-600"></div>
                <div className="w-[32%] h-[500px] flex flex-wrap">
                    <div className="w-full flex flex-wrap pl-8 h-[300px]">
                        <div className="w-[90%] h-[200px] bg-cover bg-center rounded-xl" style={{backgroundImage: `url(${post.user.profile_pic})`}}></div>
                        <h3 className="text-gray-500 text-lg font-semibold">Author : {post.user.first_name} {post.user.middle_name} {post.user.last_name}</h3>
                    </div>
                    <div className="w-full pl-8 flex flex-wrap gap-1">
                        <p className="w-[48%] text-gray-600">Category: {post.category}</p>
                        <p className="w-[48%] text-gray-600">Created: {post.created_at}</p>
                        <p className="w-[48%] text-gray-600">Updated: {post.updated_at}</p>
                        <p className="w-[48%] text-gray-600">Category: {post.category}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default IndividualPage;
