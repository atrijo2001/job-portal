import {useState} from 'react'

const Otp = () => {
    const [phno, setPhno] = useState('');
    const [otpsent, setOtpsent] = useState(false)
    const [otp, setOtp] = useState('');
    const sendOtp = (e) => {
        e.preventDefault();
        setOtpsent(true);
    }
    const loginUser = (e) => {
        e.preventDefault();
    }
    return (
        <div className="bg-gray-200 my-24 mx-16 border-4 border-gray-900 rounded-lg  text-blue-900">
            <h1 className="text-center font-bold my-5">Please Login to Continue</h1>
            <div className="p-6">
                <div className="flex flex-col">
                    <label htmlFor="" className='font-bold ml-4 text-xl'>Please enter your Phone number</label>
                    <div className="flex">
                        <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg w-4/5' value={phno} onChange={(e)=> setPhno(e.target.value)}/> 
                        <button onClick={sendOtp} className='w-1/5 bg-yellow-400 m-3 border-2 border-white rounded-lg'>SEND OTP</button>
                    </div>
                    {otpsent&&<div className='text-green-500 ml-4 font-bold'>Otp sent at {phno}</div>}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="" className='font-bold ml-4 text-xl'>Please enter the otp sent</label>
                    <div className="flex">
                        <input type="text" className='p-3 m-3 border-2 border-gray-900 rounded-lg w-3/5' value={otp} onChange={(e)=> setOtp(e.target.value)}/> 
                        <div className='w-1/5 mt-8 ml-8 font-bold text-lg'>Did not receive an OTP?</div>
                        <button onClick={sendOtp} className='text-white font-bold w-1/5 bg-blue-600 m-3 border-2 border-white rounded-lg'>Resend</button>
                    </div>
                    
                </div>
                <button onClick={loginUser} className='mt-8 w-full bg-blue-800 text-white font-bold p-4 border-2 border-white rounded-lg text-xl'>Verify</button>
            </div>
        </div>
    )
}

export default Otp
