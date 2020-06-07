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
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
						<ProjectCard />
					</div>
				</Tabs.Panel>
				<Tabs.Panel label="b">
					This is tab B{" "}
					<span role="img" aria-label="Diamond">
						💎
					</span>
				</Tabs.Panel>
				<Tabs.Panel label="c">
					This is tab C{" "}
					<span role="img" aria-label="Ghost">
						👻
					</span>
				</Tabs.Panel>
			</Tabs>
		</PageLayout>
	);
}

export default Projects;
