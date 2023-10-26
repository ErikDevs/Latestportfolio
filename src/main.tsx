import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ThemeContext from './components/StateProvider/StateProvider.tsx'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContext>
       <App />
        
    </ThemeContext>
  </React.StrictMode>
)
