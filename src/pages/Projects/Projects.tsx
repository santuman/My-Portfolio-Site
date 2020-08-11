import * as React from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { Tabs } from '../../components/Tabs/index';

import './styles.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

function Projects() {
	return (
		<PageLayout>
			<Tabs>
				<div className="tabContainer">
					{/* Group of tabs */}
					<Tabs.Tab label="a">Javascript 😎 </Tabs.Tab>
					<Tabs.Tab label="b">Python😀</Tabs.Tab>
					<Tabs.Tab label="c">Rust🤔</Tabs.Tab>
				</div>
				{/* Tab panels */}
				<Tabs.Panel label="a">
					<div className="tabCardContainer">
						<ProjectCard
							screenShotLink="https://i.ibb.co/djHNkqc/my-port-min.png"
							projectName="My Portfolio Site"
							languages={{
								react: 'danger',
								typescript: 'primary',
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
								typescript: 'primary',
							}}
							desc="Bing Map implementation using Bing api and typescript as core language"
							demoLink="https://my-portfolio-santoshcode.netlify.app/"
							githubLink="https://github.com/SantoshCode/Bing-Map"
							codepenLink=""
							youtubeLink=""
						/>
						<ProjectCard
							screenShotLink="https://raw.githubusercontent.com/SantoshCode/kuce-coders/master/kucecoders.png"
							projectName="KUCE-2018 Coders Lists"
							languages={{
								react: 'danger',
							}}
							desc="Bing Map implementation using Bing api and typescript as core language"
							demoLink="https://kuce-coders.netlify.app/"
							githubLink="https://github.com/SantoshCode/kuce-coders"
							codepenLink=""
							youtubeLink=""
						/>
						<ProjectCard
							screenShotLink="https://raw.githubusercontent.com/SantoshCode/SysAdmin-Networking-Tools/master/tracer.png"
							projectName="SysAdmin | Networking Tool"
							languages={{
								react: 'danger',
								electron: 'primary',
							}}
							desc="Trace Route plus basic networking tools"
							demoLink=""
							githubLink="https://github.com/SantoshCode/SysAdmin-Networking-Tools"
							codepenLink=""
							youtubeLink=""
						/>
						<ProjectCard
							screenShotLink="https://raw.githubusercontent.com/SantoshCode/IPOD-desing-html-css-vanilla-js/master/ipod2.png"
							projectName="Working web Ipod"
							languages={{
								HTML: 'primary',
								CSS: 'primary',
								Javascript: 'danger',
							}}
							desc="Web Implementation of Ipod"
							demoLink=""
							githubLink="https://github.com/SantoshCode/IPOD-desing-html-css-vanilla-js"
							codepenLink=""
							youtubeLink=""
						/>
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>
				</Tabs.Panel>
				<Tabs.Panel label="b">
					This is tab B{' '}
					<span role="img" aria-label="Diamond">
						Angular
					</span>
				</Tabs.Panel>
				<Tabs.Panel label="c">
					This is tab C{' '}
					<span role="img" aria-label="Ghost">
						VueJS
					</span>
				</Tabs.Panel>
			</Tabs>
		</PageLayout>
	);
}

export default Projects;
