import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
	const [ logedIn, setLogedIn ] = useState(true);

	return (
		<div className="header">
			<nav>
				<ul>
						<div className="logo">
							<Link to="/" />
						</div>
					<li>
						<Link to="/account">Account</Link>
					</li>
					<li>
						<Link to="/transition">Transition</Link>
					</li>
				</ul>
				<div className="login">
					{logedIn ? (
						<Link
							onClick={() => {
								setLogedIn(false);
							}}
							to="/"
						>
							Log Out
						</Link>
					) : (
						<Link to="/">LogIn</Link>
					)}
				</div>
			</nav>
		</div>
	);
}
