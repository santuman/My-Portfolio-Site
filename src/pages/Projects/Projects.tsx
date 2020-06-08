import * as React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import { Tabs } from "../../components/Tabs/index";

import "./styles.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Projects() {
	return (
		<PageLayout>
			<Tabs>
				<div className="tabContainer">
					{/* Group of tabs */}
					<Tabs.Tab label="a">react</Tabs.Tab>
					<Tabs.Tab label="b">angular</Tabs.Tab>
					<Tabs.Tab label="c">vuejs</Tabs.Tab>
				</div>
				{/* Tab panels */}
				<Tabs.Panel label="a">
					<div className="tabCardContainer">
						<ProjectCard
							screenShotLink="https://raw.githubusercontent.com/SantoshCode/My-Portfolio-Site/master/portfolio.png"
							projectName="My Portfolio Site"
							languages={{
								react: "danger",
								typescript: "primary",
							}}
							desc="The is my porfolio website built on ReactJS Library"
							demoLink="https://my-portfolio-santoshcode.netlify.app/"
							githubLink="https://github.com/SantoshCode/My-Portfolio-Site"
							codepenLink=""
							youtubeLink=""
						/>
						<ProjectCard
							screenShotLink="https://raw.githubusercontent.com/SantoshCode/Bing-Map/master/bingMap.png"
							projectName="Bing Map Using TypeScript"
							languages={{
								typescript: "primary",
							}}
							desc="Bing Map implementation using Bing api and typescript as core language"
							demoLink="https://my-portfolio-santoshcode.netlify.app/"
							githubLink="https://github.com/SantoshCode/Bing-Map"
							codepenLink=""
							youtubeLink=""
						/>
						<ProjectCard
							screenShotLink="https://raw.githubusercontent.com/SantoshCode/kuce-coders/master/kucecoders.png"
							projectName="Bing Map Using TypeScript"
							languages={{
								react: "danger",
							}}
							desc="Bing Map implementation using Bing api and typescript as core language"
							demoLink="https://kuce-coders.netlify.app/"
							githubLink="https://github.com/SantoshCode/kuce-coders"
							codepenLink=""
							youtubeLink=""
						/>
					</div>
				</Tabs.Panel>
				<Tabs.Panel label="b">
					This is tab B{" "}
					<span role="img" aria-label="Diamond">
						Angular
					</span>
				</Tabs.Panel>
				<Tabs.Panel label="c">
					This is tab C{" "}
					<span role="img" aria-label="Ghost">
						VueJS
					</span>
				</Tabs.Panel>
			</Tabs>
		</PageLayout>
	);
}

export default Projects;
