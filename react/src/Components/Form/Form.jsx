import { useState } from "react";
import listingData from '../../Data/listings.json'
import './Form.css'


function Form(){
const [apartment, setApartment] = useState(listingData);

const [itemName, setItemName] = useState("");
const [hostName, setHostName] = useState("");
const [description, setDescription] = useState ("");
const [location, setLocation] = useState("");
const [price, setPrice] = useState("");

const handleFormSubmit = (e) => {
    e.preventDefault(); 
const newApartment ={
itemName,
hostName,
description,
location,
price,
}
setApartment((prevApartment)=> [...prevApartment, newApartment]);

setItemName("");
setHostName("");
setDescription("");
setLocation("");
setPrice("");
}


    return (
<div className="form">

    <form>
        <label>
        Name:
        <input 
        type="text"
        name="itemName"
        value={itemName}
        onChange={(e)=> setItemName(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Host Name:
        <input 
        type="text"
        name="hostName"
        value={hostName}
        onChange={(e)=> setHostName(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Description:
        <input 
        type="text"
        name="description"
        value={description}
        onChange={(e)=> setDescription(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Location:
        <input 
        type="text"
        name="location"
        value={location}
        onChange={(e)=> setLocation(e.target.value)}
        />
        </label>
        <br></br>
        <label>
        Price:
        <input 
        type="text"
        name="price"
        value={price}
        onChange={(e)=> setPrice(e.target.value)}
        />
        </label>
        <br></br>
        <button type="submit">Add New Apartment</button>
       
    </form>
    
</div>
    )
}
export default Form;