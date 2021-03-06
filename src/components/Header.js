import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg"/>
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </a>

                <a>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </a>

                <a>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </a>

                <a>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </a>

                <a>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </a>

                <a>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </a>

            </NavMenu>

            <UserImg src="https://thumbs.dreamstime.com/z/wild-gray-tabby-cat-bright-orange-eyes-lies-outdoors-square-photo-instagram-format-194924047.jpg">

            </UserImg>

        </Nav>
    )
}

const Nav = styled.div`
    display: flex;

    align-items: center;
    padding: 0 36px;
    height: 70px;
    background-color: #090b13;
    overflow-x:hidden;
  
`

const Logo = styled.img`
    width: 80px;


  
`

const NavMenu = styled.div`
  margin-left: 25px;
    display: flex;
  flex: 1;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    
    img{
      height:20px;
      
    }
    
    span{
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      
      &:after{
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right:0;
        bottom:-6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
      }
      
    }
    
    &:hover{
      span:after{
        transform: scaleX(1);
        opacity: 1;
      }
    }
    
  }

`

const UserImg = styled.img`
  width: 48px;
    height: 48px;
    border-radius: 50%;
  cursor: pointer;
`