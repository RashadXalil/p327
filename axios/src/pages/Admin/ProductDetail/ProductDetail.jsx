import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../../layout/Admin/Header/Header'
import { toast } from 'react-hot-toast'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res => {
            console.log(res)

        }).catch(err => {
            if (err) {
                navigate("/admin")
            }
        })
    }, [])
    return (
        <>
            <Header />
            <div>ProductDetail {product.name} {product.id}</div>
        </>
    )
}

export default ProductDetail