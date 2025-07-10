import { createRoot } from 'react-dom/client'
import './index.css'
import  { Nasa } from './App.tsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Nasa />
  </BrowserRouter>,
)
