import React from "react";
import "./styles.css";
import Badges from "../Badges/Badges";

type Class = "danger" | "primary" | "secondary" | "warning" | "info";

interface Props {
	screenShotLink: string;
	projectName: string;
	languages: { [key: string]: Class };
	desc: string;
	demoLink: string;
	githubLink: string;
	codepenLink: string;
	youtubeLink: string;
}
const ProjectCard: React.FC<Props> = ({
	screenShotLink,
	projectName,
	languages,
	desc,
	demoLink,
	githubLink,
	codepenLink,
	youtubeLink,
}) => {
	return (
		<div className="card">
			<div
				className="card-header"
				style={{ backgroundImage: `url(${screenShotLink})` }}
			>
				<h2 className="card-title">{projectName}</h2>
			</div>
			<div className="card-body">
				<div className="chipRow">
					{Object.entries(languages).map(([key, value]) => {
						return (
							<Badges
								name={key}
								key={`${key}123`}
								classname={value}
							/>
						);
					})}
				</div>
				<div className="list-episodes">
					<a href="_blank">{desc}</a>
				</div>
			</div>
			<a className="card-link-footer" href={demoLink}>
				DEMO
			</a>
			<a className="card-link-footer" href={githubLink}>
				GITHUB
			</a>
			<a className="card-link-footer" href={codepenLink}>
				CODEPEN
			</a>
			<a className="card-link-footer" href={youtubeLink}>
				YOUTUBE
			</a>
		</div>
	);
};

export default ProjectCard;
