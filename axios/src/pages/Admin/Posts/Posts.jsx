import React, { useEffect, useState } from 'react'
import Header from '../../../layout/Admin/Header/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./Posts.scss"
import { toast, Toaster } from 'react-hot-toast'
const Posts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => {
            setLoading(false)
            setProducts(res.data)
        })
    }, [products])
    return (
        <React.Fragment>
            <Header />
            <Link to="/admin/products/add">Add Product</Link>
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity Per Unit</th>
                        <th scope="col">Detail</th>
                        <th scope='col'>Update</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        loading ? <div className='spinner'>
                            <div class="spinner-border text-dark" role="status">
                            </div>
                        </div> : products.map((product, index) => {
                            return (<tr key={index}>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.quantityPerUnit}</td>
                                <td><Link className='btn btn-primary' to={`/admin/products/${product.id}`}>Detail</Link></td>
                                <td><button className='btn btn-warning' onClick={() => {
                                    const name = prompt("name")
                                    const quantityPerUnit = prompt("quanity per unit")
                                    axios.put(`https://northwind.vercel.app/api/products/${product.id}`, { ...product, name, quantityPerUnit }).then(res => {
                                        console.log(res)
                                    })
                                }}>Edit</button></td>
                                <td><button className='btn btn-danger' onClick={() => {
                                    axios.delete(`https://northwind.vercel.app/api/products/${product.id}`).then(res => {
                                        toast.success("item deleted")
                                    })
                                }}>Delete</button></td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <Toaster />
        </React.Fragment>
    )
}

export default Posts