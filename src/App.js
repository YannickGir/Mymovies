import './App.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardBody, CardTitle, CardSubtitle,CardText, Nav, NavItem, NavLink, Button, ButtonGroup, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideo, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'


function App() {
  const[likeMovie, setLikeMovie] = useState(false)
  const[watchMovie, setWatchMovie] = useState(false)
  const[countWatchMovie, setcountWatchMovie] = useState(0)
  const [myRatingMovie, setMyRatingMovie] = useState(0)

  function lowratingmovie () {
    if (myRatingMovie > 0) {
      setMyRatingMovie(myRatingMovie-1)
    }
  }

    if (likeMovie == false)
    var colorLike = {} 
    else colorLike ='#e74c3c'
 
    if (watchMovie == false)
    var colorMovie = {}
    else colorMovie = '#e74c3c'
  
  console.log(likeMovie);
  console.log(watchMovie);
  return (
    <div className="App">
      <div className="wrapper">
<div className='header'>
<Nav
>
  <span>
    <img src='./logo_movie.png' width={50} height={50}/>
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
      Like <FontAwesomeIcon onClick={()=>{setLikeMovie(!likeMovie)}} color={colorLike} icon={faHeart} className='pointer'/>
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon color={colorMovie} icon={faVideo} onClick={()=>{setWatchMovie(!watchMovie); setcountWatchMovie(countWatchMovie + 1)}}/> <Badge>{countWatchMovie}</Badge>
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
      <Button onClick={()=>{lowratingmovie()}}>-</Button> 
      <Button onClick={()=>{setMyRatingMovie(myRatingMovie+1)}}>+</Button> {myRatingMovie}
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
      Like <FontAwesomeIcon onClick={()=>{setLikeMovie(!likeMovie)}} color={colorLike} icon={faHeart} className='pointer'/>
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon color={colorMovie} icon={faVideo} onClick={()=>{setWatchMovie(!watchMovie); setcountWatchMovie(countWatchMovie + 1)}}/> <Badge>{countWatchMovie}</Badge>
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
      Like <FontAwesomeIcon onClick={()=>{setLikeMovie(!likeMovie)}} color={colorLike} icon={faHeart} className='pointer'/>
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon color={colorMovie} icon={faVideo} onClick={()=>{setWatchMovie(!watchMovie); setcountWatchMovie(countWatchMovie + 1)}}/> <Badge>{countWatchMovie}</Badge>
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
      Like <FontAwesomeIcon onClick={()=>{setLikeMovie(!likeMovie)}} color={colorLike} icon={faHeart} className='pointer'/>
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon color={colorMovie} icon={faVideo} onClick={()=>{setWatchMovie(!watchMovie); setcountWatchMovie(countWatchMovie + 1)}}/> <Badge>{countWatchMovie}</Badge>
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
      Like <FontAwesomeIcon onClick={()=>{setLikeMovie(!likeMovie)}} color={colorLike} icon={faHeart} className='pointer'/>
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon color={colorMovie} icon={faVideo} onClick={()=>{setWatchMovie(!watchMovie); setcountWatchMovie(countWatchMovie + 1)}}/> <Badge>{countWatchMovie}</Badge>
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
      Like <FontAwesomeIcon onClick={()=>{setLikeMovie(!likeMovie)}} color={colorLike} icon={faHeart} className='pointer'/>
    </CardText>
    <CardText>
      Nombre de vues <FontAwesomeIcon color={colorMovie} icon={faVideo} onClick={()=>{setWatchMovie(!watchMovie); setcountWatchMovie(countWatchMovie + 1)}}/> <Badge>{countWatchMovie}</Badge>
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
    </div>
  );
}

export default App;
