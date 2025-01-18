/* eslint-disable react/prop-types */
// style={{ width: "15rem" }}
import "./ListItem.css";
import Badge from "./Badge";
import Star from "./Star";
import listingData from "../../Data/listings.json";

function ListItem({ item, onDelete }) {
  const apartments = listingData.results;
  return (
    <div className="card m-2" style={{ width: "20rem" }}>
      <img
        className="card-img-top rounded mx-auto d-block m-2"
        src={item.picture_url}
        alt="Rental Property"
      />
      <div className="card-body">
        <h6 className="card-title">{item.name}</h6>
        <p className="card-subtitle mb-2 text-body-secondary fst-italic fw-medium">
          {item.property_type}
        </p>
        <p className="card-text">
          Hosted by {item.host_name} {item.host_identity_verified ? <Badge /> : ""}{" "}
          {item.host_is_superhost ? <Star /> : ""}
        </p>
        <p className="card-text">{item.neighbourhood}</p>
        <p className="card-text">
          <span className="h6">★</span> {item.review_scores_rating}
        </p>

        <p className="card-text">Price: {item.price} a night</p>
      </div>
      <button className="btn btn-primary m-4" onClick={onDelete}>Delete</button>
      <a href={item.listing_url} className="btn btn-primary m-4">
        Details
      </a>
    </div>
  );
}

export default ListItem;
