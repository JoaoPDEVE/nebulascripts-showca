import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SectionDots } from '@/components/SectionDots'
import { NavigationArrows } from '@/components/NavigationArrows'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { NetworkStatus } from '@/components/NetworkStatus'
import { BackToTop } from '@/components/BackToTop'
import { Home } from '@/routes/Home'
import { Terms } from '@/routes/Terms'
import { Privacy } from '@/routes/Privacy'
import { Toaster } from '@/components/ui/sonner'
import '@/i18n'

function AppContent() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="h-screen flex flex-col overflow-hidden relative">
      <AnimatedBackground />
      <NetworkStatus />
      <Header />
      <main className="flex-1 overflow-hidden relative z-10">
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
          <BackToTop />
        </>
      )}
      <Toaster richColors position="top-center" />
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