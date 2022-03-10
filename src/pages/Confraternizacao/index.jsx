import { useConfraternizacao } from '../../providers/confraternizacao'
import Card from '../../components/Card'
const Confraternizacao = () => {

    const { cervejasConfraternizacao} = useConfraternizacao()
    
  return (
    <>
        {cervejasConfraternizacao.map((product,index) => (
            <Card key={index} product={product} isProductCart />
        ))}
    </>
  )
}
export default Confraternizacao