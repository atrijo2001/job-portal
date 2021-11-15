import { useState, useEffect, useContext } from "react";
import EmployeesContext from "../context/employees/employeesContext";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const employeesContext = useContext(EmployeesContext);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();
  const [skillSearch, setSkillSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const { employees, getEmployees } = employeesContext;
  const { token } = authContext;
  const onSkillChange = (e) => {
    setSkillSearch(e.target.value);
  };

  const onLocationChange = (e) => {
    setLocationSearch(e.target.value);
  };

  let filteredEmployees = employees.filter(
    (item) =>
      (item.name.startsWith(skillSearch) ||
        item.employeeDetails.workType.startsWith(skillSearch)) &&
      item.employeeDetails.location.startsWith(locationSearch)
  );

  useEffect(() => {
    if (token === null) navigate("/login");
    getEmployees();
  }, []);
  return (
    <div className="min-h-screen">
      <div className="flex w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Search by skills,jobs"
          className="rounded-lg p-3 bg-gray-200 w-1/2 m-6"
          value={skillSearch}
          onChange={onSkillChange}
        />
        <input
          type="text"
          placeholder="Location"
          className="rounded-lg p-3 bg-gray-200 w-1/2 m-6"
          value={locationSearch}
          onChange={onLocationChange}
        />
      </div>
      <div className="grid grid-cols-4 gap-2 w-3/4 mx-auto">
        {filteredEmployees &&
          filteredEmployees.map((item) => {
            return (
              <div className="rounded-lg border-black border-2 p-6 flex flex-col items-center justify-between bg-gray-300 w-full mx-auto">
                <img
                  src={item.employeeDetails.photo}
                  alt=""
                  className="rounded-full w-32 h-32 m-6"
                />

                <div className="flex">
                  <p className="font-bold text-red-600">Name:</p>
                  <p>{item.name}</p>
                </div>

                <div className="flex">
                  <p className="font-bold text-red-600">Job Applied:</p>
                  <p>{item.employeeDetails.workType}</p>
                </div>
                <div className="flex">
                  <p className="font-bold text-red-600">Location:</p>
                  <p>{item.employeeDetails.location}</p>
                </div>
                <div className="flex">
                  <p className="font-bold text-red-600">Hourly Rate:</p>
                  <p>{item.employeeDetails.hourlyRate}</p>
                </div>
                <div className="flex">
                  <p className="font-bold text-red-600">Address</p>
                  <p>{item.employeeDetails.address}</p>
                </div>
                <div className="flex">
                  <p className="font-bold text-red-600">Experience:</p>
                  <p>{item.employeeDetails.experience}</p>
                </div>
                <div className="flex">
                  <p className="font-bold text-red-600">Phone:</p>
                  <p>{item.phone}</p>
                </div>
                <button className="mx-auto rounded-md p-3 text-white bg-red-700 w-1/2 mt-3">
                  Book
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Employees;
