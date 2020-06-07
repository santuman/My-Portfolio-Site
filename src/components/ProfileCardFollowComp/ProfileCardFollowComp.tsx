import React from "react";
import "./styles.css";
type Props = {
	numbers: Number;
	title: string;
};
const ProfileCardFollowComp: React.FC<Props> = ({ numbers, title }: Props) => {
	return (
		<div className="home__profile-card-inf__item">
			<div className="home__profile-card-inf__title">{numbers}</div>
			<div className="home__profile-card-inf__txt">{title}</div>
		</div>
	);
};

export default ProfileCardFollowComp;
