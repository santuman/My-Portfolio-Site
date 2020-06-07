import React from "react";
import "./styles.css";
interface Props {
	ClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
const ProfileCardForm: React.FC<Props> = ({ ClickHandler }: Props) => {
	return (
		<div className="home__profile-card-message js-message">
			<form className="home__profile-card-form">
				<div className="home__profile-card-form__container">
					<textarea placeholder="Say something..."></textarea>
				</div>

				<div className="home__profile-card-form__bottom">
					<button className="home__profile-card__button button--blue ">
						Send
					</button>

					<button
						className="home__profile-card__button button--gray "
						onClick={e => {
							if (ClickHandler) {
								ClickHandler(e);
							}
						}}
					>
						Cancel
					</button>
				</div>
			</form>

			<div className="home__profile-card__overlay "></div>
		</div>
	);
};

export default ProfileCardForm;
