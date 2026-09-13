const paths = {
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42M6.35 17.65l-1.42 1.42" /></>,
  moon: <path d="M20.7 13A9 9 0 0 1 11 3.3 9 9 0 1 0 20.7 13Z" />,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8m-4-4v4" /></>,
  'arrow-right': <path d="M4 12h16m-6-6 6 6-6 6" />,
  'arrow-down': <path d="M12 4v16m-6-6 6 6 6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  'check-circle': <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />,
  sliders: <><path d="M4 6h9m4 0h3M4 12h3m4 0h9M4 18h9m4 0h3" /><circle cx="15" cy="6" r="2" /><circle cx="9" cy="12" r="2" /><circle cx="15" cy="18" r="2" /></>,
  cursor: <path d="m4 3 7 18 2-8 8-2L4 3Z" />,
  bell: <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-11 12a2 2 0 0 0 4 0" />,
  palette: <><path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.2-3.6 1 1 0 0 1 .6-1.8H17A4 4 0 0 0 21 12a9 9 0 0 0-9-9Z" /><path d="M7 10h.01M10 6h.01M15 7h.01M17 11h.01" strokeWidth="3" /></>,
  leaf: <><path d="M20 4C10 1 2 7 5 15c3 8 16 3 15-11Z" /><path d="M4 21 15 9" /></>,
}

export default function Icon({ name, size = 20, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
