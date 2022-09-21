import axios from "axios"
import {useParams} from 'react-router'
import React, { useEffect, useState } from "react"
import {useNavigate, Link} from 'react-router-dom'

const ProductEdit = () => {
    const {id} = useParams();
    // const [theProduct, setProduct] = useState([]);
    const [formInfo, setFormInfo] = useState({
        name: "",
        rating: "",
        img: ""
    })
    const Navigate = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response =>{
            console.log(response.data.results)
            setFormInfo(response.data.results)
            (response.data.results)
        })
        .catch(err => console.log("Error:", err))
    }, [])

    const onChangeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/update/${id}`, formInfo)
        .then(response => {
            console.log("edit put request:", response)
            Navigate("/")
        })
        .catch(err => console.log("Error updating Product", err))
    }

    const deleteProductFunc = (e, id) => {
        console.log("Deleting Product", id);
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
        .then((response)=>{
            console.log("delete was successful", response)
            Navigate("/")
        })
        .catch(err => console.log("Something went wrong deleteing", err))
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
                <label>Title:</label>
                <input type="text" name="title" value={formInfo.title} onChange={onChangeHandler}/>
                <label>Price:</label>
                <input type="number" name="price" value={formInfo.price} onChange={onChangeHandler}/>
                <label>Desciption:</label>
                <input type="text" name="description" value={formInfo.description} onChange={onChangeHandler}/>
                <button type="submit">Update</button>
            </form>
        <Link onClick={(e)=>{deleteProductFunc(e, formInfo._id)}}>delete</Link>
        <Link to="/">Cancel</Link>
    </div>
    // {`/api/product/delete/${theProduct._id}`}
  )
}

export default ProductEdit

//Make the call to the get request to see the product
//make a put request and navigate 
//make a delete method
//destroy request and navigate back to home