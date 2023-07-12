import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to='/' className='nav-link'> Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className='nav-link' to='/shop'>Shop</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div></div>
    )
}

export default Header