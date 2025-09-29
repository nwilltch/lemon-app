import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
         <div>Logo</div>
         <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order online</li>
            <li>Login</li>
          </ul>
         </nav>
      </header>
      <main>
      </main>
      <footer></footer>
    </>
  )
}

export default App
