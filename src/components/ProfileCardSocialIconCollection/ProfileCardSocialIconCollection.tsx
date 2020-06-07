import React from "react";
import "./styles.css";
import ProfileCardSocialIcon from "../ProfileCardSocialIcon/ProfileCardSocialIcon";
const ProfileCardSocialIconCollection = () => {
	return (
		<div className="home__profile-card-social">
			<ProfileCardSocialIcon classname="facebook" />
			<ProfileCardSocialIcon classname="twitter" />
			<ProfileCardSocialIcon classname="instagram" />
			{/* <ProfileCardSocialIcon classname="behance" /> */}
			<ProfileCardSocialIcon classname="github" />
			<ProfileCardSocialIcon classname="codepen" />
			{/* <ProfileCardSocialIcon classname="link" /> */}
		</div>
	);
};

export default ProfileCardSocialIconCollection;
