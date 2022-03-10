import { useCasamento } from '../../providers/casamento'
import Card from '../../components/Card'
const Casamento = () => {

    const { cervejasCasamento } = useCasamento()
    console.log(cervejasCasamento)
    
  return (
    <>
        {cervejasCasamento.map((product,index) => (
            <Card key={index} product={product} isProductCart />
        ))}
    </>
  )
}
export default Casamento