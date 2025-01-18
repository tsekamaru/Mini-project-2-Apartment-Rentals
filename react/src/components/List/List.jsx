/* eslint-disable react/prop-types */
import ListItem from "../ListItem/ListItem";
import { useState } from "react";

function List({ itemList}) {
const [item, setItem] = useState(itemList);

const handleDelete = (id) => {
  setItem((prevItems) => prevItems.filter((item) => item.id !== id));
}
  return (
    // <div className="row row-cols-2 row-cols-md-3 g-0">
    <div className="row row-cols-auto">
      {item.map((element) => (
        <ListItem key={element.id} item={element}  onDelete={() => handleDelete(element.id)} />
      ))}
    </div>
  );
}

export default List;
