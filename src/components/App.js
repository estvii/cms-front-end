import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ClientCreate from './client/ClientCreate';
import ClientFilter from './client/ClientFilter';
import ClientList from './client/ClientList';

const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={ClientList}/>
                    <Route path='/create' exact component={ClientCreate} />
                    <Route path='/client/filter/:id' exact component={ClientFilter} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;