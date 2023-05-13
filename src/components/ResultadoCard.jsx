import React from 'react'
// import { useContext } from 'react'
// import ContextGogle from '../context/Context'

function ResultadoCard({resultado}) {
    
  return (
    <div className='mt-5 p-3 flex gap-3 flex-col border-b border-teal-100 w-[400px] shadow-sm'>
        <a href={resultado.url} target="_blank">
            <h3 className='text-left text-teal-700 font-semibold text-lg cursor-pointer transition-color duration-300 hover:text-teal-900 ease-in'>{resultado.title}</h3>
        </a>
        <p className='text-left  text-stone-500 text-md'>{resultado.description}</p>
      
    </div>
  )
}

export default ResultadoCard
