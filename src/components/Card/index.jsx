import { useLocation } from 'react-router-dom'
import {
  Select,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material'
import { useState } from 'react'

import { useCasamento } from '../../providers/casamento'
import { useConfraternizacao } from '../../providers/confraternizacao'
import { useFormatura } from '../../providers/formatura'

import { Container } from './styles'

const Card = ({ isProductCart = false, product }) => {
  const [evento, setEvento] = useState('')
  const location = useLocation()

  const { delCervejaCasamento, addCervejaCasamento } = useCasamento()
  const { delCervejaConfraternizacao, addCervejaConfraternizacao } =
    useConfraternizacao()
  const { delCervejaFormatura, addCervejaFormatura } = useFormatura()

  const handleChange = (e) => {
    setEvento(e.target.value)
  }

  const handleAdd = () => {
    console.log(evento)
    switch (evento) {
      case 'casamento':
        return addCervejaCasamento(product)

      case 'confraternizacao':
        return addCervejaConfraternizacao(product)

      case 'formatura':
        return addCervejaFormatura(product)

      default:
        return ''
    }
  }

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
      <img src={product.image_url} alt='rotulo' />
      <div className='content'>
        <h2>{product.name}</h2>
        <h3>
          <span>{product.tagline}</span>
        </h3>
        <p>Início de fabricação: {product.first_brewed}</p>
        <p className='description'> {product.description}</p>
        <p>
          {product.value}
          {product.unit}
        </p>
      </div>

      {isProductCart ? (
        <Button
          fullWidth
          color='success'
          variant='contained'
          onClick={handleDelete}
        >
          Deletar produto
        </Button>
      ) : (
        <FormControl fullWidth>
          <InputLabel id='evento'>Evento</InputLabel>
          <Select
            label='Evento'
            onChange={handleChange}
            value={evento}
            labelId='evento'
            id='e'
            fullWidth
            sx={{ marginBottom: 3 }}
          >
            <MenuItem value='casamento'>Casamento</MenuItem>
            <MenuItem value='formatura'>Formatura</MenuItem>
            <MenuItem value='confraternizacao'>Confraternização</MenuItem>
          </Select>
          <Button color='success' variant='contained' onClick={handleAdd}>
            Adicionar
          </Button>
        </FormControl>
      )}
    </Container>
  )
}
export default Card
