import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './2/2_4_1/style.css'
import App from './2/2_4_1/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
