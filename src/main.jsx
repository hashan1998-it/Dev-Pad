import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/App.css'
import ThemeContextProvider from '../src/Contexts/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
)
