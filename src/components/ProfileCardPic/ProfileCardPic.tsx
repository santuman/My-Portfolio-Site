import React from "react";
import ProfilePic from "../../assets/img/image.png";
import "./styles.css";

const ProfileCardPic = () => {
	return (
		<div className="home__profile-card__img">
			<img src={ProfilePic} alt="profile card" />
		</div>
	);
};

export default ProfileCardPic;
