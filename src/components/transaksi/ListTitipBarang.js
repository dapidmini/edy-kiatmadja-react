import ItemBarang from "./ItemBarang"

const ListTitipBarang = ({ listTitipBarang, onDelete }) => {
  return (
    <>
      {listTitipBarang.map((itemTitipBarang) => (
        <ItemBarang 
          key={itemTitipBarang.id} 
          props={itemTitipBarang} 
          onDelete={onDelete}
        />
      ))}
    </>
  )
}

export default ListTitipBarang