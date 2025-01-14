/* eslint-disable react/prop-types */
import List from "../components/List/List";

function Homepage({ itemList }) {
  return (
    <div>
      Homepage
      <List itemList={itemList} />
    </div>
  );
}

export default Homepage;
