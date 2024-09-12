import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pages from './Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages />
  </StrictMode>,
)
