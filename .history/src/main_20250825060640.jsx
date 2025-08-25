import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from "react-router";

// npm run dev

createRoot(document.getElementById('root')).render(
  <HashRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </Router>,
)