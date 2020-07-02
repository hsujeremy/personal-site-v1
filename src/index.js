import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home.js';
import { ClassesPage } from './components/ClassesPage.js';
import { ProjectsPage } from './components/ProjectsPage.js';
import { ReadingPage } from './components/ReadingPage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/classes' component={ClassesPage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/books' component={ReadingPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
