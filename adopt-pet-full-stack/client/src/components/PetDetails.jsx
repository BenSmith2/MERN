import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams} from 'react-router'
import {useNavigate, Link} from 'react-router-dom'

const PetDetails = () => {
    const {id} = useParams();
    const [showPet, setPet] = useState([]);

    const Navigate = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(response =>{
            console.log(response.data.results)
            setPet(response.data.results)
        })
        .catch(err => console.log("Error:", err))
    }, [])

    const adoptPetFunc = (e, id) => {
        console.log("Adopting Pet", id);
        axios.delete(`http://localhost:8000/api/pet/adopt/${id}`)
        .then((response)=>{
            console.log("Adoption was successful", response)
            Navigate("/")
        })
        .catch(err => console.log("Something went wrong deleting", err))
    }

  return (
    <div>
        <h1>PetShelter</h1>
        <h3>Details about: {showPet.name}</h3>
        <ul>
            <li>Pet Type: {showPet.type}</li>
            <li>Description: {showPet.description}</li>
            <li>Skills: 
                <ul>
                    <li>{showPet.skills1}</li> 
                    <li>{showPet.skills2} </li>
                    <li>{showPet.skills3}</li>
                </ul>
            </li>
        </ul>
        <Link onClick={(e)=>{adoptPetFunc(e, showPet._id)}}>Adopt Pet</Link>
        <span> | </span>
        <Link to="/">back to all pets</Link>
    </div>
  )
}

export default PetDetails