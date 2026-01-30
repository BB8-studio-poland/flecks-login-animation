import { AnimationFrame } from './components/AnimationFrame'
import { Loader } from './components/Loader'

function App() {
  // Toggle to show loader demo
  const showLoader = window.location.search.includes('loader')

  if (showLoader) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <Loader />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <AnimationFrame width="100vw" height="100vh" />
    </div>
  )
}

export default App
