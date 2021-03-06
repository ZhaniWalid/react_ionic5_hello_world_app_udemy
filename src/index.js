import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//-- 'setupConfig' => Used for explicit Tests => To force our Device to be an 'IOS' or 'Android'
// import { setupConfig } from '@ionic/react';

// Use this cmd: 'npm install @ionic/react' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
//- To apply the 'Core CSS' of 'Ionic Globally' on our app
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css'; // We are overriding our 'primary colour' from 'blue(default)' to '#831000'

// 'setupConfig' => Used for explicit Tests  => To force our Device to be an 'IOS' or 'Android'
/* setupConfig({
    mode: "ios" // "ios" => Design Tools (for 'IOS Devices') or "md" => Materiel Design (for 'Android Devices')
}); */

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
