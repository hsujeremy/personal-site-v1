import React from 'react';
import { Banner } from './Banner';
import { Book } from './Book';
import { Footer } from './Footer';
import '../styles.css';

/* Long titles */
let cagedBird = 'I Know Why the Caged Bird Sings';
let friends = 'How to Win Friends and Influence People';
let habits = 'The 7 Habits of Highly Effective People';
let timCook = 'Tim Cook: The Genius Who Took Apple to the Next Level';
let msfm = 'Man\'s Search for Meaning';

export const ReadingPage = () => (
    <div className='content'>
        <Banner keywords={['Books I\'ve Read']} loop={false} />
        <div className='block'>
            <div className='header'>Currently Reading</div>
            <Book emoji='🕊️' title={cagedBird} author='Maya Angelou' />
            <Book emoji='🤯' title='Enlightenment Now' author='Steven Pinker' />
        </div>
        <div className='block'>
            <div className='header'>So Far in 2020</div>
            <Book emoji='🙅🏻‍♂️' title='White Fragility' author='Robin DiAngelo' />
            <Book emoji='🧸' title='1984' author='George Orwell' />
            <Book emoji='🎎' title='In Order to Live' author='Park Yeon-mi' />
            <Book emoji='👨‍👩‍👧‍👦' title='Normal People' author='Sally Rooney' />
            <Book emoji='🧾' title='This is Marketing' author='Seth Godin' />
            <Book emoji='😎' title={friends} author='Dale Carnegie' />
        </div>
        <div className='block'>
            <div className='header'>In 2019</div>
            <Book emoji='👩🏾‍⚖️' title='Becoming' author='Michelle Obama' />
            <Book emoji='👟' title='Shoe Dog' author='Phil Knight' />
            <Book emoji='🍯' title='The Alchemist' author='Paul Coelho' />
            <Book emoji='🧵' title='Great Expectations' author='Charles Dickens' />
            <Book emoji='📕' title='Educated: A Memoir' author='Tara Westover' />
            <Book emoji='🛠' title={habits} author='Stephen Covey' />
            <Book emoji='👱🏻‍♂️' title={timCook} author='Leander Kahney' />
            <Book emoji='⏰' title='The 4-Hour Work Week' author='Tim Ferriss' />
            <Book emoji='🌋' title='Middlesex' author='Jeffrey Eugenides' />
            <Book emoji='🧗🏽' title={msfm} author='Viktor Frankl' />
            <Book emoji='🔮' title='Flow' author='Mihaly Csikszentmihalyi' />
        </div>
        <div className='block'>
            <div className='header'>Before 2019 - The Ones That Stuck</div>
            <Book emoji='🧨' title='Song of Solomon' author='Toni Morrison' />
            <Book emoji='🎪' title='A Tale of Two Cities' author='Charles Dickens' />
            <Book emoji='🏆' title='The Great Gatsby' author='F. Scott Fitzgerald' />
            <Book emoji='🤵🏻' title='Babbitt' author='Sinclair Lewis' />
            <Book emoji='🔬' title='Arrowsmith' author='Sinclair Lewis' />
            <Book emoji='🏘️' title='Main Street' author='Sinclair Lewis' />
            <Book emoji='🎞️' title='Brave New World' author='Aldous Huxley' />
        </div>
        <Footer date={'June 8 2020'} />
    </div>
);
