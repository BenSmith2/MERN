import axios from "axios";
import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const PetShelter = () => {
    const [allPets, setAllPets] = useState([]);
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/pets")
        .then(response =>{
            console.log(response.data.results)
            setAllPets(response.data.results)
        })
        .catch(err => console.log("Error:", err))
    },[])

  return (
    <div>

        <h1>PetShelter</h1>
        <Link to = {`/pet/new`}>add a pet</Link>

        <h3>These pets are looking for a good home</h3>
        <table>
            <tr>
                <th>
                    <span>Name</span>
                </th>
                <th>
                    <span>Type</span>
                </th>
                <th>
                    <span>Actions</span>
                </th>
            </tr>
            {
                allPets.map((p, i)=>{
                    return(
                        <tr key={i}>
                            <td>
                                {p.name}
                            </td>
                            <td>
                                {p.type}
                            </td>
                            <td>
                                <Link to = {`/pet/${p._id}`}>details</Link> | <Link to = {`/pet/edit/${p._id}`}>edit</Link>
                            </td>
                        </tr>
                    )
                })
            }

        </table>
        
    </div>
  )
}

export default PetShelter