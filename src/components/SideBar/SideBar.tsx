/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const SideBar = () => {
	return (
		<>
			<nav className="navbar">
				<ul className="navbar-nav">
					<li className="logo">
						<Link to="/" className="nav-link">
							<img
								src="https://img.icons8.com/bubbles/100/000000/iron-man.png"
								alt=""
							/>
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/resume" className="nav-link">
							<img
								src="https://img.icons8.com/bubbles/100/000000/resume.png"
								alt="resume"
							/>
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/aboutme" className="nav-link">
							<img
								src="https://img.icons8.com/bubbles/100/000000/about-me-male.png"
								alt="aboutme"
							/>
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/projects" className="nav-link">
							<img
								src="https://img.icons8.com/fluent/96/000000/group-of-projects.png"
								alt=""
							/>
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/contacts" className="nav-link">
							<img
								src="https://img.icons8.com/bubbles/100/000000/contact-card.png"
								alt=""
							/>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default SideBar;
