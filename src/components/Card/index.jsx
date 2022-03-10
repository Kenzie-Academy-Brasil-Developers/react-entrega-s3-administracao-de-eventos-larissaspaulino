import { useLocation } from 'react-router-dom'

import { useCasamento } from '../../providers/casamento'
import { useConfraternizacao } from '../../providers/confraternizacao'
import { useFormatura } from '../../providers/formatura'

import { Container } from "./styles"

const Card = ({ isProductCart = false, product }) => {

  const location = useLocation()

  const {delCervejaCasamento, addCervejaCasamento} = useCasamento()
  const {delCervejaConfraternizacao, addCervejaConfraternizacao} = useConfraternizacao()
  const {delCervejaFormatura, addCervejaFormatura} = useFormatura()

  const handleDelete = () => {

    switch (location.pathname) {

      case '/casamento':
        return delCervejaCasamento(product.id)

      case '/confraternizacao': 
      return delCervejaConfraternizacao(product.id)

      case '/formatura':
        return delCervejaFormatura(product.id)

        default:
          return ''
    }
  }
  
  return (
    <Container>
      <img src={product.image_url} alt='rotulo'/>
      <h2>{product.name} <span>{product.tagline}</span> </h2>
      <p>Início de fabricação: {product.first_brewed}</p>
      <p> {product.description}</p>
      <p>{product.value}{product.unit}</p>
      <button onClick={() => addCervejaCasamento(product)}>Casamento</button>
      <button onClick={() => addCervejaConfraternizacao(product)}>Formatura</button>
      <button onClick={() => addCervejaFormatura(product)}>Confraternização</button>
      {isProductCart && 
        <button onClick={handleDelete}>Deletar produto</button>
      }
    </Container>
  )
}
export default Card
