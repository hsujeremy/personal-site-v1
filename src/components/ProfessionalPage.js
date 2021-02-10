import React, { Component } from 'react';
import { Banner } from './Banner';
import { Job } from './Job';


export class ProfessionalPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Jeremy - Experience"
    }

    render() {
        return (
            <div className='content'>
                <Banner keywords={['Experience']} loop={false} />
                <div className='block'>
                    <div className='header'>Industry</div>

                    <Job company='Cisco Systems'
                         position='Software Engineer Intern'
                         team='Webex Media Engine'
                         emoji='🎥'
                         duration='May 2020 - Present'
                         description={['A lot of code.']}
                    />
                </div>
                <div className='block'>
                    <div className='header'>Research</div>

                    <Job company='Harvard Cloud Networking and Systems Group'
                         position='Research Assistant'
                         emoji='🎒'
                         duration='Starting in May'
                         description={["Will conduct research under Professor Minlan Yu."]}
                    />
                </div>
            </div>

        )
    }
}
