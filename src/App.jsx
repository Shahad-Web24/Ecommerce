
import './App.css'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route,} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import RootLayout from './Components/RootLayout';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Cart from './Pages/Cart';

function App() {

  let myRouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Shop' element={<Shop/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/Cart' element={<Cart/>}/>


    </Route> 
  ))

  return (
    <>
    <RouterProvider router={myRouter }/>
       
    </>
  )
}

export default App
