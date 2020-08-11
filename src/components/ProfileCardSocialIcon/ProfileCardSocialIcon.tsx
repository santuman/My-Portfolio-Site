import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
type Props = {
	classname: string;
};
const ProfileCardSocialIcon: React.FC<Props> = ({ classname }: Props) => {
	return (
		<Link
			to="icon"
			className={`home__profile-card-social__item ${classname}`}
			target="_blank"
		>
			<span className="icon-font">
				<svg className="icon">
					<use href={`#icon-${classname}`}></use>
				</svg>
			</span>
		</Link>
	);
};

export default ProfileCardSocialIcon;
