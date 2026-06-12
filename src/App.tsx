import { RouterProvider } from 'react-router-dom'
import './App.css'
import Routes from './routes/Router'

function App() {

  return (
    <>
    <RouterProvider router={Routes}/>
    </>
  )
}

export default App
