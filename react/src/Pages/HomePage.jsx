/* eslint-disable react/prop-types */
import List from "../components/List/List";
import Form from '../components/Form/Form'

function Homepage({ itemList }) {
  return (
    <div>
      Homepage
      <Form />
      <List itemList={itemList} />
    </div>
  );
}

export default Homepage;
