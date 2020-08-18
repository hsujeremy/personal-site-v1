import React, { Component } from 'react';
import { Project } from './Project';
import { Link } from 'react-router-dom';
import data from '../assets/content-data.json';


export class ProjectsBlock extends Component {
    render() {
        let filteredProjects = data.projects.filter(project => project.featured);
        let projectList = filteredProjects.map(({ description, emoji, name }) => (
            <Project description={description}
                     emoji={emoji}
                     name={name}
                     key={name}
            />
        ));

        return (
            <div className='block'>
                <div className='header'>Current / Recent Projects</div>
                <div>{projectList}</div>
                <p className='multi-content'>
                    <Link className='multi-content' to='/projects'>All Projects</Link>
                </p>
            </div>
        );
    }
};
