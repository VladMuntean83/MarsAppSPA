import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { TitleImageTemplate } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TitleImageTemplate
        title="Welcome to NASA!"
        image="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
        p1="You are at NASA"
        p2="Join us!"
    />
  </StrictMode>,
)
