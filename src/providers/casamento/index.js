import { useContext, createContext, useState } from 'react'

const CasamentoContext = createContext()

export const CasamentoProvider = ({children}) => {

    const [cervejasCasamento, setCervejasCasamento] = useState([])

    const addCervejaCasamento = (cerveja) => {
        setCervejasCasamento([...cervejasCasamento, cerveja])
    }

    const delCervejaCasamento = (cervejaId) => {
        const updatedList = cervejasCasamento.filter(cerveja => cerveja.id !== cervejaId)
        setCervejasCasamento(updatedList)
    }

    return (
        <CasamentoContext.Provider value={{cervejasCasamento, addCervejaCasamento, delCervejaCasamento}}>{children}</CasamentoContext.Provider>
    )

}

export const useCasamento = () => useContext(CasamentoContext)