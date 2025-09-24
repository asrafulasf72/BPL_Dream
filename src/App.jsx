
import { Suspense, useState } from 'react'
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

  const [toggle, setToggle]=useState(false)
  const promisePlayers=fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
       <div className='max-w-[1200px] mx-auto flex justify-between items-center mb-5'>
           <h1 className='text-[1.5rem] font-medium'>Available Players</h1>
           <div className='font-semibold'>
                <button onClick={()=> setToggle(true)} className={`py-3 px-4 border-1 border-gray-300 rounded-l-[8px] cursor-pointer border-r-0 ${toggle===true?'bg-yellow-300': ""}`}>Available</button>
                <button onClick={()=> setToggle(false)} className={`py-3 px-4 border-1 border-gray-300 rounded-r-[8px] cursor-pointer border-l-0 ${toggle===false?'bg-yellow-300': ""}`}>Selected <span>(0)</span></button>
           </div>
       </div>
       {
        toggle=== true?  <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
      </Suspense> : <SelecetedPlayers></SelecetedPlayers>
       }
     
      
    </>
  )
}

export default App
