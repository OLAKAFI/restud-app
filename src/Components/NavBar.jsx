import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <h1>Routing Class</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/product">Products</Link>
            </li>
            {/* <li>
                <Link to="/admin">Admin</Link>
            </li> */}
            <li>
                <Link to='/post/2018/06'>Posts</Link>
            </li>
            <li>
                <Link to='/loginnew'>Login</Link>
            </li>
        </ul>
    
    
    
    
    </>
  )
}

export default NavBar