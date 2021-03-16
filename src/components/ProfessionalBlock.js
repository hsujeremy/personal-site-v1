import React from 'react';
import { Link } from 'react-router-dom'
import { Emoji } from './Emoji';
import { Hyperlink } from './Hyperlink';
import Pdf from '../assets/Jeremy-Hsu-Resume.pdf';


// let cClass = 'webex';
// let cHref = 'https://www.cisco.com';
// let cText = 'Cisco'

// /* Cisco Webex prop values */
// let wClass = 'webex';
// let wHref = 'https://www.webex.com';
// let wText = 'Webex Media Engine';

// /* Lime */
// let lime = <Hyperlink cl={'lime'} href={'https://www.li.me/en-US/home'} text={'Lime'} />

// let cns = <Hyperlink cl={'harvard-cns'} href={''} text={'Harvard Cloud Networking and Systems Lab'} />

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
        I'm currently interning as a software engineer at Cisco on the Webex Media Engine team. At the moment, I'm
        working on an acoustic echo canceler testing framework for macOS and Windows builds.
        </p>
        <p className='multi-content'>
        In my spare time, I've started conducting research in the Harvard Cloud Networking and Systems Lab, where I'm seeing how we
        can use RPC queues to identify common network issues more accurately, and will be working on this extensively
        in the coming months. This summer, I'll also be interning as a software engineer at Lime.
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
