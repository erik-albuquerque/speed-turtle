import { Toaster } from 'sonner'

import { App } from '../app'

const AppProvider = () => {
  return (
    <>
      <App />
      <Toaster richColors theme="system" position="bottom-right" />
    </>
  )
}

export { AppProvider }
