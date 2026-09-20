'use client';
import styled from "styled-components";
import Hero from "../../pages/Hero";
import Team from "../../pages/Team";
import RootLayout from "./layout";
import Footer from "../../pages/Footer";


export default function Home() {
  return (
    <RootLayout>   
        <Container>
          <Hero/>
          <Team/>
        </Container> 
         <Footer/>
    </RootLayout>
  )
}

const Container = styled.div`
width:100%; 
height:auto;
@media(max-width:768px){
height:auto;
}
`;

