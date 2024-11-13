import { useEffect } from 'react'

function useUpdateFavicon() {
  useEffect(() => {
    const updateFavicon = () => {
      const favicon: HTMLLinkElement =
        document.querySelector("link[rel='icon']") ||
        document.createElement('link')

      favicon.rel = 'icon'

      const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      favicon.href = darkMode ? '/favicon-light.svg' : '/favicon-dark.svg'

      document.head.appendChild(favicon)
    }

    updateFavicon()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateFavicon)

    return () => {
      mediaQuery.removeEventListener('change', updateFavicon)
    }
  }, [])
}

export { useUpdateFavicon }
