import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/App.css'
import ThemeContextProvider from '../src/Contexts/ThemeContext.jsx'
import DrawerContextProvider from '../src/Contexts/DrawerContext.jsx'
import StyleMethodProvider from '../src/Contexts/StyleMethodContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <DrawerContextProvider>
        <StyleMethodProvider>
          <App />
        </StyleMethodProvider>
      </DrawerContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)
