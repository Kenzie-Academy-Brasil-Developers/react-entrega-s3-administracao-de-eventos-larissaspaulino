import { useContext, createContext, useState } from 'react'

const ConfraternizacaoContext = createContext()

export const ConfraternizacaoProvider = ({children}) => {

    const [cervejasConfraternizacao, setCervejasConfraternizacao] = useState([])

    const addCervejaConfraternizacao = (cerveja) => {
        setCervejasConfraternizacao([...cervejasConfraternizacao, cerveja])
    }

    const delCervejaConfraternizacao = (cervejaId) => {
        const updatedList = cervejasConfraternizacao.filter(cer => cer.id !== cervejaId)
        setCervejasConfraternizacao(updatedList)
    }

    return (
        <ConfraternizacaoContext.Provider value={{cervejasConfraternizacao, addCervejaConfraternizacao, delCervejaConfraternizacao}}>{children}</ConfraternizacaoContext.Provider>
    )

}

export const useConfraternizacao = () => useContext(ConfraternizacaoContext)