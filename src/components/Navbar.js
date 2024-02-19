import React,{useState} from 'react'
import './home.css';
import { Link } from 'react-scroll';
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='box'>
      <div className='name'>Priyanshu Bhadauriya</div>
      <ul>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='box1' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='box2' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Project
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
       
      </ul>
    </div>
  )
}

export default Navbar;
