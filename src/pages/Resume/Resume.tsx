import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import './styles.css';
import ProfileCardPic from '../../components/ProfileCardPic/ProfileCardPic';
const Resume = () => {
	return (
		<PageLayout>
			<div className="resume-wrapper">
				<section className="profile section-padding">
					<ProfileCardPic />
					<div className="clearfix"></div>
					<div className="name-wrapper">
						<h1>
							santosh <br />
							subedi
						</h1>
					</div>
					<div className="clearfix"></div>
					<div className="contact-info clearfix">
						<ul className="list-titles">
							<li>Call</li>
							<li>Mail</li>
							<li>Web</li>
							<li>Home</li>
						</ul>
						<ul className="list-content ">
							<li>98000000</li>
							<li>santsubcode@gmail.com</li>
							<li>
								<a href="santoshsubedi.com.np">
									santoshsubedi.com.np
								</a>
							</li>
							<li>Kathmandu, Nepal</li>
						</ul>
					</div>
					<div className="contact-presentation">
						<p>
							I am a pasonate programmer, quick learner and love
							web & mobile development
						</p>
					</div>
					<div className="contact-social clearfix">
						<ul className="list-titles">
							<li>Twitter</li>
							<li>Dribbble</li>
							<li>Codepen</li>
						</ul>
						<ul className="list-content">
							<li>
								<a href="_blank">@</a>
							</li>
							<li>
								<a href="_blank">link</a>
							</li>
							<li>
								<a href="_blank">link</a>
							</li>
						</ul>
					</div>
					<br />
					<div className="contact-social clearfix">
						<h2>Education</h2>
					</div>
					<div className="contact-social clearfix">
						<ul className="list-titles">
							<li>BE </li>
							<li>High School</li>
						</ul>
						<ul className="list-content">
							<li>
								<a href="_blank">
									Compter Science and Engineering
								</a>
							</li>
							<li>
								<a href="_blank">Aroma College,Bharatpur</a>
							</li>
						</ul>
					</div>
				</section>

				<section className="experience section-padding">
					<div className="container">
						<h3 className="experience-title">Experience</h3>

						<div className="experience-wrapper">
							<div className="company-wrapper clearfix">
								<div className="experience-title">ABC Ltd</div>
								<div className="time">Sept X - Present</div>
							</div>

							<div className="job-wrapper clearfix">
								<div className="experience-title">
									Front End Developer{' '}
								</div>
								<div className="company-description">
									<p>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing elit. Possimus nulla quae
										provident molestias quisquam
										accusantium? Optio dolor aliquid quos
										officia ullam molestiae eius, odio quis
										voluptas animi, perspiciatis explicabo
										similique?
									</p>
								</div>
							</div>

							<div className="company-wrapper clearfix">
								<div className="experience-title">
									ABC Technologies
								</div>
								<div className="time">Aug 2015 - Aug 2016</div>
							</div>

							<div className="job-wrapper clearfix">
								<div className="experience-title">
									Web Developer
								</div>
								<div className="company-description">
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Praesentium quaerat
										aspernatur mollitia rerum quasi labore
										magni ab.
									</p>
								</div>
							</div>

							<div className="company-wrapper clearfix">
								<div className="experience-title">
									ABC SERVICES LTD
								</div>
								<div className="time">JAN 2014 - JUL 2015</div>
							</div>

							<div className="job-wrapper clearfix">
								<div className="experience-title">
									UI DEVELOPER/LAMP{' '}
								</div>
								<div className="company-description">
									<p>
										Lorem ipsum dolor sit, amet consectetur
										adipisicing
									</p>
								</div>
							</div>

							<div className="company-wrapper clearfix">
								<div className="experience-title">
									Art tech Services
								</div>
								<div className="time">Sept X - Jan X</div>
							</div>

							<div className="job-wrapper clearfix">
								<div className="experience-title">
									Freelance, Web Designer / Web Developer,
									IT-admin{' '}
								</div>
								<div className="company-description">
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Nesciunt libero sit
										non unde ad architecto quia quisquam
										sapiente .
									</p>
								</div>
							</div>
						</div>

						<div className="section-wrapper clearfix">
							<h3 className="section-title">Skills</h3>
							<ul>
								<li className="skill-percentage">
									HTML / HTML5
								</li>
								<li className="skill-percentage">
									CSS / CSS3 / BOOTSTRAP
								</li>
								<li className="skill-percentage">Javascript</li>
								<li className="skill-percentage">Python</li>
								<li className="skill-percentage">ReactJs</li>
								<li className="skill-percentage">BASIC PHP</li>
								<li className="skill-percentage">
									BASIC MYSQL
								</li>
								<li className="skill-percentage">LINUX</li>
								<li className="skill-percentage">GIT</li>
								<li className="skill-percentage">WebPack</li>
							</ul>
						</div>

						<div className="section-wrapper clearfix">
							<h3 className="section-title">Hobbies</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Fugiat.
							</p>

							<p>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Deserunt.
							</p>
						</div>
					</div>
				</section>

				<div className="clearfix"></div>
			</div>
		</PageLayout>
	);
};

export default Resume;
