import React, { Component } from 'react';
import { Banner } from './Banner';
import { Book } from './Book';
import data from '../assets/content-data.json';


export class ReadingPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Jeremy - Books';
    }

    render() {
        let allBooksList = Object.keys(data.books).map(index => {
            let books = data.books[index].slice(1).reverse();

            let header = data.books[index][0];
            let bookList = books.map(({ emoji, title, author }) => {
                return <Book emoji={emoji} title={title} author={author} key={title} />
            });
            return (
                <div className='block' key={header}>
                    <div className='header'>{header}</div>
                    {bookList}
                </div>
            );
        })

        return (
            <div className='content'>
                <Banner keywords={['Books I\'ve Read']} loop={false} />
                {allBooksList}
            </div>
        );
    }
}
