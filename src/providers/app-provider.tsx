import { Toaster } from 'sonner'

import { App } from '../app'
import { ThemeProvider } from './theme-provider'

const AppProvider = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <App />
      <Toaster richColors theme="system" position="bottom-right" />
    </ThemeProvider>
  )
}

export { AppProvider }
