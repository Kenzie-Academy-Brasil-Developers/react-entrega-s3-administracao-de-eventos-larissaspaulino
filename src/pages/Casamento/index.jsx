import { useCasamento } from '../../providers/casamento'
import Card from '../../components/Card'
import Display from '../../components/Display'

const Casamento = () => {
  const { cervejasCasamento } = useCasamento()

  return (
    <Display>
      {cervejasCasamento.map((product, index) => (
        <Card key={index} product={product} isProductCart />
      ))}
    </Display>
  )
}
export default Casamento
