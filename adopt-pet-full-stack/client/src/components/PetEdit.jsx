import axios from "axios"
import {useParams} from 'react-router'
import React, { useEffect, useState } from "react"
import {useNavigate, Link} from 'react-router-dom'

const PetEdit = () => {
    const {id} = useParams();
    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        description: "",
        skills1:"",
        skills2:"",
        skills3:""
    })
    const [errors, setErrors] = useState([]); 

    const Navigate = useNavigate();
    
    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pet/${id}`)
        .then(response =>{
            console.log(response.data.results)
            setFormInfo(response.data.results)
            (response.data.results)
        })
        .catch(err => console.log("Error:", err))
    }, [])

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pet/update/${id}`, formInfo)
        .then(response => {
            console.log("edit put request:", response)
            Navigate("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.err.errors;
            console.log("this is the erre: ", err.response.data.err.errors)
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        });
    }

    const onChangeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>
            <h1>PetShelter</h1>
            <h3>Edit {formInfo.name} information</h3>
            {
                errors.map((err, i)=> <p key={i}>{err}</p>)
            }
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" name="name" value={formInfo.name} onChange={onChangeHandler}/>
                <label>Type:</label>
                <input type="text" name="type" value={formInfo.type} onChange={onChangeHandler}/>
                <label>Desciption:</label>
                <input type="text" name="description" value={formInfo.description} onChange={onChangeHandler}/>
                <label>Skills:</label>
                <input type="text" name="skills1" value={formInfo.skills1} onChange={onChangeHandler}/>
                <label>Skills:</label>
                <input type="text" name="skills2" value={formInfo.skills2} onChange={onChangeHandler}/>
                <label>Skills:</label>
                <input type="text" name="skills3" value={formInfo.skills3} onChange={onChangeHandler}/>
                <button type="submit">Update</button>
            </form>
        <div>
        
        </div>
        <Link to="/">back to all pets</Link>

        </div>
  )
}

export default PetEdit