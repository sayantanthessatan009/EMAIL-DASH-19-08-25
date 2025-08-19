import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import EmailDashboard from './email_dashboard'   // 👈 use your dashboard

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmailDashboard />
  </React.StrictMode>,
)
