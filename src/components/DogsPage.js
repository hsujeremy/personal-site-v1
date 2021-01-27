import React, { Component } from 'react';
import { Banner } from './Banner';


export class DogsPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = "Jeremy - Dogs"
    }

    render() {
        return (
            <div className='content'>
                <Banner keywords={['My Two Puppies']} loop={false} />
                <div className='block'>
                    <p className='multi-content'>
                        Yup, I do have dogs. They're two fluffy boys named Bao Bao and Di Di. They're pretty great, and
                        also sleep a ton. Good for them.
                    </p>
                    <p className='multi-content'>
                        I also tend to procrastinate on putting stuff on this site. At least the link from the homepage
                        routes to a new page now. Perhaps I'll post pictures of them before I graduate (I'll be a
                        sophomore this fall).
                    </p>
                </div>
            </div>

        )
    }
}
