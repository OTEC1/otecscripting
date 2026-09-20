import styled from "styled-components";


const Hero = () => {
    return ( 
        <Container>

          <div id="left" style={{width:"100%"}}>
               <h2>Let bring your ideas to live</h2>
               <h3>Be it web, mobile, desktop projects</h3>
               <Btn>
                    <a href={"https://otecscript.web.app/about"} style={{textDecoration:"none"}}>
                      Projects  
                    </a>
                </Btn>
           </div>

           <div id="top" style={{width:"50%",marginLeft:"auto"}}>
               <h2>Let bring your ideas to live </h2>
               <h3>Be it web, mobile, desktop projects</h3>
               <Btn>
                    <a href={"https://otecscript.web.app/about"} style={{textDecoration:"none"}}>
                      Projects  
                    </a>
                </Btn>
           </div>
        </Container>
     );
}


const Container = styled.div`
width:100%;
height:70vh;
display:flex;
background-image: url('https://res.cloudinary.com/otecdealings/image/upload/v1737152547/otecscripting/workHero2_wzy27p.jpg');
background-size:contain;
background-repeat:no-repeat;
#left{
display:none;
}
#top{
display:flex;
height:100%;
background-image: url('https://res.cloudinary.com/otecdealings/image/upload/v1737152568/otecscripting/plank2_jqcdgn.png');
background-size:cover;
background-repeat:no-repeat;
display:flex; 
flex-flow:column;
align-items:center;
justify-content:center;
h2{
padding-top:30px;
padding-left:10px;
font-size:45px;
}
h3{
padding-left:10px;
font-size:25px;
}
}
@media(max-width:768px){
height:50vh;
#top{
display:none;
}
#left{
width:100%;
height:auto;
display:block;
margin:0 auto;
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
background-image: url('https://res.cloudinary.com/otecdealings/image/upload/v1737152547/otecscripting/workHero2_wzy27p.jpg');
background-size:cover;
background-repeat:no-repeat;

h2{
padding-top:30px;
padding-left:20px;
font-size:25px;
width:90%;
color:#f5f5f5;
text-align:center;
}
h3{
padding-left:0px;
font-size:15px;
color:#f5f5f5;
}
}
}
`;





const Btn = styled.div`
display:flex;
width:250px;
height:30px;
background:#ebc334;
text-align:center;
color:#ffffff;
padding:15px;
border-radius:10px;
margin-top:15px;
margin-left:10px;
justify-content:center;
align-items:center;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
:hover{
background:#13B6FF;
transform: scale(1.05);
transition: transform 500ms;
z-index: 1;
}
@media(max-width:768px){
width:100px;
height:10px;
margin-left:0px;
}

`;
 
export default Hero;