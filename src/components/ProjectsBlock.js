import React, { Component } from 'react';
import { Project } from './Project';
import { Link } from 'react-router-dom';
import { database } from '../config';
import '../styles.css';


export class ProjectsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = { projects: [] };
    }

    componentDidMount() {
        database.ref('projects/').once('value').then(snapshot => {
            let projects = [];
            snapshot.forEach(snap => {
                if (snap.val().featured) projects.push(snap.val());
            });
            this.setState({
                projects: projects.sort((project1, project2) =>
                                            project2.featured - project1.featured)
            });
        });
    }

    render() {
        let projectList = this.state.projects.map(project => (
            <Project description={project.description}
                     emoji={project.emoji}
                     name={project.name}
                     key={project.key}
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
