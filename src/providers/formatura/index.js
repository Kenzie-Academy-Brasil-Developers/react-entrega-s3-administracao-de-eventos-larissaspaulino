import { useContext, createContext, useState } from 'react'

const FormaturaContext = createContext()

export const FormaturaProvider = ({children}) => {

    const [cervejasFormatura, setCervejasFormatura] = useState([])

    const addCervejaFormatura = (cerveja) => {
        setCervejasFormatura([...cervejasFormatura, cerveja])
    }

    const delCervejaFormatura = (cervejaId) => {
        const updatedList = cervejasFormatura.filter(cer => cer.id !== cervejaId)
        setCervejasFormatura(updatedList)
    }

    return (
        <FormaturaContext.Provider value={{cervejasFormatura, addCervejaFormatura, delCervejaFormatura}}>{children}</FormaturaContext.Provider>
    )

}

export const useFormatura = () => useContext(FormaturaContext)