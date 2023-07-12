import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../layout/Site/Header/Header'

const PostDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res => setProduct(res.data))
    }, [product])
    return (
        <div className='container'>
            <Header />
            <div>{product.name} {product.id}</div>
        </div>
    )
}

export default PostDetail