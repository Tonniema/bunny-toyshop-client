import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys";
import AddToys from "../pages/AddToys";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import MyToys from "../pages/MyToys/MyToys";
import View_Details from "../pages/View_Details/View_Details";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Private_Route from "../Routes/Private_Route"
import Update_Doll from "../Update_Doll/Update_Doll";
import About_Page from "../pages/About_Page/About_Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/AllToys',
        element: <AllToys></AllToys>,
        loader: () => fetch("https://bunny-toyshop-server.vercel.app/dolls")
      },
      {
        path: '/AddToys',
        element: <AddToys></AddToys>
      },
      {
        path: '/MyToys',
        element: <MyToys></MyToys>
      },
      {
        path: '/Blog',
        element: <Blog></Blog>

      },
      {
        path: '/About',
        element: <About_Page></About_Page>
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/View_Details/:id',
        element: <Private_Route><View_Details></View_Details></Private_Route>,
        loader: ({ params }) => fetch(`https://bunny-toyshop-server.vercel.app/dolls/${params.id}`)
      },
      {
        path: "/Update_Doll/:id",
        element: <Update_Doll></Update_Doll>,
        loader: ({ params }) => fetch(`https://bunny-toyshop-server.vercel.app/dolls/${params.id}`)
      },
    ]
  },
]);


export default router;