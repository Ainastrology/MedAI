import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider, { UserContextProvider } from './Context/context.jsx'

createRoot(document.getElementById('root')).render(
  
  <UserContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </UserContextProvider>
    
  
)
