
import './App.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route,} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import RootLayout from './Components/RootLayout';
import Blog from './Pages/Blog';

function App() {

  let myRouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blog' element={<Blog/>}/>
    </Route> 
  ))

  return (
    <>
    <RouterProvider router={myRouter }/>
       
    </>
  )
}

export default App
