import React from 'react';
import './styles.css';
import ProfileCardLocComp from '../ProfileCardLocComp/ProfileCardLocComp';
import ProfileCardPic from '../ProfileCardPic/ProfileCardPic';
import ProfileCardSocialIconCollection from '../ProfileCardSocialIconCollection/ProfileCardSocialIconCollection';

const ProfileCard = () => {
	return (
		<div className={`home__profile-card`}>
			<ProfileCardPic />
			<div className="home__profile-card__cnt">
				<div className="home__profile-card__name">Santosh Subedi</div>
				<div className="home__profile-card__txt">
					Computer Programmer from <strong>Nepal</strong>
				</div>
				<ProfileCardLocComp />

				<ProfileCardSocialIconCollection />
			</div>
		</div>
	);
};

export default ProfileCard;
