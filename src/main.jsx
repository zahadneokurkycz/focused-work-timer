import React from 'react'
import ReactDOM from 'react-dom/client'
import { UI, Theme, Github } from './UI.jsx'
import './index.css'
import { SpeedInsights } from '@vercel/speed-insights/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UI />
	<Theme />
	<SpeedInsights/>
	<Github />
  </React.StrictMode>,
)
