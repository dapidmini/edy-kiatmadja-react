import { useState } from "react"
import { FaSearch } from 'react-icons/fa'
import DisplayListToko from "./DisplayListToko";

const CariToko = () => {
  const [listToko, setListToko] = useState([
    {
      "id": 1,
      "nama": "toko Jaya",
      "alamat": "jalan wonorejo permai tengah no.1",
      "kecamatan": "rungkut",
      "kota": "surabaya",
      "telepon": "9158587016"
    }, {
      "id": 2,
      "nama": "Toko Buku Murah Online",
      "alamat": "jalan ir.dr.soekarno no.100",
      "kecamatan": "rungkut",
      "kota": "surabaya",
      "telepon": "8043402883"
    }, {
      "id": 3,
      "nama": "toko Rejeki",
      "alamat": "jalan wonorejo permai tengah no.2",
      "kecamatan": "rungkut",
      "kota": "surabaya",
      "telepon": "1758232069"
    }, {
      "id": 4,
      "nama": "toko buku Pintar",
      "alamat": "jalan sudirman no.123",
      "kecamatan": "buduran",
      "kota": "sidoarjo",
      "telepon": "1162036335"
    }, {
      "id": 5,
      "nama": "toko mainan Rejeki",
      "alamat": "jalan satu dua tiga no.100",
      "kecamatan": "buduran",
      "kota": "sidoarjo",
      "telepon": "9696643941"
    }
  ]);

  const fnCariToko = (keyword) => {
    console.log('cari toko', keyword);
  }

  return (
    <div>
      <div className="form-control">
        <h3 className="subheader">Cari Toko</h3>
        <div className="search-wrapper">
          <input 
            className="search-term"
            placeholder="Cari keyword nama toko" 
          />
          <button 
            type="button"
            className="search-btn"
            onClick={() => fnCariToko(document.querySelector('.search-term').value)}
          >
            <FaSearch />
          </button>
        </div>
      </div>
      <DisplayListToko listToko={listToko} />
    </div>
  )
}

export default CariToko