import { useRouteError } from "react-router-dom"

interface ErrerType {
    message: string
}
function ErrorBoundery() {
    const error = useRouteError() as ErrerType;
  return (
    <div>
        <h1>{error?.message}</h1>
    </div>
  )
}

export default ErrorBoundery