import React from 'react'
import { Link } from "react-router-dom";
import about from '../pages/about';
import contact from '../pages/contact';
export default function navbar() {
  return (
    <div className='nav'>
        <div className='logo'>
            <h2>logo</h2>
        </div>
        <ul className='ul'>
        <Link to="/"> <li>home </li></Link>
        <Link to="/about"> <li>about </li></Link>
        <Link to="/contact"> <li>contact </li></Link>
        </ul>
    </div>
  )
}
