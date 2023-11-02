import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { MovieFinder } from './MovieFinder.jsx'
import './styles/searcher.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MovieFinder></MovieFinder>
  </React.StrictMode>,
)
