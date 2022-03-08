import React from 'react'
import ElemToko from './ElemToko'

const DisplayListToko = ({ listToko }) => {
  return (
    <>
      {listToko.map((toko) => (
        <ElemToko key={toko.id} toko={toko} />
      ))}
    </>
  )
}

export default DisplayListToko