import LoadingVideo from "../assets/vecteezy_icon-loading-circle-two-line-loop-out-animation-with-a_4844747.mp4";

function Loading() {
  return (
    <>
    <div className="w-full h-[60vh] md:h-[100vh] flex justify-center bg-black items-center text-3xl text-white">
          <video
            className="w-[200px] md:w-[400px] h-[200px] md:h-[400px]"
            src={LoadingVideo}
            autoPlay
            muted
            loop
          ></video>
        </div>
    </>
  )
}

export default Loading