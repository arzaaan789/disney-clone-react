import React from "react";
import styled from "styled-components";

export default function Login(){
    return(
        <Container>
            <CTA>
                <Logo1 src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</Description>
                <Logo1 src="/images/cta-logo-two.png" />
            </CTA>

        </Container>
    )

}

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: top;
  
  &:before{
    background: url("/images/login-background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.75;
    bottom: 0;
    content: "";
    z-index:-1;

  }
`

const CTA = styled.div`
  max-width: 800px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top:250px;

  
`

const Logo1 = styled.img`

`

const SignUp = styled.a`
  width:100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  
  &:hover{
    background-color: #0483ee;
  }
`

const Description=styled.p`
    font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`