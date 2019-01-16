import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ClientCreate from './client/ClientCreate';

const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <Route path='/' exact component={ClientCreate} />
            </BrowserRouter>
        </div>
    )
}

export default App;