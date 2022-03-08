const ElemToko = ({ toko }) => {
  return (
    <div className="item">
      <h4 className="item-title">{toko.nama}</h4>
      <em className="item-text">{toko.alamat}, {toko.kecamatan}, {toko.kota}</em>
      <p className="item-text">{toko.telepon}</p>
    </div>
  )
}

export default ElemToko