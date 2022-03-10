import { FormaturaProvider } from './formatura'
import { CasamentoProvider } from './casamento'
import { ConfraternizacaoProvider } from './confraternizacao'

const Providers = ({ children }) => {
  return (
    <ConfraternizacaoProvider>
      <CasamentoProvider>
        <FormaturaProvider>{children}</FormaturaProvider>
      </CasamentoProvider>
    </ConfraternizacaoProvider>
  )
}

export default Providers
