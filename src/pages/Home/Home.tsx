import React from "react";
import "./styles.css";
import PageLayout from "../../components/PageLayout/PageLayout";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const Home = () => {
	return (
		<PageLayout>
			<div className="home__wrapper">
				<ProfileCard />
			</div>
		</PageLayout>
	);
};

export default Home;
