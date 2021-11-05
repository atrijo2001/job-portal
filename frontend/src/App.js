import Footer from "./components/Footer"
import Homepage from "./components/Homepage"
import Navbar from "./Navbar"
import Navbar from "./components/Navbar"

//import the states
import AuthState from "./context/auth/AuthState"

const App = () => {
  return (
    <div>    
      <AuthState>
          <Navbar/>
          <Homepage/>
          <Footer/>
      </AuthState>
    </div>
  )
}

export default App
