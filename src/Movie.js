import './App.css';
import { useState, useEffect, startTransition } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,CardBody, CardTitle, CardSubtitle,CardText, Nav, NavItem, NavLink, Button, ButtonGroup, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideo, faStar, faHeart, faDisplay } from '@fortawesome/free-solid-svg-icons'

function Movie(props, handleClickParent, myTitle,) {
    const[likeMovie, setLikeMovie] = useState(false)
    const[watchMovie, setWatchMovie] = useState(false)
    const[countWatchMovie, setcountWatchMovie] = useState(0)
    const [myRatingMovie, setMyRatingMovie] = useState(0)
    const [myRatingStar, setMyRatingStar] = useState(null)
    const [hover, setHover] = useState(null)
    const [averageRating, setAverageRating] = useState(props.note)
    const [currentRating, setCurrentRating] = useState(null)
      const [numberofrates, setNumberofrates] = useState(props.nbVotes)
      const [newNumberofrates, setNewNumberofrates] = useState(numberofrates)
  
  
  
     const stars = [...Array(10)].map((_,index) => 
      { 
        const currentRatingFromStars = index + 1;
          return (
        <label key={currentRatingFromStars}>
          <input 
          style={{display:'none'}}
          type='radio' 
          name='rating' 
          value={currentRatingFromStars} 
          onClick={()=>{
            setMyRatingStar(currentRatingFromStars); 
            setNewNumberofrates(numberofrates + 1)}} 
          />
          <FontAwesomeIcon 
          color={currentRatingFromStars <= (hover || myRatingStar) ? '#f1c40f' : "black"} 
          icon={faStar} 
          onMouseEnter={()=>setHover(currentRatingFromStars)} 
          onMouseLeave={()=>setHover(null)}
          />
        </label>
        )
      }
    );
  
    useEffect(() => {
      if (myRatingStar !== null) {
        const newAverageRating =
          (averageRating * numberofrates + myRatingStar) / newNumberofrates ;
        setAverageRating(Math.round(newAverageRating));
      }
      
    }, [numberofrates, newNumberofrates, myRatingStar, averageRating]);
  
    const averageStars = [...Array(10)].map((_,index) => 
    { 
        return (
      <label>
        <FontAwesomeIcon 
        color={averageRating <= 10 ? '#f1c40f' : "black"} 
        icon={faStar} 
        value={averageRating} 
        />
      </label>
      )
    }
  );
  
      if (likeMovie == false)
      var colorLike = {} 
      else colorLike ='#e74c3c'
   
      if (watchMovie == false)
      var colorMovie = {}
      else colorMovie = '#e74c3c'
    
    // console.log(likeMovie);
    // console.log(watchMovie);
  

    var handleClick = ()=>{
      setLikeMovie(!likeMovie);
      props.handleClickParent(props.myTitle);
    }


    return (
        
        <Card className='card-item' 
  >
    <img
      alt="Sample"
      src={props.myAffiche}
    />
    <CardBody >
    <CardText>
      
        Like <FontAwesomeIcon onClick={()=>{ handleClick(props.myTitle)}} color={colorLike} icon={faHeart} className='pointer'/>
      </CardText>
      <CardText>
        Nombre de vues <FontAwesomeIcon color={colorMovie} icon={faVideo} onClick={()=>{setWatchMovie(!watchMovie); setcountWatchMovie(countWatchMovie + 1)}}/> <Badge>{countWatchMovie}</Badge>
      </CardText>
      <CardText>
        Mon avis 
        {stars}
   
      </CardText>
      <CardText>
        Moyenne 
        {averageStars}
        ({averageRating}) {newNumberofrates}
      </CardText>
      <CardTitle tag="h5">
        {props.myTitle}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {props.myType}
      </CardSubtitle>
      <CardText>
      {props.myDescription}
      </CardText>
    </CardBody>
  </Card>
        
    )

    }

    export default Movie;

