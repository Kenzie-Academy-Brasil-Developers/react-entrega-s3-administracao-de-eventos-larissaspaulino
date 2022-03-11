import { useContext, createContext, useState } from 'react'
import { toast } from 'react-toastify'

const ConfraternizacaoContext = createContext()

export const ConfraternizacaoProvider = ({ children }) => {
  const [cervejasConfraternizacao, setCervejasConfraternizacao] = useState(JSON.parse(localStorage.getItem('@evento: confraternizacao')) || [])

  const addCervejaConfraternizacao = (cerveja) => {
    setCervejasConfraternizacao([...cervejasConfraternizacao, cerveja])
    localStorage.setItem('@evento: confraternizacao', JSON.stringify([...cervejasConfraternizacao, cerveja]))
    toast.success('Produto adicionado com sucesso')

  }

  const delCervejaConfraternizacao = (cervejaId) => {
    const updatedList = cervejasConfraternizacao.filter(
      (cer) => cer.id !== cervejaId
    )
    setCervejasConfraternizacao(updatedList)
    localStorage.setItem('@evento: confraternizacao', JSON.stringify(updatedList))

  }

  return (
    <ConfraternizacaoContext.Provider
      value={{
        cervejasConfraternizacao,
        addCervejaConfraternizacao,
        delCervejaConfraternizacao,
      }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  )
}

export const useConfraternizacao = () => useContext(ConfraternizacaoContext)
