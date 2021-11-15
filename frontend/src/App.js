import { useEffect, useContext } from "react";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Register from "./screens/Register";
import OTP from "./screens/Otp";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Employees from "./screens/Employees";
import EmployerRegister from "./screens/EmployeeRegister";
import AuthContext from "./context/auth/authContext";
//Dependency imports
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const AuthRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<OTP />} />
        <Route path="/employer/register" element={<EmployerRegister />} />
      </Routes>
    </>
  );
};

const App = () => {
  const authcontext = useContext(AuthContext);

  const { token } = authcontext;

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Navbar />

        {token === undefined || token === null ? (
          <AuthRoutes />
        ) : (
          <Routes>
            <Route path="/employees" element={<Employees />} />
          </Routes>
        )}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
