import React from 'react';
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
            Since last May, I've been interning as a software engineer at <Hyperlink cl={cClass} href={cHref} text={cText} /> on
            the <Hyperlink cl={wClass} href={wHref} text={wText} /> team. At Cisco, my responsibilities span a variety of
            projects, but my main contributions so far have involved expanding and automating components of our internal
            triage and debugging tools as well as helping to monitor media quality performance metrics and troubleshoot
            problem areas.
        </p>
        <p className='multi-content'>
            This summer, I'm looking to conduct research with the Harvard Cloud Networking and Systems group.
            I'm also seeking a software engineering internship role!
        </p>
        <p>
            <Emoji symbol='🎬 ' /> {linkedin} · {github} · {resume}
        </p>
        <p>
            <Emoji symbol='📮 ' /> Email: <a href={eHref}> jeremyhsu@college.harvard.edu </a>
        </p>
    </div>
);
