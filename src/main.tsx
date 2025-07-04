
import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      < App />
    </React.StrictMode>,
  )
}