import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Register = () => {
  const navigate = useNavigate();
  const authcontext = useContext(AuthContext);
  const { RegisterUser, user, error, token } = authcontext;
  const [users, setUsers] = useState({
    name: "",
    skill: "",
    phone: "",
    aadhar: "",
    experience: "",
    rate: "",
    location: "",
    address: "",
  });
  const onChange = (e) =>
    setUsers({ ...users, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      users.name === "" ||
      users.skill === "" ||
      users.phone === "" ||
      users.aadhar === "" ||
      users.experience === "" ||
      users.rate === "" ||
      users.location === "" ||
      users.address === ""
    ) {
      alert("Please enter all the fields");
    } else {
      RegisterUser({
        name: users.name,
        phone: users.phone,
        aadharNumber: users.aadhar,
        role: "employee",
        employeeDetails: {
          workType: users.skill,
          location: users.location,
          hourlyRate: users.rate,
          address: users.address,
          experience: users.experience,
        },
      });

      navigate("/login");
      console.log(user);
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) navigate("/employees");
  }, []);
  return (
    <div className="bg-gray-200 my-6 mx-16 border-4 border-gray-900 rounded-lg  text-blue-900 md:mb-12">
      <div className="text-center font-bold text-4xl">
        Employee Registration
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
              Job/Skill
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your job"
              name="skill"
              value={users.skill}
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

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Experience
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your experience"
              name="experience"
              value={users.experience}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Hourly Rate
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your hourly rate"
              name="rate"
              value={users.rate}
              onChange={onChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Location
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your location"
              name="location"
              value={users.location}
              onChange={onChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold ml-4 text-xl">
              Address
            </label>
            <input
              type="text"
              className="p-3 m-3 border-2 border-gray-900 rounded-lg"
              placeholder="Enter your full address"
              name="address"
              value={users.address}
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

export default Register;
