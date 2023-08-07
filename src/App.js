import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardBody, CardTitle, CardSubtitle,CardText, Nav, NavItem, NavLink, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideo, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
<div className='header'>
<Nav
>
  <span>
    <img src='./logo_movie.png' width={40} height={40}/>
  </span>
  <NavItem>
    <NavLink>Last Releases</NavLink>
  </NavItem>
  <NavItem>
    <NavLink>
      <Button type="Button"> 11 films </Button>
    </NavLink>
  </NavItem>
</Nav>

      </div>
      <div className='movies'>
      <Card className='card-item' 
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody >
  <CardText>
      Like <FontAwesomeIcon icon={faHeart} className='pointer'/>
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon icon={faVideo} />
    </CardText>
    <CardText>
      Mon avis 
      <FontAwesomeIcon icon={faStar} /> 
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <ButtonGroup size='sm'> 
      <Button>-</Button> 
      <Button>+</Button>
      </ButtonGroup>
    </CardText>
    <CardText>
      Moyenne 
      <FontAwesomeIcon icon={faStar} /> 
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      (8)
    </CardText>
    <CardTitle tag="h5">
      Film title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Type of Movie
    </CardSubtitle>
    <CardText>
      Movie description
    </CardText>
  </CardBody>
</Card>
<Card className='card-item' 
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody >
  <CardText>
      Like <FontAwesomeIcon icon={faHeart} className='pointer'/>
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon icon={faVideo} />
    </CardText>
    <CardText>
      Mon avis 
      <FontAwesomeIcon icon={faStar} /> 
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <ButtonGroup size='sm'> 
      <Button>-</Button> 
      <Button>+</Button>
      </ButtonGroup>
    </CardText>
    <CardText>
      Moyenne 
      <FontAwesomeIcon icon={faStar} /> 
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      (8)
    </CardText>
    <CardTitle tag="h5">
      Film title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Type of Movie
    </CardSubtitle>
    <CardText>
      Movie description
    </CardText>
  </CardBody>
</Card>
<Card className='card-item' 
>
  <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  />
  <CardBody >
  <CardText>
      Like <FontAwesomeIcon icon={faHeart} className='pointer' />
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon icon={faVideo} />
    </CardText>
    <CardText>
      Mon avis 
      <FontAwesomeIcon icon={faStar} /> 
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <ButtonGroup size='sm'> 
      <Button>-</Button> 
      <Button>+</Button>
      </ButtonGroup>
     
    </CardText>
    <CardText>
      Moyenne 
      <FontAwesomeIcon icon={faStar} /> 
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      (8)
    </CardText>
    <CardTitle tag="h5">
      Film title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Type of Movie
    </CardSubtitle>
    <CardText>
      Movie description
    </CardText>
  </CardBody>
</Card>

      </div>
    </div>
  );
}

export default App;
