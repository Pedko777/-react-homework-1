import React from 'react';

import users from './data/user.json';
import {Profile} from './components/Profile/Profile';

const App =() => {
  // console.log(users)
  return (
    <ul>
        <Profile {...users}/>
    </ul>
  );
};

export default App;
