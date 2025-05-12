import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import UseEffect from "./UseEffect"

// day 20 
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"
import SinglePage from "./pages/SinglePage"
function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element ={<Contact/>}/>
    <Route path="/UseEffect" element={<UseEffect/>} />

    {/* Day 20  */}

    <Route path="/home" element={<HomePage/>}/>
    <Route path="/create-page" element={<CreatePage/>}/>
    <Route path="/single-page" element={<SinglePage/>}/>
    <Route path="/edit-page" element={<EditPage/>}/>
  </Routes>
  
  </BrowserRouter>
    
  
    </>
   
  )
}

export default App
