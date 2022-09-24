import axios from "axios";
import React, { useEffect, useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'

const PetNew = () => {
    const [formInfo, setFormInfo] = useState({
        name:"",
        type:"",
        description:"",
        skills1:"",
        skills2:"",
        skills3:""
    });
    const [errors, setErrors] = useState([]); 
    const Navigate = useNavigate();

    const onChangeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/pet/new", formInfo)
        .then(response => {
            console.log(response);
            Navigate("/");
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

    return (
        <div>
            <h1>PetShelter</h1>
            <Link to = {`/`}>back to home</Link>
            {
                errors.map((err, i)=> <p key={i}>{err}</p>)
            }
            <form onSubmit={submitHandler}>
                <label>Name:</label>
                <input type="text" name="name" onChange={onChangeHandler}/>
                <label>Type:</label>
                <input type="text" name="type" onChange={onChangeHandler}/>
                <label>Desciption:</label>
                <input type="text" name="description" onChange={onChangeHandler}/>
                <label>skills:</label>
                <input type="text" name="skills1" onChange={onChangeHandler}/>
                <input type="text" name="skills2" onChange={onChangeHandler}/>
                <input type="text" name="skills3" onChange={onChangeHandler}/>
                <button>Create</button>
            </form>

        </div>
    )
}

export default PetNew