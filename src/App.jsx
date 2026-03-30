
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {

  return (
    <>
      <Suspense fallback={<h4>Nadir vai on goo...</h4>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  )
}
const countryPromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())
export default App
