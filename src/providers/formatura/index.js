import { useContext, createContext, useState } from 'react'
import { toast } from 'react-toastify'

const FormaturaContext = createContext()

export const FormaturaProvider = ({ children }) => {
  const [cervejasFormatura, setCervejasFormatura] = useState(JSON.parse(localStorage.getItem('@evento: formatura')) || [])

  const addCervejaFormatura = (cerveja) => {
    setCervejasFormatura([...cervejasFormatura, cerveja])
    localStorage.setItem('@evento: formatura', JSON.stringify([...cervejasFormatura, cerveja]))
    toast.success('Produto adicionado com sucesso')

  }

  const delCervejaFormatura = (cervejaId) => {
    const updatedList = cervejasFormatura.filter((cer) => cer.id !== cervejaId)
    setCervejasFormatura(updatedList)
    localStorage.setItem('@evento: confraternizacao', JSON.stringify(updatedList))

  }

  return (
    <FormaturaContext.Provider
      value={{ cervejasFormatura, addCervejaFormatura, delCervejaFormatura }}
    >
      {children}
    </FormaturaContext.Provider>
  )
}

export const useFormatura = () => useContext(FormaturaContext)
