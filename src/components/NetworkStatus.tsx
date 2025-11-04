import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WifiHigh, WifiSlash } from '@phosphor-icons/react'

export function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [showStatus, setShowStatus] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      setShowStatus(true)
      setTimeout(() => setShowStatus(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowStatus(true)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <AnimatePresence>
      {showStatus && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg glass-card border-2 flex items-center gap-2"
          style={{
            borderColor: isOnline ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)',
          }}
        >
          {isOnline ? (
            <>
              <WifiHigh size={20} className="text-green-500" weight="bold" />
              <span className="text-sm font-medium">Conexão restaurada</span>
            </>
          ) : (
            <>
              <WifiSlash size={20} className="text-red-500" weight="bold" />
              <span className="text-sm font-medium">Sem conexão</span>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
