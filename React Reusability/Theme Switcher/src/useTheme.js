import { useEffect, useLayoutEffect, useState } from 'react'

export const themes = [
  { value: 'light', label: 'Light', icon: 'sun' },
  { value: 'dark', label: 'Dark', icon: 'moon' },
  { value: 'system', label: 'System', icon: 'monitor' },
]

export const accents = [
  { value: 'sage', label: 'Sage', color: '#527c61' },
  { value: 'iris', label: 'Iris', color: '#8b75b7' },
  { value: 'ocean', label: 'Ocean', color: '#5b88b4' },
  { value: 'clay', label: 'Clay', color: '#c48267' },
  { value: 'rose', label: 'Rose', color: '#b9718b' },
]

const storageKey = 'luma-preferences'
const defaults = { theme: 'system', accent: 'sage', motion: true }

function readPreferences() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey))
    return {
      theme: themes.some((theme) => theme.value === stored?.theme) ? stored.theme : defaults.theme,
      accent: accents.some((accent) => accent.value === stored?.accent) ? stored.accent : defaults.accent,
      motion: typeof stored?.motion === 'boolean' ? stored.motion : defaults.motion,
    }
  } catch {
    return defaults
  }
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setMatches(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [query])
  return matches
}

export default function useTheme() {
  const [preferences, setPreferences] = useState(readPreferences)
  const [saved, setSaved] = useState(false)
  const systemDark = useMediaQuery('(prefers-color-scheme: dark)')
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const resolvedTheme = preferences.theme === 'system' ? (systemDark ? 'dark' : 'light') : preferences.theme

  useLayoutEffect(() => {
    const root = document.documentElement
    root.dataset.theme = resolvedTheme
    root.dataset.accent = preferences.accent
    root.dataset.motion = preferences.motion && !reducedMotion ? 'on' : 'off'
    root.style.colorScheme = resolvedTheme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', resolvedTheme === 'dark' ? '#181e1b' : '#f8f9f5')
  }, [resolvedTheme, preferences.accent, preferences.motion, reducedMotion])

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(preferences))
      setSaved(true)
    } catch {
      // The controls still work when browser storage is unavailable.
      setSaved(false)
    }
  }, [preferences])

  function setPreference(key, value) {
    setPreferences((current) => ({ ...current, [key]: value }))
  }
  return { preferences, resolvedTheme, reducedMotion, saved, setPreference }
}
