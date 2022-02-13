import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <img src="/images/logos/logo.svg" alt="logo" />
        <h1>Learn and code cyber-security tools</h1>
        <p>
          Don't be caught off guard. Learn how to architect applications to
          boost your security online.
        </p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div``
