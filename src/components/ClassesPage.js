import React, { Component } from 'react';
import { Emoji } from './Emoji';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { database } from '../config';


export class ClassesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { terms: [] };
    }

    componentDidMount() {
        database.ref('courses/').once('value').then(snapshot => {
            let terms = [];
            snapshot.forEach(snap => {
                terms[snap.key] = snap.val();
            });
            this.setState({
                terms: terms.sort((term1, term2) => -1)
            });
        })
    }

    render() {
        let allCoursesList = this.state.terms.map(term => {
            let courses = [];
            for (const prop in term) {
                courses.push(term[prop]);
            }
            let something = [1, 2, 3]
            let indices = Object.keys(term).slice(0, -1);
            let courseList = indices.map(i =>
                (<p><Emoji symbol={term[i].emoji} /> {term[i].number}: {term[i].name}</p>));

            return (
                <div className='block'>
                    <div className='header'>{term.termString}</div>
                    {courseList}
                </div>
            );
        });

        return (
            <div className='content'>
                <Banner keywords={['All Courses']} loop={false}/>
                {allCoursesList}
                <Footer date={'May 24 2020'} />
            </div>
        );
    };
}
