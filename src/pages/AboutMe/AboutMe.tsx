import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import './style.css';
import ProfilePic from '../../assets/img/image.jpg';
const AboutMe = () => {
	return (
		<PageLayout>
			<h1 className="about-title">About Me</h1>
			<div className="about-container">
				<div className="about-card">
					<div className="shoeBackground">
						<div className="gradient second" color="blue"></div>
						<img className="about-profile" src={ProfilePic} />
					</div>
					<div className="about-info">
						<div className="developer-title">
							<div>
								<h1 className="big">Full Stack Developer</h1>
								<span className="new">beta</span>
							</div>
						</div>
						<div className="description">
							<h3 className="about-title">Developer Info</h3>
							<p className="about-text">
								I am pasionate programmer who loves to build
								mobile & web apps. Currently, studying Computer
								Engineering at Kathmandu University
							</p>
						</div>
						<div className="color-container">
							<h3 className="about-title">MAJOR TECHNOLOGIEs</h3>
							<div className="colors">
								<span className="color" color="blue">
									TS
								</span>
								<span className="color color-js" color="yellow">
									JS
								</span>
								<span className="color color-py" color="green">
									PY
								</span>
							</div>
						</div>
						<div className="size-container">
							<div className="sizes">
								<span className="size">
									<i className="fab fa-facebook"></i>
								</span>
								<span className="size">
									<i className="fab fa-twitter"></i>
								</span>
								<span className="size">
									<i className="fab fa-github"></i>
								</span>
								<span className="size">
									<i className="fab fa-youtube"></i>
								</span>
							</div>
						</div>
						<div className="hire-me">
							<a href="#" className="hire-link">
								HIRE ME
							</a>
						</div>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};

export default AboutMe;
