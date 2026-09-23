import { createRoot } from 'react-dom/client';
import { App } from './App';

// Find element 
const element = document.querySelector('#root');

// Initialize react-app in element with `id="root"`
const root = createRoot(element);

// Draw heading on the page
root.render(
  <App />
);
