import React from 'react'
import { Link} from 'react-router-dom'


export default function Navbar() {
    return <>
        <nav className='navbar navbar-expand-lg bg-body-tertiary fixed-top '>
            <div className="container-fluid mx-3 ">
                <Link className="navbar-brand  fw-bolder" to="products">Products</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    </>
}
