import Button from "./Button"
import TitipBarang from "./transaksi/TitipBarang"
import { Link } from 'react-router-dom'

const DashboardMenu = () => {
  return (
    <>
      <Link to='/titip'>
      <Button
        color='blue'
        text='Titip Barang'
        extraClass='btn-block'
      />
      </Link>
      <Button
        color='green'
        text='Ambil Barang'
        extraClass='btn-block'
      />
      <br />
      <Button
        color='orange'
        text='Master Barang'
        extraClass='btn-block'
      />
      <Button
        color='orange'
        text='Master Toko'
        extraClass='btn-block'
      />
      <Button
        color='orange'
        text='Master User'
        extraClass='btn-block'
      />
    </>
  )
}

export default DashboardMenu