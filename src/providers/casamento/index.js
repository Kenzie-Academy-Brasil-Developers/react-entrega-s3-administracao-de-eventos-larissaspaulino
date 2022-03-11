import { useContext, createContext, useState } from 'react'
import { toast } from 'react-toastify'

const CasamentoContext = createContext()

export const CasamentoProvider = ({ children }) => {
  const [cervejasCasamento, setCervejasCasamento] = useState(JSON.parse(localStorage.getItem('@evento: casamento')) || [])

  const addCervejaCasamento = (cerveja) => {
    setCervejasCasamento([...cervejasCasamento, cerveja])
    localStorage.setItem('@evento: casamento', JSON.stringify([...cervejasCasamento, cerveja]))
    toast.success('Produto adicionado com sucesso')

  }

  const delCervejaCasamento = (cervejaId) => {
    const updatedList = cervejasCasamento.filter(
      (cerveja) => cerveja.id !== cervejaId
    )
    setCervejasCasamento(updatedList)
    localStorage.setItem('@evento: casamento', JSON.stringify(updatedList))
  }

  return (
    <CasamentoContext.Provider
      value={{ cervejasCasamento, addCervejaCasamento, delCervejaCasamento }}
    >
      {children}
    </CasamentoContext.Provider>
  )
}

export const useCasamento = () => useContext(CasamentoContext)
