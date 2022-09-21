import axios from "axios";
import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        description:""
    });
    const [refreshToggle, setRefreshToggle] = useState(false);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products")
        .then(response =>{
            console.log(response.data.results)
            setAllProducts(response.data.results)
        })
        .catch(err => console.log("Error:", err))
    }, [refreshToggle])

    const onChangeHandler = (e) =>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/product/new", formInfo)
        .then(response => {
            console.log(response);
            setRefreshToggle(!refreshToggle);
        })
        .catch(err=>console.log("Error creating new Hero", err));
    }

    return (
        <div>
            <h1>Product Manager</h1>

            <form onSubmit={submitHandler}>
                <label>Title:</label>
                <input type="text" name="title" onChange={onChangeHandler}/>
                <label>Price:</label>
                <input type="number" name="price" onChange={onChangeHandler}/>
                <label>Desciption:</label>
                <input type="text" name="description" onChange={onChangeHandler}/>
                <button>Create</button>
            </form>

            <div>
                <h1>All Products</h1>
                {
                    allProducts.map((p, i)=>{
                        return(
                            <div key={i}>
                            <Link to = {`/product/${p._id}`}>{p.title}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductPage