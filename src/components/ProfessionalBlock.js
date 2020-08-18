import React from 'react';
import { Emoji } from './Emoji';
import { Hyperlink } from './Hyperlink';
import Pdf from '../assets/Jeremy-Hsu-Resume.pdf';


/* Cisco Webex prop values */
let cClass = 'webex';
let cHref = 'https://www.webex.com';
let cText = 'Cisco Collaboration';

/* Linkedin hyperlink */
let lHref = 'https://www.linkedin.com/in/jeremy-hsu/';
let lText = 'LinkedIn';
let linkedin = <Hyperlink href={lHref} text={lText} />;

/* GitHub hyperlink */
let gHref = 'https://www.github.com/HsuJeremy';
let gText = 'GitHub';
let github = <Hyperlink href={gHref} text={gText} />;

/* Resume hyperlink */
let resume = <Hyperlink href={Pdf} text='Resume' />;

/* Email link */
let eHref = 'mailto: jeremyhsu@college.harvard.edu';

export const ProfessionalBlock = () => (
    <div className='block'>
        <div className='header'>Professional Info</div>
        <p className='multi-content'>
            I'm currently interning as a software engineer
            at <Hyperlink cl={cClass} href={cHref} text={cText} /> until May 2021.
        </p>
        <p>
            <Emoji symbol='🎬 ' />
            {linkedin} · {github} · {resume}
        </p>
        <p>
            <Emoji symbol='📮 ' />
            Email: <a href={eHref}> jeremyhsu@college.harvard.edu </a>
        </p>
    </div>
);
