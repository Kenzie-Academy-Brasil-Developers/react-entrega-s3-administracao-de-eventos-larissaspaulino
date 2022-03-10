import { Container } from './styles'
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, IconButton, MenuItem } from '@mui/material'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory()
    
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (evento) => {
    setAnchorEl(null)
    history.push(`/${evento}`)
  }

  return (
    <Container>
      <h1 onClick={() => history.push('/')}>Be PUNK</h1>
      <IconButton id='basic-button' onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose('casamento')}>Casamento</MenuItem>
        <MenuItem onClick={() => handleClose('formatura')}>Formatura</MenuItem>
        <MenuItem onClick={() => handleClose('confraternizacao')}>Confraternização</MenuItem>
      </Menu>
    </Container>
  )
}
export default Header
