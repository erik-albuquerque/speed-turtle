import { Toaster } from 'sonner'

import { App } from '../app'
import { ThemeProvider } from './theme-provider'
import { TooltipProvider } from '::/components/ui/tooltip'

const AppProvider = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <App />
        <Toaster richColors theme="system" position="bottom-right" />
      </TooltipProvider>
    </ThemeProvider>
  )
}

export { AppProvider }
