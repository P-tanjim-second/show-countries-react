
import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
          </button>
        </div>
      </div>
      <div>
        <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">

          {/* content */}
          <div className="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
            <div className="card-body">
              <div className="flex justify-between mb-10">
                <div className="font-bold">BANK OF LATVERIA</div>
                <div className="text-5xl opacity-10">❁</div>
              </div>
              <div className="text-lg mb-4 opacity-40">0210 8820 1150 0222</div>
              <div className="flex justify-between">
                <div>
                  <div className="text-xs opacity-20">CARD HOLDER</div>
                  <div>VICTOR VON D.</div>
                </div>
                <div>
                  <div className="text-xs opacity-20">EXPIRES</div>
                  <div>29/08</div>
                </div>
              </div>
            </div>
          </div>

          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </a>
      </div>
      <Suspense fallback={<h4>Nadir vai on goo...</h4>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  )
}
const countryPromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())
export default App
