import React from 'react'
import image from './error-page.jpg'
// import { Helmet } from 'react-helmet'

export default function NotFound() {
    return <>
        {/* <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title> not found</title>
            </Helmet>
        </div> */}
        <div className='w-75 mx-auto'>
            <img src={image} className='w-100 ' alt="" />
        </div>
    </>
}
