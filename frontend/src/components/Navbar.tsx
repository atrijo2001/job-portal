import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='bg-gray-100'>
            <div className="container py-5">
            <ul className="flex flex-row-reverse">
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" to='/home'>Home</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" to='/about'>About</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" to='/contact'>Contact</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-gray-400" to='/register'>Register</Link>
                </li>
            </ul> 
            </div>
        </nav>
    )
}

// eslint-disable-next-line

export default Navbar
