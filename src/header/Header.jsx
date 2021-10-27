import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [logedIn,setLogedIn]=useState(true)

    return (
        <div>
            <div className="header">
                <nav>
                    <ul>
                        <li ><Link to="/" className="logo"></Link></li>
                        <li><Link to="/account">Account</Link></li>
                        <li><Link to="/transition">Transition</Link></li>
                    </ul>
                    <div>
                        {logedIn?<Link onClick={()=>{setLogedIn(false)}} to="/">Log Out</Link>:
                        <Link to="/">LogIn</Link>}
                    </div>
                </nav>
            </div>
        </div>
    )
}
