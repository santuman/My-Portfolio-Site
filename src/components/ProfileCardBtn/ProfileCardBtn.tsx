import React from "react";
import "./styles.css";
interface Props {
	title: string;
	color: string;
	ClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProfileCardBtn: React.FC<Props> = ({
	title,
	color,
	ClickHandler,
}: Props) => {
	return (
		<button
			className={`home__profile-card__button button--${color}`}
			onClick={e => {
				if (title !== "Message") return;
				if (ClickHandler) {
					ClickHandler(e);
				}
			}}
		>
			{title}
		</button>
	);
};

export default ProfileCardBtn;
