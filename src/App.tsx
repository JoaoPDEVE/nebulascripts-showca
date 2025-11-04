import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SectionDots } from '@/components/SectionDots'
import { NavigationArrows } from '@/components/NavigationArrows'
import { Home } from '@/routes/Home'
import { Terms } from '@/routes/Terms'
import { Privacy } from '@/routes/Privacy'
import { Toaster } from '@/components/ui/sonner'
import '@/i18n'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={
            <div className="h-full overflow-y-auto">
              <Terms />
              <Footer />
            </div>
          } />
          <Route path="/privacy" element={
            <div className="h-full overflow-y-auto">
              <Privacy />
              <Footer />
            </div>
          } />
        </Routes>
      </main>
      {isHomePage && (
        <>
          <SectionDots />
          <NavigationArrows />
        </>
      )}
      <Toaster />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App