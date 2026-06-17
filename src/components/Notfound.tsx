import { useNavigate } from "react-router-dom"

function Notfound() {
  const navigate = useNavigate()
  return (
    <>
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-gray-600 text-2xl md:text-8xl font-bold">Page Not Found !</h1>
      <button onClick={() => navigate("/")} className="bg-yellow-500 text-black font-semibold rounded-sm md:rounded-md px-4 py-1 md:px-8 md:py-2 mt-5 md:mt-16">Go Back ?</button>
    </div>
    </>
  )
}

export default Notfound