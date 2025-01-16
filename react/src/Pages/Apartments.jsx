import listingData from '../Data/listings.json'
import './Apartment.css'
const ApartmentPage = () => {
    const apartments = listingData.results;
  
    return (
      <div className="apartment-container">
        <h1 className='apartment'>Available Apartments</h1>
        <div className="apartment-grid">
          {apartments.map(apartment => (
            <div key={apartment.id} className="apartment-card">
              <img src={apartment.picture_url} alt={apartment.name} />
              <h2>{apartment.name}</h2>
              <p>{apartment.host_name}</p>
              <p>{apartment.host_location}</p>
              <p className="price">Price: {apartment.price}</p>
              <a 
                href={apartment.listing_url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Listing
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ApartmentPage;