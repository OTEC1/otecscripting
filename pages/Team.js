import { RiCodeBoxLine } from "react-icons/ri";
import styled from "styled-components";

const Team = () => {
    return (  
        <Container>
            <Head>The Developer</Head>
            <Contain>
                    <Card>
                        <img loading="lazy" src={"../assets/tok.png"} />
                        <User>
                            <h5>Tobechukwu Greg</h5>
                            <div>
                                <RiCodeBoxLine size={35}  color="#b4d0dc"/>
                                <br/>
                                Cyber security, Network admin, Java,react js, next js, aws, typscript, javascript, Java (android), flutter, python,html/css.
                            </div>
                        </User>
                    </Card>  
            </Contain>
        </Container>

    );
}


const Container = styled.div`
width:80%; 
margin: 0 auto;
display:flex; 
flex-flow:column;
justify-content:center;
align-items:center;
margin-top:20px;
margin-bottom:40px;
@media(max-width:768px){
width:100%;
margin-top:0px;
padding-bottom:0px;

}
`;



const Head = styled.div`
width:50%; 
margin-top:70px;
text-align:center;
padding:20px;
font-size:45px;
@media(max-width:768px){
font-size:25px;
}
`;




const Contain = styled.div`
display:flex; 
flex-flow:row;
text-align:center;
justify-content:center;
@media(max-width:768px){
flex-flow:column;
align-items:center;
}
`;



const Card = styled.div`
width:40%; 
height:auto; 
padding:20px;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
margin:10px;
img{
width:150px;
height:150px;
border-radius:50%;
border: 5px solid #b4d0dc;
margin:15px;
object-fit:contain;
}
@media(max-width:768px){
width:80%;
}
`;


const User = styled.div`
width:80%; 
height:auto; 
margin: 0 auto;
`;
 
export default Team;