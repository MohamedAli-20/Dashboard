import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import App from './app';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);