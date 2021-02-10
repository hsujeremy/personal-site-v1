import React from 'react';
import { Emoji } from './Emoji';


export const Job = props => {
    const { company, position, team, duration, emoji, description } = props;

    let titleItems = [company, position, team].filter(item => item !== undefined && item.length > 0);
    titleItems = titleItems.map(item => item.trim());
    const title = titleItems.join(', ');

    let createUniqueKey = paragraph => {
        let result = company.concat(paragraph.slice(0, 5));
        result = result.concat(emoji);
        result = result.concat(paragraph[-1]);
        return result;
    }

    let formatDescription = description =>
        description.map(paragraph => (<p className='job-content multi-content' key={createUniqueKey(paragraph)}>
                                          {paragraph}
                                      </p>));

    return (
        <div className='job'>
            <p className='job-title'><Emoji symbol={emoji} /> {title}</p>
            <p className='job-content job-duration multi-content'>{duration}</p>
            {formatDescription(description)}
        </div>
    );
}
