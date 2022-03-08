import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      {
        location.pathname === '/'
        && (
          <Button
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Tutup Form Produk' : 'Tampilkan Form Produk'} 
            extraClass={showAdd ? '' : 'btn-block'}
            onClick={onAdd}
          />
        )
      }
    </header>
  )
}

Header.defaultProps = {
  title: 'Sistem Distribusi',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header