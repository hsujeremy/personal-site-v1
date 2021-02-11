import React from 'react';
import { Link } from 'react-router-dom'
import { Emoji } from './Emoji';
import { Hyperlink } from './Hyperlink';
import Pdf from '../assets/Jeremy-Hsu-Resume.pdf';


let cClass = 'webex';
let cHref = 'https://www.cisco.com';
let cText = 'Cisco'
/* Cisco Webex prop values */
let wClass = 'webex';
let wHref = 'https://www.webex.com';
let wText = 'Webex Media Engine';

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
        <div className='header'>Professional Life</div>
        <p className='multi-content'>
            I’m currently interning as a software engineer at <Hyperlink cl={cClass} href={cHref} text={cText} /> on
            the <Hyperlink cl={wClass} href={wHref} text={wText} /> team. So far, I’ve been primarily working on internal
            debug and triage tools and the media quality data pipeline.
        </p>
        <p className='multi-content'>
            This summer, I'll be conducting research in the Harvard Cloud Networking and Systems Lab. I'm also currently
            seeking a software engineering internship.
        </p>
        <p>
            <Emoji symbol='🎬 ' /> {linkedin} · {github} · {resume}
        </p>
        <p className='multi-content'>
            <Emoji symbol='📮 ' /> Email: <a href={eHref}> jeremyhsu@college.harvard.edu </a>
        </p>
        <p>
            <Link to='/experience'>All Experience</Link>
        </p>
    </div>
);
