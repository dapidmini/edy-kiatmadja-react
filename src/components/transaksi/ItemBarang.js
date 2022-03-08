import { FaTimes } from 'react-icons/fa'

const ItemBarang = ({ props, onDelete }) => {

  return (
    <div className="item">
      <h4 className="item-title">
        {props.nama} x{props.jumlah}
        <FaTimes 
          style={{ color: 'red', cursor: 'pointer' }} 
          onClick={() => onDelete(props.id)}
        />
      </h4>
      <p className='item-text'>{props.merk}</p>
    </div>
  )
}

export default ItemBarang