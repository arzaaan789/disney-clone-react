import React from "react";
import styled from "styled-components";

export default function Detail(){
    return(
        <Container>
            <Background>
                <img src="https://thumbs.dreamstime.com/z/wild-gray-tabby-cat-bright-orange-eyes-lies-outdoors-square-photo-instagram-format-194924047.jpg"/>
            </Background>
            <ImageTitle>
                <img src="https://thumbs.dreamstime.com/z/wild-gray-tabby-cat-bright-orange-eyes-lies-outdoors-square-photo-instagram-format-194924047.jpg"/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png"/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png"/>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
            </Controls>

            <Subtitle>
                2018 * 7m * Family, Fantasy, Kids, Animation
            </Subtitle>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>


        </Container>
    )

}

const Container = styled.div`

  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  
  position:relative;
    
`

const Background = styled.div`
    z-index:-1;
  opacity:0.5;
    position: fixed;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  
  img{
    width:100%;
    height:100%;
    object-fit: cover;
  }
    
`

const ImageTitle = styled.div`
   
  height:30vh;
width:35vw;
  min-height: 170px;
  min-width: 200px;
  
  
  img{

    width:100%;
    height:100%;
    object-fit: cover;
    
  }
    
`
const Controls = styled.div`
    display: flex;
  align-items: center;
  
`

const PlayButton = styled.button`
   border-radius: 4px;
  font-size:15px;
  padding: 0 24px;
  margin-right: 22px;
  display:flex;
  align-items: center;
  height: 56px;
  background: rgb(249,249,249);
  border:none;
  letter-spacing: 1.8px;
  cursor:pointer;
  
  &:hover{
    background: rgb(198,198,198);
  }
  
    
`

const TrailerButton = styled(PlayButton)`
   background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249,249);
  color: rgb(249,249,249);
  
    
`

const AddButton = styled.button`
   margin-right: 16px;
  width:44px;
  height:44px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgb(249,249,249);
  background: rgba(0,0,0,0.6);
  cursor:pointer;
  
  
  span{
    font-size:30px;
    color:white;
  }
    
`

const GroupWatchButton = styled(AddButton)`

  background: rgb(0,0,0);
  
    
`

const Subtitle = styled.div`
  color: rgb(249,249,249);
  font-size:15px;
  min-height: 20px;
  margin-top: 26px;
  
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249,249,249);
  
`