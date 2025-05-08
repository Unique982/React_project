import { BrowserRouter,Routes,Route} from "react-router-dom"

function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element ={<h1>Welcome Home page</h1>}/>
    <Route path="/about" element={<h1>Welcome About page</h1>}/>
    <Route path="/contact" element ={<div>
      <h1>Contact page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus magnam eaque sapiente recusandae dolore excepturi quia facere ut sit odio.
      </p>
      <p>Email:testinggmail.com</p>


    </div>}/>
  </Routes>
  
  </BrowserRouter>
    
  
    </>
   
  )
}

export default App
