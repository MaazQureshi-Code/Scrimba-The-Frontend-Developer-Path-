import Button from './Button'
import Icon from './Icon'

function Landscape() {
  return (
    <div className="landscape" aria-hidden="true">
      <div className="landscape-glow" />
      <div className="scene-orbit orbit-one" /><div className="scene-orbit orbit-two" />
      <div className="celestial sun" /><div className="celestial moon"><i /><i /><i /></div>
      <div className="stars"><i /><i /><i /><i /><i /><i /><i /><i /></div>
      <div className="cloud cloud-one" /><div className="cloud cloud-two" />
      <svg className="mountains" viewBox="0 0 700 300" preserveAspectRatio="none">
        <path className="mountain-far" d="M0 195C90 205 119 105 227 125S381 227 465 146 589 103 700 147V300H0Z" />
        <path className="mountain-middle" d="M0 232C122 260 163 180 262 176S432 288 541 202 650 184 700 203V300H0Z" />
        <path className="mountain-near" d="M0 244C104 192 183 261 286 243S437 220 528 258 653 232 700 245V300H0Z" />
        <path className="landscape-trail" d="M370 235C318 254 429 264 374 300" />
      </svg>
      <span className="landscape-coordinate">SLOW DOWN & LOOK AROUND</span>
    </div>
  )
}

export default function ThemePreview({ theme, onToggleTheme, liked, onToggleLike }) {
  const isDark = theme === 'dark'
  return (
    <article className="preview-window" aria-labelledby="preview-title">
      <div className="window-toolbar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>a little breathing room</span><Icon name="leaf" size={14} /></div>
      <div className="landscape-container"><Landscape /><span className="scene-badge"><Icon name={isDark ? 'moon' : 'sun'} size={13} />{isDark ? 'THE QUIET HOURS' : 'A FRESH PERSPECTIVE'}</span><span className="scene-label">{isDark ? 'Easy evenings.' : 'Hello, sunshine.'}</span></div>
      <div className="preview-content">
        <div className="preview-copy"><div className="preview-eyebrow"><span />{isDark ? 'ROOM TO UNWIND' : 'ROOM TO BEGIN'}</div><h3 id="preview-title">{isDark ? 'Less noise. More you.' : 'A space to feel inspired.'}</h3><p>{isDark ? 'Turn down the lights. Let the good ideas stay.' : 'A clear mind, a fresh start, a little possibility.'}</p></div>
        <div className="preview-actions"><Button onClick={onToggleTheme}>{isDark ? 'Let the light in' : 'Meet the night'}<Icon name="arrow-right" size={16} /></Button><button type="button" className="icon-button favorite-button" aria-label={liked ? 'Remove from favorites' : 'Add to favorites'} aria-pressed={liked} onClick={onToggleLike}><Icon name="heart" size={19} /></button><span className="preview-mode"><span />{isDark ? 'Dark' : 'Light'} feels good</span></div>
      </div>
    </article>
  )
}
