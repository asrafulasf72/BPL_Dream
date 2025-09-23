
import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './Componant/AvailablePlayers'
import Banner from './Componant/Banner'
import Navbar from './Componant/Navbar'
import SelecetedPlayers from './Componant/SelecetedPlayers'

const fetchPlayers =async()=>{
  const url='../public/players.json'
  const res= await fetch(url)
  return res.json();
}

function App() {
  const promisePlayers=fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
      </Suspense>
      {/* <SelecetedPlayers></SelecetedPlayers> */}
    </>
  )
}

export default App
