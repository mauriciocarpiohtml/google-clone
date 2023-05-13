import React from 'react'
import { useContext } from 'react'
import ContextGogle from '../context/Context'

function Navbar() {
      
     const {busqueda, setBusqueda, consultarGoogle} = useContext(ContextGogle)

      function handleKeyDown(e){
        if(e.key === 'Enter' && busqueda !== ''){
            handleBusqueda()
        }
     }
     async function handleBusqueda(){
        console.log(busqueda)
        consultarGoogle()
     }

  return (
    <div className='mt-3 h-[100px] border-b shadow-sm px-3 flex justify-between items-center'>
      <div className='flex gap-12'>
        <img src='src/images/google.png'
        alt='Google logo' 
        className='w-[130px] ml-3' />
        <input
        value={busqueda}
        onKeyDown={handleKeyDown}
        onChange={(e) => setBusqueda(e.target.value)}
        className='rounded-full shadow-md px-5 py-2 w-[550px] focus:outline-none' 
        type='text'
        placeholder='Buscador'/>
      </div>

      <div className='flex gap-7 mr-10'>
        <svg
        className='text-teal-800 fill-current cursor-pointer'
        xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
        </svg>
        <svg 
        className='cursor-pointer text-teal-800 fill-current'
        xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2zm2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2.004 2.004 0 0 1 1.437-1.437V3.937A2.004 2.004 0 0 1 12.063 2.5H3.937A2.004 2.004 0 0 1 2.5 3.937zM14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
        <svg
        className='cursor-pointer text-teal-800 fill-current'
        xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
        </svg>
      </div>
    </div>
  )
}

export default Navbar
