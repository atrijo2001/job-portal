import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const EmployerRegister = () => {
  const navigate = useNavigate();
  const authcontext = useContext(AuthContext);
  const { RegisterUser, user, error } = authcontext;
  const [users, setUsers] = useState({
    name: "",
    phone: "",
    aadhar: "",
  });
  const onChange = (e) =>
    setUsers({ ...users, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      users.name === "" ||
      users.phone === "" ||
      users.aadhar === "" 
    ) {
      alert("Please enter all the fields");
    } else {
      RegisterUser({
        name: users.name,
        phone: users.phone,
        aadharNumber: users.aadhar,
        role: "employer"
      });

      navigate("/login");
      console.log(user);
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-200 my-6 mx-16 border-4 border-gray-900 rounded-lg  text-blue-900 md:mb-12">
      <div className="text-center font-bold text-4xl">
        Employer Registration
      </div>
      <form className="py-4" onSubmit={onSubmit}>
        <div className="grid grid-flow-row md:grid-cols-2 md:grid-rows-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Name
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your name"
              name="name"
              value={users.name}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Phone
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={users.phone}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Aadhar Number
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your aadhar number"
              name="aadhar"
              value={users.aadhar}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="flex">
          <div className="m-auto">
            <input
              type="submit"
              className="my-3 py-3 md:w-72 bg-indigo-900 text-white border-2 rounded-lg"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployerRegister;
