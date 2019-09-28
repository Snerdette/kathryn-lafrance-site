import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import ProjectList from '../containers/project-list';
import ProjectDetails from '../containers/project-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
    <h2>Project List</h2>
<UserList />
<hr />
<h2>Project Details</h2>
<UserDetails />
</div>
);

export default App;