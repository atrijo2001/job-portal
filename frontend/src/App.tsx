//Component imports
import Navbar from "./components/Navbar"

//dependency imports
import {BrowserRouter as Router} from "react-router-dom";
const App = () => {
  return (
    <div className='text-center'>
      <Router>
        <Navbar/>
      </Router>
    </div>
  )
}

export default App
