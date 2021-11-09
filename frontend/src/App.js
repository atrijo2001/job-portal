import Footer from "./components/Footer"
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import Register from './screens/Register'

//import the states
import AuthState from "./context/auth/AuthState"

//Dependency imports
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>    
      <AuthState>
      <Navbar/>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/register' element={<Register/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </AuthState>
    </div>
  )
}

export default App
