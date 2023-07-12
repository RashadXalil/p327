import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const inputRef = useRef()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res => {
            setData(res.data)
            setLoading(false)
        })
    }, [])
    return (

        <table className="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">Symbol</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope='col'>Detail</th>
                </tr>
            </thead>
            <tbody>
                {
                    loading ? <div class="spinner-border text-primary" role="status">
                    </div>
                        : data.map((coin, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{coin.symbol}</th>
                                    <td><img style={{ width: "50px" }} src={coin.image} alt="" /></td>
                                    <td>{coin.name}</td>
                                    <td>{coin.current_price}</td>
                                    <td><Link to={`/products/${coin.id}`}>Go detail</Link></td>
                                </tr>
                            )
                        })
                }

            </tbody>
        </table>
    )
}

export default Products