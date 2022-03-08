import { useState } from "react"
import CariToko from "../toko/CariToko"
import ListTitipBarang from "./ListTitipBarang"

const TitipBarang = () => {
  const [listTitipBarang, setListTitipBarang] = useState([
    {
      "id": 1,
      "nama": "Permen Lollipop",
      "merk": "Sugus",
      "jumlah": 11
    },
    {
      "id": 2,
      "nama": "Wafer Coklat",
      "merk": "Kitkat",
      "jumlah": 12
    },
    {
      "id": 3,
      "nama": "Topi",
      "merk": "Adidas",
      "jumlah": 13
    },
    {
      "id": 4,
      "nama": "Permen Karet",
      "merk": "Sugus",
      "jumlah": 14
    },
    {
      "id": 5,
      "nama": "Pensil 2B",
      "merk": "Zebra",
      "jumlah": 15
    }
  ])

  // Delete Barang (Titip)
  const deleteTitipBarang = (id) => {
    // console.log('delete titip barang', id)
    setListTitipBarang(listTitipBarang.filter((itemTitipBarang) => itemTitipBarang.id != id))
  }
  
  return (
    <>
      <h3>Titip Barang</h3>
      <CariToko />
      <form className="add-form">
        <div className="form-control">
          <label>Nama Produk</label>
          <input 
            type="text" 
            placeholder="Nama Produk" 
          />
        </div>
        <div className="form-control">
          <label>Merk Produk</label>
          <input 
            type="text" 
            placeholder="Merk Produk" 
          />
        </div>
        <div className="form-control">
          <label>Jumlah</label>
          <input 
            type="numeric" 
            placeholder="Jumlah Produk" 
          />
        </div>

        <input 
          type="submit" 
          className="btn btn-block"
          value="Tambah"
        />
      </form>
      <br />
      {listTitipBarang.length > 0
        ? <ListTitipBarang listTitipBarang={listTitipBarang} onDelete={deleteTitipBarang} />
        : 'Daftar barang masih kosong'}
    </>
  )
}

export default TitipBarang