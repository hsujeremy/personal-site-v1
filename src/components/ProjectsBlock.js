import React, { Component } from 'react';
import { Project } from './Project';
import { Link } from 'react-router-dom';
import data from '../assets/content-data.json';


export class ProjectsBlock extends Component {
    render() {
        let comparePriority = (project1, project2) => project1.featured - project2.featured;

        let filteredProjects = data.projects.filter(project => project.featured).sort(comparePriority);
        let projectList = filteredProjects.map(({ description, emoji, name }) => (
            <Project description={description}
                     emoji={emoji}
                     name={name}
                     key={name}
                     featuredVersion={true}
            />
        ));

        return (
            <div className='block'>
                <div className='header'>Featured Projects</div>
                <div>{projectList}</div>
                <Link className='multi-content' to='/projects'>All Projects</Link>
            </div>
        );
    }
}
