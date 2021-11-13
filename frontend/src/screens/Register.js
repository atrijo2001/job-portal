const Register = () => {
    return (
        <div className="bg-gray-200 my-6 mx-16 border-4 border-gray-900 rounded-lg  text-blue-900">
            <div className="text-center font-bold text-4xl">Employee Registration</div>
            <form action="" className='py-4'>
                <div className="grid grid-flow-row md:grid-cols-2 md:grid-rows-2 gap-4">
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Name</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your name"/>
                        </div>
                        <div className='flex flex-col'>
                                <label htmlFor="" className='font-bold ml-4 text-xl'>Job/Skill</label>
                                <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your job"/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Phone</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your phone number"/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Aadhar Number</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your aadhar number"/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Experience</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your experience"/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Hourly Rate</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your hourly rate"/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Location</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your location"/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-bold ml-4 text-xl'>Address</label>
                            <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg' placeholder="Enter your full address"/>
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
