import React, { Component } from 'react';
import { Banner } from './Banner';
import { Book } from './Book';
import { Footer } from './Footer';
import { database } from '../config';
import '../styles.css';


export class ReadingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { periods: [] };
    }

    componentDidMount() {
        database.ref('books/').once('value').then(snapshot => {
            let periods = [];
            snapshot.forEach(snap => {
                periods[snap.key] = snap.val();
            });
            this.setState({
                periods: periods.sort((period1, period2) => -1)
            });
        })
    }

    render() {
        let allBooksList = this.state.periods.map(period => {
            let indices = Object.keys(period).slice(0, -1).reverse();
            let bookList = indices.map(i =>
                <Book emoji={period[i].emoji}
                      title={period[i].title}
                      author={period[i].author}
                />);

            return (
                <div className='block'>
                    <div className='header'>{period.header}</div>
                    {bookList}
                </div>
            );
        });

        return (
            <div className='content'>
                <Banner keywords={['Books I\'ve Read']} loop={false} />
                {allBooksList}
                <Footer date={'July 2 2020'} />
            </div>
        );
    }
}
