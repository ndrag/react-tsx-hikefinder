import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './scss/app';

// We're importing libraries (React & render from react-dom), our entry point component, and our scss. Webpack will bundle all of that from this specification.

render(<App />, document.getElementById("root"));

// Render our App component.