import axios from "axios"
import {useParams} from 'react-router'
import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const ProductDescription = () => {
    const {id} = useParams();
    const [theProduct, setProduct] = useState([]);

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(response =>{
            console.log(response.data.results)
            setProduct(response.data.results)
        })
        .catch(err => console.log("Error:", err))
    }, [id])

    return (
        <div>
            <h1>{theProduct.title} ${theProduct.price}</h1>
            <p>{theProduct.description}</p>
            <Link to={`/product/edit/${theProduct._id}`}>Update</Link>
            <Link to="/">Home</Link>
        </div>

)
}

export default ProductDescription

//need to useparams from products page pass id to this page