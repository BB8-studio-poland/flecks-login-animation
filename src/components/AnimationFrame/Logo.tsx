import logo from './assets/logo.svg'

export function Logo() {
  return (
    <img
      src={logo}
      alt="Flecks"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
      style={{
        width: 356,
        height: 68,
      }}
    />
  )
}
