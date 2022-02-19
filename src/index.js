import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebase from './firebase/config'
import { firebaseContext } from './storage/FirebaseContext';

ReactDOM.render(
<firebaseContext.Provider value={{firebase}}>

<App />
</firebaseContext.Provider>
 , document.getElementById('root'));
