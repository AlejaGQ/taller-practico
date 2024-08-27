import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/components/Header'
import Content from './assets/components/Content'
import Footer from './assets/components/Footer'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
    <Footer />
  </StrictMode>,
)
