import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';

// import Search from './users/Search';
// import UserInfo from './users/UserInfo';
import UserList from './users/UserList';
import UserReposList from './users/UserReposList';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={UserList} />
                    <Route path="/users/:username" exact component={UserReposList} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;