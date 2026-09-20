import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import RootLayout from '@/app/layout';
import Footer from './Footer';

const About = () => {

  const [initialRenderComplete, setInitialRenderComplete] = React.useState(false);
  
  const [list, setList] = useState([

                                       {  
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1789943519/otecscripting/p1_adentc.png",
                                        url:"https://beepy-001.web.app/",
                                        name:"Beeppee",
                                        rl:"Beeppee.com",
                                        type:"Location monitoring"
                                       },


                                       {  
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1789943518/otecscripting/p2_kls6on.png",
                                        url:"https://beepaccesspage.web.app/",
                                        name:"Beeppee access",
                                        rl:"Beepaccess.com",
                                        type:"Estate security"
                                       },



                                       {  
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1766697311/otecscripting/highland_g5ofkg.png",
                                        url:"https://highlander-con.web.app",
                                        name:"Highland consultancy",
                                        rl:"highland.com",
                                        type:"Litigation Consultant"
                                       },

                                         {  
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1766697469/otecscripting/abjpharmacy_o7gn0c.png",
                                        url:"https://abjpharmacy-a.web.app/",
                                        name:"Abjpharmacy",
                                        rl:"abjpharmacy.com",
                                        type:"Pharmacy"
                                      },

                                     {  
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152550/otecscripting/ornate_jdw0sx.png",
                                        url:"https://ornatehealthcarenig.web.app/",
                                        name:"Ornatehealthcare",
                                        rl:"Ornatehealthcarenig.com",
                                        type:"Healthcare"
                                      },
                                      { 
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152552/otecscripting/mon_c3wcqs.png",
                                        url:"https://monclariscoms.web.app",
                                        name:"Monclaris",
                                        rl:"monclariscoms.web.app",
                                        type:"Logistics"
                                      },
                                      {
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152535/otecscripting/beep_vb5vzm.png",
                                        url:"https://beepoint01.web.app/",
                                        name:"Beeppoint",
                                        rl:"Beeppoint.com",
                                        type:"Fintech"
                                      },
                                      {
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152541/otecscripting/store_f8lwsf.png",
                                        url:"https://webflystore.web.app",
                                        name:"Webflystore",
                                        rl:"Webflystore.web.app/",
                                        type:"E-commerce"
                                      },
                                      {
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152542/otecscripting/blog_zdtlqm.png",
                                        url:"https://webdealit.web.app",
                                        name:"Webflyblog",
                                        rl:"webdealit.web.app",
                                        type:"Blog"
                                       },
                                       {
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152555/otecscripting/benson_lkeynv.png",
                                        url:"https://enikuomehinco.web.app/",
                                        name:"Benson Enikuomehin & co Shalom Chambers",
                                        rl:"enikuomehinco.web.app",
                                        type:"Legal practitioners"
                                      },
                                      {
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152548/otecscripting/Bet_wadjid.png",
                                        url:"#",
                                        name:"Tokcoin",
                                        rl:"Tokcoin",
                                        type:"Betting app"
                                      },
                                      {
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152548/otecscripting/Food_go6n87.png",
                                        url:"#",
                                        name:"Chau",
                                        rl:"Chau",
                                        type:"Eatery app"
                                      },
                                      { 
                                        img:"https://res.cloudinary.com/otecdealings/image/upload/v1737152543/otecscripting/webpoints_hjap3e.png",
                                        url:"#",
                                        name:"Beeppoint",
                                        rl:"Fintech",
                                        type:"Fintech app"
                                      }
                                   ])


    useEffect(() => {
      setInitialRenderComplete(true);
    }, []);
    if (!initialRenderComplete) {
      return null;
    } else {
      return ( 
        <RootLayout>
          <Container>
              <Boxes>
                <WriteUp>
                  <img src={"../assets/arch.png"} width={45} height={45} style={{marginTop:"25px",objectFit:"contain"}} />
                  <Text>
                    Otecscripting is a startup that commenced operation in the year 2020 during the (Covid) lockdown, 
                    ever since it being helping it's client actualize their ideas.
                  </Text>
                </WriteUp>
                <ListUp>
                  <Head>Projects</Head>
                  <Projects>
                    {list.map((v,i) => 
                      <Card key={i}>
                        <Box>
                          <Text3>{v.type}</Text3>
                          <img src={v.img} loading='lazy'  style={{objectFit:"contain",width:"200px",height:"120px"}}/>
                        </Box>
                        <Box>
                            <br/>
                            <br/>
                          <Text2>{v.name}</Text2>
                          <Url><a href={v.url}>{v.rl}</a></Url>
                        </Box>
                     </Card>
                    )}
                     
                  </Projects>
                </ListUp>
              </Boxes>
          </Container>
          <Footer/>
          </RootLayout>
      );
  }
}
 


const Container = styled.div`
width:100%;
height:auto;
`;


const Boxes = styled.div`
display:flex; 
align-items:center;
justify-content:center;
flex-flow:column;
width:80%; 
margin:0 auto;
@media(max-width:768px){
width:100%;
}
`;


const WriteUp = styled.div`
width:80%; 
height:30vh;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
display:flex;
text-align:left;
flex-flow:column;
padding:25px;
margin-top:100px;
font-size:15px;
@media(max-width:768px){
width:80%;
padding:0px;
img{
margin:10px;
}

}
`;


const Text = styled.div`
width:100%; 
height:auto;
margin-top:20px;

@media(max-width:768px){
width:90%;
margin-left:0px;
font-size:12px;
padding:10px;
text-align:left;
}
`;


const Text2 = styled(Text)`
margin-left:0px;
`;

const Text3 = styled(Text2)`
margin:10px;
@media(max-width:768px) {
font-size:25px;
}
`;


const ListUp = styled.div`
width:100%; 
height:auto;
`;


const Head = styled.div`
margin:0 auto;
text-align:center;
padding-top:150px;
`;


const Projects = styled.div`
display:flex; 
height:auto;
align-items:center;
justify-content:center;
flex-flow:column;
`;



const Card = styled.div`
width:80%;
margin:20px;
height:180px;
display:flex;
flex-flow:row;
justify-content:space-between;
box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
@media(max-width:768px) {
width:90%;
border-radius:15px;
flex-flow:column;
height:auto;
}
`;


const Url = styled.div`
display:flex;
justify-content:left;
align-items:center;
text-align:left;
@media(max-width:768px) {
margin-left:10px;
padding-bottom:10px;
}
`;

const Box = styled.div`
width:25%;
@media(max-width:768px) {
width:100%;
img{
margin-left:25px;
}
}
`;


export default About;