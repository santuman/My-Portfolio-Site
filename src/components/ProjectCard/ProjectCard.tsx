import React from "react";
import "./styles.css";
import Badges from "../Badges/Badges";
const ProjectCard = () => {
	return (
		<div className="card">
			<div className="card-header">
				<h2 className="card-title">My Porfolio Site</h2>
			</div>
			<div className="card-body">
				{/* <p className="sub-text">Adventure, Comedy • 2020</p> */}
				{/* <h4 className="mt-0 mb-1">Episodes</h4> */}
				<div className="chipRow">
					<Badges name="React" classname="danger" />
					<Badges name="Typescript" classname="primary" />
				</div>
				<div className="list-episodes">
					<a href="_blank">
						This my portfolio site made with react and Typescript
					</a>
				</div>
			</div>
			<a className="card-link-footer" href="_blank">
				DEMO
			</a>
			<a className="card-link-footer" href="_blank">
				GITHUB
			</a>
			<a className="card-link-footer" href="_blank">
				CODEPEN
			</a>
			<a className="card-link-footer" href="_blank">
				YOUTUBE
			</a>
		</div>
	);
};

export default ProjectCard;
