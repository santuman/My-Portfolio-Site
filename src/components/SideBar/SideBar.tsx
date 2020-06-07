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
							{/* <span className="link-text">Resume</span> */}
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/aboutme" className="nav-link">
							<img
								src="https://img.icons8.com/bubbles/100/000000/about-me-male.png"
								alt="aboutme"
							/>
							{/* <span className="link-text">About Me</span> */}
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/projects" className="nav-link">
							{/* <SvgComp
								dataIcon="angle-double-righ"
								path_1_d_fill="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
								path_2_d_fill="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
							/> */}
							<img
								src="https://img.icons8.com/fluent/96/000000/group-of-projects.png"
								alt=""
							/>
							{/* <span className="link-text">Projects</span> */}
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/contacts" className="nav-link">
							{/* <SvgComp
								dataIcon="angle-double-righ"
								path_1_d_fill="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
								path_2_d_fill="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
							/> */}
							<img
								src="https://img.icons8.com/bubbles/100/000000/contact-card.png"
								alt=""
							/>
							{/* <span className="link-text">Contacts</span> */}
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default SideBar;
