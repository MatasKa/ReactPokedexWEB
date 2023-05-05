import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import { toFirstCharUppercase } from "./constants";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  textStyle: {
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  }
}));

const Pokemon = (props) => {
  const classes = useStyles();
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const { front_default } = sprites;
    return (
      <>
        <Typography className={classes.textStyle}  variant="h1">
          {`${id}.`} {toFirstCharUppercase(name)}
        </Typography>
        <img style={{ width: "128px", height: "128px" }} src={front_default} alt="Here should be a pokemon" />
        <Typography className={classes.textStyle} variant="h3">Pokemon Info</Typography>
        <Typography className={classes.textStyle} >
          {"Species: "}
          <Link href={species.url}>{species.name} </Link>
        </Typography>
        <Typography className={classes.textStyle} >Height: {height} </Typography>
        <Typography className={classes.textStyle} >Weight: {weight} </Typography>
        <Typography className={classes.textStyle} variant="h6"> Types:</Typography>
        {types.map((typeInfo) => {
          const { type } = typeInfo;
          const { name } = type;
          return <Typography className={classes.textStyle} key={name}> {`${name}`}</Typography>;
        })}
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}

      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </>
  );
};

export default Pokemon;
