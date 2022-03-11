import { useConfraternizacao } from '../../providers/confraternizacao'
import Card from '../../components/Card'
import Display from '../../components/Display'


const Confraternizacao = () => {

    const { cervejasConfraternizacao} = useConfraternizacao()
    
  return (
    <Display>
        {cervejasConfraternizacao.map((product,index) => (
            <Card key={index} product={product} isProductCart />
        ))}
    </Display>
  )
}
export default Confraternizacao