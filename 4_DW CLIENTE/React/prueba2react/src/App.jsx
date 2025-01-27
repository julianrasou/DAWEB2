import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './Car.jsx'
import Garage from './Garage.jsx'

function App() {

  return (
    <>
      <Car color="rojo"/>
      <Car />
      <Garage color="azul"/>
    </>
  )
}

export default App
