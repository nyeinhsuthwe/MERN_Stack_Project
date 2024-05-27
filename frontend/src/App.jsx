import { Outlet} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
 return (
    <div>
      <Navbar/>
      <div className='p-5 pl-20 pr-20 '>
      <Outlet/>
      </div>
    </div>
  )
}

export default App
