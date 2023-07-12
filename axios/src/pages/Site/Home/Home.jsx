import React, { useEffect, useState } from 'react'
import Header from '../../../layout/Site/Header/Header'
import Footer from '../../../layout/Site/Footer/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products").then(res => setProducts(res.data))
    }, [])
    return (
        <React.Fragment>
            <Header />
            <div className="container">
                <div className="row" style={{ justifyContent: "space-between" }}>
                    {
                        products.map((post, index) => {
                            return (
                                <div key={index} class="card mb-5" style={{ width: "18rem" }}>
                                    <img class="card-img-top" src="https://i0.wp.com/theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png?fit=1200%2C800&ssl=1" alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{post.name}</h5>
                                        <p class="card-text">{post.quantityPerUnit}</p>
                                        <Link className='btn btn-primary' to={`/posts/${post.id}`}>Go detail</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home