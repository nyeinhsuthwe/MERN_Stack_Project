import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import axios from '../helpers/axios'

export default function Navbar() {
  let { user, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  let logout = async () => {
      let res = await axios.post('/api/users/logout');
      if (res.status === 200) {
          dispatch({ type: "LOGOUT" })
          navigate('/sign-in');
      }
  }
  
  return (
    <div><nav className='flex justify-between font-bold items-center p-4 pl-20 pr-20 bg-white'>
    <div>
      <h1 className='font-bold text-2xl text-orange-500'>Repicity</h1>
    </div>

      <ul className='flex space-x-5 text-sm font-bold text-gray-600'>
       {!!user && <li><Link to="/" className='hover:text-orange-500'>{user.name}</Link></li>}
        <li><Link to="/" className='hover:text-orange-500'>Home</Link></li>
        <li><Link to="/about" className='hover:text-orange-500' >About</Link></li>
        <li><Link to="/contact" className='hover:text-orange-500'>Contact</Link></li>
        <li><Link to="/recipes/create" className='hover:text-orange-500'>Create Recipe</Link></li>
        {!user && (
          <>
            <li><Link to="/sign-in" className='hover:text-orange-500'>Login</Link></li>
            <li><Link to="/sign-up" className='hover:text-orange-500'>Register</Link></li>
          </>
        )}
        {!!user && (<li><button onClick={logout} className='hover:text-orange-500'>Logout</button></li>)}
      </ul>
    </nav></div>
  )
}
