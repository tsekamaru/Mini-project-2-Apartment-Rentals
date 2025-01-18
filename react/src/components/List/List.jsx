/* eslint-disable react/prop-types */
import ListItem from "../ListItem/ListItem";

function List({ itemList }) {
  return (
    <div className="row row-cols-auto">
      {itemList.map((element) => (
        <ListItem key={element.id} item={element} />
      ))}
    </div>
  );
}

export default List;
