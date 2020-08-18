import React from 'react';


// Create icons
let firebase = <img className='icon ocaml'
                 src={ require('../images/firebase.png') }
                 alt='Firebase'
                 key='Firebase'
            />;

let node = <img className='icon ocaml'
                 src={ require('../images/node.png') }
                 alt='Node'
                 key='Node'
            />;

let ocaml = <img className='icon ocaml'
                 src={ require('../images/ocaml.png') }
                 alt='OCaml'
                 key='OCaml'
            />;

let react = <img className='icon ocaml'
                 src={ require('../images/react.png') }
                 alt='React'
                 key='React'
            />;

let redux = <img className='icon ocaml'
                 src={ require('../images/redux.png') }
                 alt='Redux'
                 key='Redux'
            />;

let swift = <img className='icon ocaml'
                 src={ require('../images/swift.png') }
                 alt='Swift'
                 key='Swift'
            />;

let yelpFusion = <img className='icon ocaml'
                 src={ require('../images/yelp-fusion.png') }
                 alt='Yelp Fusion'
                 key='Yelp Fusion'
            />;
// Place icons in object
let icons = {
    'firebase': firebase,
    'node': node,
    'ocaml': ocaml,
    'react': react,
    'redux': redux,
    'swift': swift,
    'yelpFusion': yelpFusion
};

export const ProjectTech = ({ tech }) => {
    if (tech === undefined) { return <span></span>; }
    // Create values array based on tech
    let specifiedIcons = tech.map(key => icons[key]);

    // Return element
    return <span>{specifiedIcons.map(element => element)}</span>;
};
