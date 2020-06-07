// import React, { useState } from "react";
import React from "react";
import "./styles.css";
// import ProfileCardFollowComp from "../ProfileCardFollowComp/ProfileCardFollowComp";
import ProfileCardLocComp from "../ProfileCardLocComp/ProfileCardLocComp";
import ProfileCardPic from "../ProfileCardPic/ProfileCardPic";
import ProfileCardSocialIconCollection from "../ProfileCardSocialIconCollection/ProfileCardSocialIconCollection";
// import ProfileCardBtns from "../ProfileCardBtns/ProfileCardBtns";
// import ProfileCardBtn from "../ProfileCardBtn/ProfileCardBtn";
// import ProfileCardForm from "../ProfileCardForm/ProfileCardForm";

const ProfileCard = () => {
	// const [active, setActive] = useState(false);
	return (
		// <div className={`home__profile-card ${active ? "active" : ""}`}>
		<div className={`home__profile-card`}>
			<ProfileCardPic />
			<div className="home__profile-card__cnt">
				<div className="home__profile-card__name">Santosh Subedi</div>
				<div className="home__profile-card__txt">
					Web Developer from <strong>Nepal</strong>
				</div>
				<ProfileCardLocComp />
				{/* <div className="home__profile-card-inf">
					<ProfileCardFollowComp numbers={1598} title="Followers" />
					<ProfileCardFollowComp numbers={65} title="Following" />
					<ProfileCardFollowComp numbers={123} title="Articles" />
					<ProfileCardFollowComp numbers={85} title="Works" />
				</div> */}
				<ProfileCardSocialIconCollection />
				{/* <ProfileCardBtns>
					<ProfileCardBtn
						title="Message"
						color="blue"
						ClickHandler={e => {
							e.preventDefault();
							setActive(true);
						}}
					/>
					<ProfileCardBtn title="Follow" color="orange" />
				</ProfileCardBtns> */}
			</div>
			{/* <ProfileCardForm
				ClickHandler={e => {
					e.preventDefault();
					setActive(false);
				}}
			/> */}
		</div>
	);
};

export default ProfileCard;
