import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import { UserPage } from './pages/UserPage.tsx'
import { Navigation } from './components/Navigation.tsx'
import { UserNewPage } from './pages/UserNewPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <header className="container-fluid mb-3">
        <Navigation />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/user" element={<UserPage />}/>
          <Route path='/user/new' element={<UserNewPage/>}/>
        </Routes>      
      </main>
    </BrowserRouter>
  </StrictMode>,
)
