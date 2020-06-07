import React from "react";
import "./styles.css";
type Props = {
	children: React.ReactNode;
};
const ProfileCardBtns: React.FC<Props> = ({ children }: Props) => {
	return <div className="home__profile-card-ctr">{children}</div>;
};

export default ProfileCardBtns;
