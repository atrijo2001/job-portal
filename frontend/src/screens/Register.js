import {useState, useContext, useEffect} from 'react'
import AuthContext from '../context/auth/authContext'

const Register = () => {

    const authcontext = useContext(AuthContext)
    const {RegisterUser, loading, user, error} = authcontext
    const [users, setUsers] = useState({
        name: '',
        skill: '',
        phone: '',
        aadhar: '',
        experience: '',
        rate: '',
        location: '',
        address: ''
    })
    const {name, skill, phone, aadhar, experience, rate, location, address} = users
    const onChange = e => setUsers({ ...users, [e.target.name]: e.target.value });
    const onSubmit = e => ()=> {
        e.preventDefault();
        if(name==='' || skill==='' || phone==='' || aadhar==='' || experience==='' || rate==='' || location==='' || address===''){
            alert('Please enter all the fields')
        } else{
            RegisterUser({
                name,
                phone,
                aadharNumber: aadhar,
                role: 'employee',
                employeeDetails: {
                    workType: skill,
                    location,
                    hourlyRate: rate,
                    address,
                    experience,
                    location
                }
            })
        }
    }
    return (
        <div className="bg-gray-200 my-6 mx-16 border-4 border-gray-900 rounded-lg  text-blue-900 md:mb-12">
            <div className="text-center font-bold text-4xl">Employee Registration</div>
            <form action="" className='py-4'>
                <div className="grid grid-flow-row md:grid-cols-2 md:grid-rows-2 gap-4">
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Name</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your name" value={name} onChange={onChange} required/>
                        </div>
                        <div className='flex flex-col'>
                                <label htmlFor="" className='font-bold ml-4 text-xl'>Job/Skill</label>
                                <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your job" value={skill} onChange={onChange} required/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Phone</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your phone number" value={phone} onChange={onChange} required/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Aadhar Number</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your aadhar number" value={aadhar} onChange={onChange} required/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Experience</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your experience" value={experience} onChange={onChange} required/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Hourly Rate</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your hourly rate" value={rate} onChange={onChange} required/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Location</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your location" value={location} onChange={onChange} required/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Address</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your full address" value={address} onChange={onChange} required/>
                        </div>
                </div>
                <div class="flex">
                     <div class="m-auto">
                     <button className='my-3 py-3 md:w-72 bg-indigo-900 text-white border-2 rounded-lg' type='submit'>Submit</button>
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default Register
