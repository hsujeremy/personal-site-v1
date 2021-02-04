import React, { Component } from 'react';
import { Banner } from './Banner';
import { Project } from './Project';
import data from '../assets/content-data.json';


export class ProjectsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Jeremy - Projects"
    }

    render() {
        let createProjectList = projectList => (
            projectList.map(project => (
                <Project description={project.description}
                         duration={project.duration}
                         emoji={project.emoji}
                         key={project.name}
                         name={project.name}
                         predescription={project.predescription}
                         tech={project.tech}
                />
            ))
        );

        let compareRecency = (project1, project2) => {
            if (!project1.endDate && !project2.endDate)
                return project2.startDate - project1.startDate;
            else if (!project1.endDate)
                return -1;
            else if (!project2.endDate)
                return 1;
            return project2.endDate - project1.endDate;
        }

        let currentProjects = data.projects.filter(({ endDate }) => !endDate).sort(compareRecency);
        let pastProjects = data.projects.filter(({ endDate }) => endDate).sort(compareRecency);

        return (
            <div className='content'>
                <Banner keywords={['All Projects']} loop={false} />
                <div className='block'>
                    <div>
                        In 2021, I want to take on personal projects that help me learn more about backend development, iOS
                        development, and how to leverage cloud services such as AWS and Google Cloud Platform.
                    </div>
                </div>
                <div className='block'>
                    <div className='header'>In Active Development</div>
                    <div>{createProjectList(currentProjects)}</div>
                </div>
                <div className='block'>
                    <div className='header'>Completed or Archived</div>
                    <div>{createProjectList(pastProjects)}</div>
                </div>
            </div>
        );
    }
};
