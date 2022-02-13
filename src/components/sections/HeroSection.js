import React from "react"
import { Link } from "gatsby"

function HeroSection() {
    return (
        <div>
            <img src="/images/logos/logo.svg" alt="logo" />
            <h1>Learn and code cyber-security tools</h1>
            <p>Don't be caught off guard. Learn how to architect
                applications to boost your security online.
            </p>
            <Link to="/page-2/">Go to page 2</Link> <br />
        </div>
    )
}

export default HeroSection