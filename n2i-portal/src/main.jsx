// ─── PONTO DE ENTRADA DA APLICAÇÃO ───────────────────────
// Este ficheiro arranca o React e injeta a app no index.html
// O BrowserRouter activa o React Router em toda a aplicação
// ─────────────────────────────────────────────────────────

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)