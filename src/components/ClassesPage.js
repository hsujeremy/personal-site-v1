import React from 'react';
import { Emoji } from './Emoji';
import { Banner } from './Banner';
import { Footer } from './Footer';

/* Long course titles */
let cs179 = 'CS 179: Design of Useful and Usable Interactive Systems';
let math21b = 'Math 21b: Linear Algebra and Differential Equations';

// Abstract out into components later on
export const ClassesPage = () => (
    <div className='content'>
        <Banner keywords={['All Courses']} loop={false}/>
        <div className='block'>
            <div className='header'>Spring 2020</div>
            <p><Emoji symbol='📸' /> CS 51: Abstraction and Design in Computation</p>
            <p><Emoji symbol='🎁' /> {cs179}</p>
            <p><Emoji symbol='🛠' /> {math21b}</p>
            <p><Emoji symbol='📈' /> FRSEMR 40d: The Transformation of Marketing</p>
        </div>
        <div className='block'>
            <div className='header'>Fall 2019</div>
            <p><Emoji symbol='📱' /> CS 50: Introduction to Computer Science</p>
            <p><Emoji symbol='📦' /> Math 21a: Multivariable Calculus</p>
            <p><Emoji symbol='💸' /> Ec 10a: Principles of Microeconomics</p>
            <p><Emoji symbol='🛣' /> Expos 20: Narrating Immigration</p>
            </div>
        <Footer date={'May 24 2020'} />
    </div>
);
