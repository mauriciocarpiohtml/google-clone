import React from 'react'
import ContextGogle from '../context/Context'
import { useContext } from 'react'
import ResultadoCard from './ResultadoCard'

function Resultados() {
    const {resultados} = useContext(ContextGogle)
  return (
    <div className='mt-5 flex flex-col justify-center ml-[200px] items-left mb-10'>

        
      {resultados.map(resultado => (
                                <ResultadoCard
                                resultado={resultado}
                                key={resultado.url}/>
      ))} 
    </div>
  )
}

export default Resultados
