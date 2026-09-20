'use client';
import Link from "next/link";
import styled from "styled-components";


export default function Header() {
  return (
      <Container>
          <a  href={"/"} style={{textDecoration:"none",color:"#ebc334"}}>
             <h2>Otecscripting</h2>
          </a>
          <Navs>
                <a  href={"https://otecscript.web.app/about"} style={{textDecoration:"none"}}>
                  <Tabs>About us </Tabs>
                </a>
            
                <a href={"https://otecscript.web.app/about"} style={{textDecoration:"none"}}>
                  <Tabs>Projects</Tabs>
                </a>
          </Navs>
      </Container>
  )
}

const Container = styled.div`
background:#000;
color:#ebc334;
display:flex;
flex-flow:row;
flex-direction:space-between;
z-index:99999999999999;
h2{
padding:15px;
font-size:25px;
}
`;


const Navs = styled.div`
margin-left:auto;
display:flex;
flex-flow:row;
flex-direction:space-evenly;
padding-top:10px;
padding-right:20px;
@media(max-width:768px){
display:none;
padding-right:0px;
}

`;


const Tabs = styled.div`
height:20px;
padding:10px;
color:#ebc334;
:hover {
border:1px solid #f5f5f5;
background:#ebc334;
color:#000;
padding:5px;
border-radius:5px;
transform: scale(1.05);
transition: transform 500ms;
z-index: 1;
}
`;