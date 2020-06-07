import React from "react";
import "./styles.css";
const ProfileCardLocComp = () => {
	return (
		<div className="home__profile-card-loc">
			<span className="home__profile-card-loc__icon">
				<svg className="icon">
					<use href="#icon-location"></use>
				</svg>
			</span>

			<span className="home__profile-card-loc__txt">
				Kathmandu, Nepal
			</span>
		</div>
	);
};

export default ProfileCardLocComp;
