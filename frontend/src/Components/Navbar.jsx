import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div><nav className='flex justify-between font-bold items-center p-4 pl-20 pr-20 bg-white'>
    <div>
      <h1 className='font-bold text-2xl text-orange-500'>Repicity</h1>
    </div>

      <ul className='flex space-x-5 text-sm font-bold text-gray-600'>
        <li><Link to="/" className='hover:text-orange-500'>Home</Link></li>
        <li><Link to="/about" className='hover:text-orange-500' >About</Link></li>
        <li><Link to="/contact" className='hover:text-orange-500'>Contact</Link></li>
        <li><Link to="/recipes/create" className='hover:text-orange-500'>Create Recipe</Link></li>
        <li><Link to="/sign-in" className='hover:text-orange-500'>Sign-in</Link></li>
        <li><Link to="/sign-up" className='hover:text-orange-500'>Register</Link></li>
      </ul>
    </nav></div>
  )
}
