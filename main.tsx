import * as React from "react";
import { createRoot } from 'react-dom/client';
import * as ReactDOM from "react-dom";
import App from './src/app';

// ReactDOM.render(<App />, document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(<App />);
