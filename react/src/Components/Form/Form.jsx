import { useState } from "react";
import listingData from "../../Data/listings.json";

function Form() {
  const [apartment, setApartment] = useState(listingData.results);

  const [itemName, setItemName] = useState("");
  const [hostName, setHostName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newApartment = {
      itemName,
      hostName,
      description,
      location,
      price,
    };
    setApartment((prevApartment) => [...prevApartment, newApartment]);

    setItemName("");
    setHostName("");
    setDescription("");
    setLocation("");
    setPrice("");
  };

  return (
    <div className="mt-5">
      <h5 className="ms-3">Adding new listing</h5>
      <form className="mt-3" onSubmit={handleFormSubmit}>
        <label className="form-label fw-semibold">
          Name:
          <input
            className="form-control"
            type="text"
            name="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form-label fw-semibold">
          Host Name:
          <input
            className="form-control"
            type="text"
            name="hostName"
            value={hostName}
            onChange={(e) => setHostName(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form-label fw-semibold">
          Description:
          <input
            className="form-control"
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form-label fw-semibold">
          Location:
          <input
            className="form-control"
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <br></br>
        <label className="form-label fw-semibold">
          Price:
          <input
            className="form-control"
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <br></br>
        <button className="btn btn-primary" type="submit">
          Add New Apartment
        </button>
      </form>
    </div>
  );
}
export default Form;
