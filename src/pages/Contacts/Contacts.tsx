import React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import './style.css';

const Contacts = () => {
	return (
		<PageLayout>
			<div className="wrapper">
				<div className="title">Contact</div>

				<form className="form">
					<input
						type="text"
						className="name entry "
						placeholder="Your Name"
					/>

					<input
						type="text"
						className="email entry"
						placeholder="Email"
					/>

					<textarea
						className="message entry"
						placeholder="Message"
					></textarea>

					<button className="submit entry">Submit</button>
				</form>
			</div>
		</PageLayout>
	);
};

export default Contacts;
