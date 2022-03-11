import { useFormatura } from '../../providers/formatura'
import Card from '../../components/Card'
import Display from '../../components/Display'

const Formatura = () => {
  const { cervejasFormatura } = useFormatura()

  return (
    <Display>
      {cervejasFormatura.map((product, index) => (
        <Card key={index} product={product} isProductCart />
      ))}
    </Display>
  )
}
export default Formatura
