import React, { useEffect, useState } from "react";
import './Style.css'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Toolbar,
  AppBar,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { toFirstCharUppercase } from "./constants";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import { Refresh } from "@material-ui/icons";
import { render } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    margin: "auto",
  },
  searchContainer: {
    display: "flex",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  searchInput: {
    width: "200px",
    margin: "5px",
    color: "White",
  },
  about: {
    fontWeight: "bold",
    margin:"20px",
    height: "30px",
    width: "130px",
    background: "none",
    display: "inline-block",
    border: "none",
    cursor: "pointer",
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontSize: "20px",
  },

  next:{

  },

  previous: {

  }
}));

const Pokedex = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [pokemonData, setPokemonData] = useState({});
  const [filter, setFilter] = useState("");
const [page, setPage] = useState(0)
let [limit, setLimit] = useState(20)


  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`)
    .then(function (response) {
      const { data } = response;
      const { results } = data;
      const newPokemonData = {};
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1 + (page * limit),
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1 + (page * limit)
          }.png`,
        };
      });
      setPokemonData(newPokemonData);
    });
}, [page, limit]);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const getPokemonCard = (pokemonId) => {
    const { id, name, sprite } = pokemonData[pokemonId];
    return (
      <Grid item xs={2} key={pokemonId}>
        <Card style={{cursor: "pointer"}} onClick={() => history.push(`/${id}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px"}}
          />
          <CardContent className={classes.cardContent}>
            <Typography style={{fontFamily: "cursive"}}>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchInput}
              onChange={handleSearchChange}
              label="Pokemon"
              variant="standard"
            />
          </div>
          <div> 
            <button className={classes.about} onClick={() => history.push(`/about`)} >About</button>
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {Object.keys(pokemonData).map(
            (pokemonId) =>
              pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
      <button className={classes.next} onClick={() => { 
        if(page !== 0) 
        {
          setPage(page - 1);
          setLimit(limit = 20);
          if(page === 100){
            setPage(page / 2-1);
          }
        }}}>previous page</button>
      <button className={classes.next} onClick={() => {
        if(page !== 50 && page !== 100) 
        {
          setPage(page + 1); 
          if(page === 49){
            setLimit(limit = 10);
            setPage(page * 2+2);
          }
        } 
      }}>next page</button>
    </>
  );
};

export default Pokedex;
