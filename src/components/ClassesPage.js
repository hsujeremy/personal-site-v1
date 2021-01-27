import React, { Component } from 'react';
import { Emoji } from './Emoji';
import { Banner } from './Banner';
import data from '../assets/content-data.json';


export class ClassesPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Jeremy - Courses';
    }

    render() {
        let allCoursesList = Object.keys(data.courses).map(i => {
            let courses = data.courses[i];
            let courseList = courses.slice(1).map(({ emoji, number, name }) =>
                <p key={name}><Emoji symbol={emoji} /> {number}: {name}</p>);
            let header = courses[0];
            return (
                <div className='block' key={header}>
                    <div className='header'>{header}</div>
                    {courseList}
                </div>
            )
        });

        return (
            <div className='content'>
                <Banner keywords={['All Courses']} loop={false}/>
                {allCoursesList}
            </div>
        );
    };
}
