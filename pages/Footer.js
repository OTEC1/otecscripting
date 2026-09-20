'use client';
import { RiAppsFill, RiContactsFill, RiFacebookFill, RiInstagramFill, RiMailFill, RiPhoneFill, RiUserLocationLine, RiWhatsappFill } from 'react-icons/ri';
import styled from 'styled-components'



const Footer = () => {
  return (
    <Container>     
        <Div>
            <div id='th'> <RiUserLocationLine/> &nbsp; Office address Lagos</div>   
            <br/>
            <div id='tr'>
               Lagos
            </div>
            <div id='tr'>
              Nigeria
            </div>
        </Div>

        <Div/>

        <Div>
          <div id='th'><RiPhoneFill/> &nbsp; Contact</div>      
            <br/>
              <div id='tr'><RiMailFill/>otecscripting@gmail.com</div> 
        </Div>
        <Line/>
        <Last><br/>  &copy; Otecdealings  All Rights Reserved</Last>
    </Container>
  )
}




const Container = styled.div`
width:100%;
height:auto;
padding-top:100px;
display:flex;
position:relative;
background-color: #000;
font-family: "Poppins", sans-serif;
clip-path: ellipse(138% 100% at 7.76% 100%);
@media(max-width:768px){
flex-wrap:wrap;
height:auto;
clip-path: ellipse(267% 100% at -36.8% 100%);
padding-bottom:100px;
}

`;



const Div = styled.div`
width:35%;
#th{
color:#ebc334;
padding-top:100px;
padding-left:50px;
font-weight:850;
font-size:20pt;
display:flex;
align-items:center;
}

#tr{
color:#fff;
padding-top:0px;
padding-left:50px;
padding-right:50px;
display:flex;
align-items:center;
}


@media(max-width:768px){
width:100%;
#th{
padding-left:20px;
}

#tr{
padding-left:20px;
padding-right:0px;
}
}
`;


const Line = styled.div`
position:absolute;
width:80%;
height:2px;
background:#f5f5f5;
bottom:0;
margin-bottom:70px;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto;
`;

const Last = styled(Line)`
color:#f5f5f5;
width:400px;
@media(max-width:768px){
width:80%;
text-align:center;
}
`;

export default Footer