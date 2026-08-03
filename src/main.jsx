// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Provider } from 'react-redux';
// import { store } from './redux/store'; // आपण बनवलेला स्टोअर

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
    
  
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import './index.css'; // तुमची CSS फाईल इथे जोडली आहे

// ReactDOM.createRoot(document.getElementById('root')).render(
  
    
  
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// जर इथे import './index.css'; असेल, तर ती ओळ काढून टाका.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);