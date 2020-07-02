import React, { Component } from 'react';
import { Banner } from './Banner';
import { Project } from './Project';
import { Footer } from './Footer';
import { database } from '../config';
import '../styles.css';


export class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProjects: [],
            pastProjects: []
        };
    }

    componentDidMount() {
        database.ref('projects/').once('value').then(snapshot => {
            let currentProjects = [];
            let pastProjects = [];
            snapshot.forEach(snap => {
                snap.val().endDate ?
                pastProjects.push(snap.val()) :
                currentProjects.push(snap.val());
            });
            this.setState({
                currentProjects: currentProjects.sort((project1, project2) =>
                                                          project2.startDate - project2.startDate),
                pastProjects: pastProjects.sort((project1, project2) =>
                                                    project2.endDate - project1.endDate)
             });
        });
    }

    render() {
        let createProjectList = projectList => (
            projectList.map(project => (
                <Project description={project.description}
                         duration={project.duration}
                         emoji={project.emoji}
                         key={project.key}
                         name={project.name}
                         predescription={project.predescription}
                         tech={project.tech}
                />
            ))
        );

        return (
            <div className='content'>
                <Banner keywords={['All Projects']} loop={false} />
                <div className='block'>
                    <div className='header'>In Active Development</div>
                    <div>{createProjectList(this.state.currentProjects)}</div>
                </div>
                <div className='block'>
                    <div className='header'>Completed / Archived</div>
                    <div>{createProjectList(this.state.pastProjects)}</div>
                    <Footer date={'May 24 2020'} />
                </div>
            </div>
        );
    }
};
