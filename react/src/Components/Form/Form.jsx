/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({ addListItem }) {
  const [apartment, setApartment] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const input = type === "checkbox" ? checked : value;
    setApartment({ ...apartment, [name]: input });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    addListItem(apartment);

    setApartment({
      id: "",
      picture_url: "",
      name: "",
      property_type: "",
      host_name: "",
      host_identity_verified: false,
      host_is_superhost: false,
      neighbourhood: "",
      review_scores_rating: 0,
      price: 0,
    });
  };

  return (
    <div className="mt-5">
      <h5 className="ms-3">Adding new listing</h5>

      <form className="mt-3" onSubmit={handleFormSubmit}>
        <label className="form-label fw-semibold">
          Picture URL:
          <input
            className="form-control"
            type="url"
            name="picture_url"
            value={apartment.picture_url}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label className="form-label fw-semibold">
          Name:
          <input
            className="form-control"
            type="text"
            name="name"
            value={apartment.name}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label className="form-label fw-semibold">
          Property type:
          <input
            className="form-control"
            type="text"
            name="property_type"
            value={apartment.property_type}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label className="form-label fw-semibold">
          Host Name:
          <input
            className="form-control"
            type="text"
            name="host_name"
            value={apartment.host_name}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label className="form-label fw-semibold">
          Identity verified:
          <input
            className="form-check-input"
            type="checkbox"
            name="host_identity_verified"
            value={apartment.host_identity_verified}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label className="form-label fw-semibold">
          Superhost:
          <input
            className="form-check-input"
            type="checkbox"
            name="host_is_superhost"
            checked={apartment.host_is_superhost}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label className="form-label fw-semibold">
          Location:
          <input
            className="form-control"
            type="text"
            name="neighbourhood"
            value={apartment.neighbourhood}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label className="form-label fw-semibold">
          Rating:
          <input
            className="form-control"
            type="number"
            name="review_scores_rating"
            value={apartment.review_scores_rating}
            onChange={handleChange}
          />
        </label>
        <br></br>

        <label className="form-label fw-semibold">
          Price:
          <input
            className="form-control"
            type="text"
            name="price"
            value={apartment.price}
            onChange={handleChange}
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
