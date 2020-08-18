import React from 'react';
import { Banner } from './Banner';
import { Hyperlink } from './Hyperlink';


let harvard = ['harvard', 'https://www.harvard.edu', 'Harvard'];
let cisco = ['cisco', 'https://www.cisco.com', 'Cisco Systems'];

export const Title = () => (
    <div className='title'>
        <Banner keywords={['Software Engineer', '^500 Student', '^500 Designer']} />
        <p className='education'>
            Computer Science @ <Hyperlink cl={harvard[0]} href={harvard[1]} text={harvard[2]} />
        </p>
        <p className='work'>
            Software Engineering @ <Hyperlink cl={cisco[0]} href={cisco[1]} text={cisco[2]} />
        </p>
    </div>
);
