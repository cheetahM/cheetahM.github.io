import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <h1 className="main-text">Learn... Think... Code.... Create...</h1>
                </div>
            </div>
        </div>
    )
};

export default Banner;