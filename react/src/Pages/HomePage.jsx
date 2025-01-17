/* eslint-disable react/prop-types */
import List from "../components/List/List";
import Form from "../components/Form/Form";

function Homepage({ itemList }) {
  return (
    <div>
      <h1 className="ms-5">Homepage</h1>
      <List itemList={itemList} />
    </div>
  );
}

export default Homepage;
