import './App.css';
import { useState, useEffect, startTransition, Row } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image, ListGroup, ListGroupItemText, ListGroupItem, Card,CardBody, CardTitle, CardSubtitle,CardText, Nav, NavItem, NavLink,  ButtonGroup, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideo, faStar, faHeart, faDisplay } from '@fortawesome/free-solid-svg-icons';
import Movie from './Movie';
import { Button, Popover, PopoverHeader, PopoverBody} from "reactstrap"


function App() {

const movieDatas = [
{id:1, title: "La guerre des étoiles", typeOfMovie: "Science Fiction", description: "Les méchants attaquent les gentils dans les étoiles", affiche:"https://www.bedetheque.com/media/Couvertures/Couv_47062.jpg", rating:7, ratingCount:10 },
{id:2, title: "Le Seigneur des Anneaux - Le Retour du roi", typeOfMovie: "Aventure, Fantasy", description: "C'est l'histoire d'un mec qui était à un doigt de garder l'anneau.", affiche:"https://media.senscritique.com/media/000007087660/0/le_seigneur_des_anneaux_le_retour_du_roi.jpg", rating:5, ratingCount:20 },
{id:3, title: " Her", typeOfMovie: "Drame, Romance, Science-fiction", description: "Un moustachu qui fout des vents à Olivia Wilde, Amy Adams et Scarlett Johansson et qui chiale parce qu'à la fin il est tout seul.", affiche:"https://media.senscritique.com/media/000006629445/0/her.jpg", rating:8, ratingCount:15 },
{id:4, title: " Locke", typeOfMovie: "Drame, Thriller", description: "Jusqu'où est prêt à aller un homme pour être certain que son kit main libre fonctionne parfaitement?", affiche:"https://media.senscritique.com/media/000007088125/0/locke.jpg", rating:7, ratingCount:25 },
{id:5, title: "Alien³", typeOfMovie: "Science-fiction, Épouvante-Horreur", description: "L'héroine se fait poursuivre par un handicapé en roller.", affiche:"https://media.senscritique.com/media/000008632186/0/alien3.jpg", rating:3, ratingCount:30 },
{id:6, title: "The Mist", typeOfMovie: "Épouvante-Horreur, Science-fiction, Thriller", description: "C'est l'histoire d'une toute petite erreur de timing...", affiche:"https://media.senscritique.com/media/000017260476/0/the_mist.jpg", rating:6, ratingCount:40 },
{id:7, title: "Le Prestige ", typeOfMovie: "Drame, Thriller", description: "Une battle de magie entre Wolverine et Batman avec David Bowie, forcément c'est épique.", affiche:"https://media.senscritique.com/media/000004699879/0/le_prestige.jpg", rating:7, ratingCount:12 },
{id:8, title: "American History X", typeOfMovie: "Policier, Drame", description: "Un néonazi qui a décidé de voter à gauche parce qu'il en a eu plein le cul.", affiche:"https://media.senscritique.com/media/000012223258/0/american_history_x.jpg", rating:9, ratingCount:5 },
{id:9, title: "Taken", typeOfMovie: "Action, Thriller", description: "Un homme dont la fille se fait enlever qu'il ne fallait pas énerver car il va chercher, trouver puis tuer à l'aide d'un homme qui va lire : bon chance, sur un bout de papier donc automatiquement c'est lui le kidnappeur.", affiche:"https://media.senscritique.com/media/000000097457/0/taken.jpg", rating:4, ratingCount:17 },
{id:10, title: " American Sniper", typeOfMovie: "Biopic, Guerre", description: "Un mec qui quand il tire, ne raconte pas sa vie.", affiche:"https://media.senscritique.com/media/000020120544/0/american_sniper.jpg", rating:3, ratingCount:32 }
]

const[likeMovie, setLikeMovie] = useState([])

const [movieList, setMovieList] = useState([]);

const [moviesCount, setMoviesCount] = useState(0);

const [popOverOpen, setpopOverOpen] = useState(false);
const toogle = () => setpopOverOpen(!popOverOpen);

var handleClickAddMovie = (movieLiked) => {
  // const isAlreadyLiked = likeMovie.some((likedMovie) => likedMovie.key === movieLiked.id);
  const isAlreadyLiked  = likeMovie.find(movie => movie.myKey == movieLiked.myKey);
  console.log( likeMovie);
    if (!isAlreadyLiked) 
      console.log("isAlreadyLiked:", isAlreadyLiked)
      setLikeMovie([...likeMovie, movieLiked]);
      setMoviesCount(moviesCount + 1);
  
};

var handleClickDeleteMovie = (movieLiked) => {
  setMoviesCount(moviesCount-1);
  setLikeMovie(likeMovie.filter(movie => movie.myKey != movieLiked.myKey));
};

useEffect(() => {
  const movies = movieDatas.map(movie => {
    return (
      <Movie
        myKey={movie.id}
        myTitle={movie.title}
        myType={movie.typeOfMovie}
        myDescription={movie.description}
        myAffiche={movie.affiche}
        note={movie.rating}
        nbVotes={movie.ratingCount}
        handleClickParent={handleClickAddMovie}
        handleClickDeleteParent={handleClickDeleteMovie}
      />
    )
  })
  setMovieList(movies);
}, [likeMovie]);


var cardWish = likeMovie.map((movie, i) => (
  <div className='horizontal card' key={i}>
    <ListGroup>
      <ListGroupItem>
        <div className="flex-row">
          <img
            src={movie.affiche}
            alt={movie.title}
            style={{ width: '50px', height: 'auto' }}
          />
          <div className="title">{movie.title} {movie.id}</div>
        </div>
      </ListGroupItem>
    </ListGroup>
  </div>
));




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
   
      <Button  id="Popover1" type="Button" > {moviesCount} films </Button>
      <Popover
   placement="bottom"
    target="Popover1"
    isOpen={popOverOpen}
    toggle={toogle}
  >
    <PopoverHeader>
      Liste des favoris
    </PopoverHeader>
    <PopoverBody>

    {cardWish}
    </PopoverBody>
  </Popover>
    </NavLink>
  </NavItem>
</Nav>
<div className='movies'> 
<h4>Vous avez sélectionné:  </h4> 
{movieList}
</div>
 

    
      </div>
      </div> 
</div>
  );
}

export default App;
