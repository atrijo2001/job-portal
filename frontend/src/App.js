import Navbar from "./components/Navbar"

//import the states
import AuthState from "./context/auth/AuthState"

const App = () => {
  return (
    <div>
      <AuthState>
          <Navbar/>
      </AuthState>
    </div>
  )
}

export default App
