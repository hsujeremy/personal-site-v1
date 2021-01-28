import React from 'react';


const celery = <img className='icon celery'
                    src={ require('../images/celery.png') }
                    alt='Celery'
                    key='Celery'
               />;

const firebase = <img className='icon firebase'
                      src={ require('../images/firebase.png') }
                      alt='Firebase'
                      key='Firebase'
                 />;

const node = <img className='icon node'
                  src={ require('../images/node.png') }
                  alt='Node'
                  key='Node'
             />;

const ocaml = <img className='icon ocaml'
                   src={ require('../images/ocaml.png') }
                   alt='OCaml'
                   key='OCaml'
              />;

const python = <img className='icon python'
                    src={ require('../images/python.png') }
                    alt='Python'
                    key='Python'
               />;

const react = <img className='icon react'
                   src={ require('../images/react.png') }
                   alt='React'
                   key='React'
              />;

const redis = <img className='icon redis'
                   src={ require('../images/redis.png') }
                   alt='Redis'
                   key='Redis'
              />;

const redux = <img className='icon redux'
                   src={ require('../images/redux.png') }
                   alt='Redux'
                   key='Redux'
              />;

const sklearn = <img className='icon sklearn'
                     src={ require('../images/scikit-learn.png') }
                     alt='Scikit-Learn'
                     key='Scikit-Learn'
                />;

const spotify = <img className='icon spotify'
                     src={ require('../images/spotify.png') }
                     alt='Spotify'
                     key='Spotify'
                />;

const swift = <img className='icon swift'
                   src={ require('../images/swift.png') }
                   alt='Swift'
                   key='Swift'
              />;

const yelp = <img className='icon yelp'
                  src={ require('../images/yelp.png') }
                  alt='Yelp'
                  key='Yelp'
             />;

const icons = {
    'celery': celery,
    'firebase': firebase,
    'node': node,
    'ocaml': ocaml,
    'python': python,
    'react': react,
    'redis': redis,
    'redux': redux,
    'sklearn': sklearn,
    'spotify': spotify,
    'swift': swift,
    'yelp': yelp
};

export const ProjectTech = ({ tech }) => {
    if (tech === undefined) {
        return <span></span>;
    }
    let specifiedIcons = tech.map(key => icons[key]);
    return <span>{specifiedIcons.map(element => element)}</span>;
};
