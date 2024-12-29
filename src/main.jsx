import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'//import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));
console.log(root);
console.log(<h1>hi there</h1>);
root.render(//ReactDOM.createRoot();
  <StrictMode>
    <App />
  </StrictMode>
  // react-dom/client contains createRoot element which is used  to render root element 
)
