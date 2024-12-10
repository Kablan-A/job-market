import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/montserrat'; // Defaults to weight 400
import '@fontsource/montserrat/400.css'; // Specify weight
import '@fontsource/montserrat/400-italic.css'; // Specify weight and style
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
