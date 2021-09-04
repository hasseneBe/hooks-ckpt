import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import MovieList from './MovieList.js';
import MovieAdd from './MovieAdd';
import Head from './Head';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

function App() {
const intlist=[{Title:'Gladiateur', Description:'Le général romain Maximus est le plus fidèle soutien de lempereur Marc Aurèle, quil a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de lamour que lui voue lempereur, le fils de Marc Aurèle, Commode, sarroge brutalement le pouvoir', PosterURL:'image03.jpg', Rating:2},
            {Title:'Joker', Description:'Dans les années 1980, à Gotham City, Arthur Fleck, un comédien de stand-up raté est agressé alors quil ère dans les rues de la ville déguisé en clown. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.', PosterURL:'image02.jpg', Rating:5},
            {Title:'De Gaulle', Description:'Mai 1940. La guerre sintensifie, larmée française seffondre, les Allemands seront bientôt à Paris. La panique gagne le gouvernement qui envisage daccepter la défaite. Charles de Gaulle, fraîchement promu général, veut infléchir le cours de lHistoire. ', PosterURL:'image01.jpg', Rating:4}
            ]

const [list, setList] = useState(intlist)
const [Filter, SetFilter]=useState("")
const [Rate, setRate] = useState(0)


const handelfilter=(val)=>{SetFilter(val)}
const handelrate=(stars)=>{setRate(stars)}
const handelAdd=(valeur)=>{setList([...list, valeur])}
return(
  <div className="App">
  <Container fluid>
  <Navbar  bg="dark"><h1 style={{color:"white"}}>Box Office</h1></Navbar>
  <Row>
 <Col >
 <Head handelfilter={handelfilter} handelrate={handelrate} ></Head>
 </Col>
 <Col md="auto"><MovieAdd handelAdd={handelAdd}></MovieAdd></Col>
 </Row>
<Row>
 <MovieList list={list.filter(elm=>elm.Title.trim().toLowerCase().includes(Filter.trim().toLowerCase()) && elm.Rating>=Rate)}>
 </MovieList></Row>
 </Container>

  </div>
)
}
export default App;
