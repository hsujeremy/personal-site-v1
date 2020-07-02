import React from 'react';
import { Banner } from './Banner';
import { Hyperlink } from './Hyperlink';
import '../styles.css';

/* Harvard Hyperlink prop values */
let hClass = 'harvard';
let hHref = 'https://www.harvard.edu';
let hText = 'Harvard';

/* Cisco Hyperlink prop values */
let cClass = 'cisco';
let cHref = 'https://www.cisco.com';
let cText = 'Cisco Systems';

export const Title = () => (
    <div className='title'>
        <Banner keywords={['Software Engineer', '^500 Student', '^500 Designer']} />
        <p className='education'>
            Computer Science @ <Hyperlink cl={hClass} href={hHref} text={hText} />
        </p>
        <p className='work'>
            SWE @ <Hyperlink cl={cClass} href={cHref} text={cText} />
        </p>
    </div>
);
