import { createBrowserRouter, RouterProvider } from "react-router"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Review from "./Pages/Review"


const App = () => {

  const router = createBrowserRouter([
    {
      path: "",
      element: <Navbar />, 
      children: [
        {
          path: "",
          element:<Home />
        }, {
          path: "review",
          element:<Review />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </>
  )
}

export default App
