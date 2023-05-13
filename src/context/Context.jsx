import { createContext, useState } from "react"

const ContextGogle = createContext()

function Context({children}) {

    const [busqueda, setBusqueda] = useState('')
    const [resultados, setResultados] = useState([])

    async function consultarGoogle(){
        const url = `https://google-search74.p.rapidapi.com/?query=${busqueda}&limit=10&related_keywords=true`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        }

        try {
            const response = await fetch(url, options)
            const result = await response.json()
            setResultados(result.results)
            console.log(result)
        } catch (error) {
            console.error(error)
        }
            }
    
  return (
    <ContextGogle.Provider
    value={{busqueda, setBusqueda, consultarGoogle, resultados}}>
      {children}
    </ContextGogle.Provider>
  )
}

export default ContextGogle

export {Context}
