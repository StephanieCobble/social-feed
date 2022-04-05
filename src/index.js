// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //     <React.StrictMode>
// //         <App />
// //     </React.StrictMode>
// // );
// ReactDOM.createRoot.render(<App />, document.getElementById('root'));

//https://github.com/facebook/create-react-app/pull/12220/commits/5b3105576d6ee49102c1efa57c3653a7379fe793

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);