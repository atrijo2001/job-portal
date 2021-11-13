import Footer from "./components/Footer"
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import Register from './screens/Register'
import OTP from './screens/Otp'
import About from './screens/About'
import Contact from './screens/Contact'
import Employees from "./screens/Employees"

//import the states
import AuthState from "./context/auth/AuthState"

//Dependency imports
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>    
        <BrowserRouter>
        <AuthState>
          <Navbar/>
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<OTP/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/employees' element={<Employees/>}/>
            </Routes>
        </AuthState>
        </BrowserRouter>
        <Footer/>
    </div>
  )
}

export default App
