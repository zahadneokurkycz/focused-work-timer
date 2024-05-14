import React from 'react'
import ReactDOM from 'react-dom/client'
import { UI, Theme } from './UI.jsx'
import './index.css'
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UI />
	<Theme />
	<SpeedInsights/>
  </React.StrictMode>,
)
