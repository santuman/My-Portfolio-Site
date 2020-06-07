import React from "react";
import SideBar from "../SideBar/SideBar";
type Props = {
	children: React.ReactNode;
};
const PageLayout = ({ children }: Props) => {
	return (
		<>
			<main>{children}</main>
			<SideBar />
		</>
	);
};

export default PageLayout;
