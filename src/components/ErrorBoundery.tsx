import { useRouteError } from "react-router-dom"

interface ErrerType {
    message: string
}
function ErrorBoundery() {
    const error = useRouteError() as ErrerType;
  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div>
        <h2 className="text-white/50 font-bold text-2xl md:text-6xl">Something is Going Wrong</h2>
        <h1 className="text-white/50 py-4 text-xl md:text-4xl font-semibold">Error: {error?.message}</h1>
      </div>
    </div>
  )
}

export default ErrorBoundery