/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import MyApp from './MyApp'
import { createRoot } from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

createRoot(document.getElementById('root')).render(<MyApp/>)

reportWebVitals()
