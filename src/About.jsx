import React, {} from "react";
import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  About: {
    paddingTop: "20px",
    margin: "auto",
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  },
  AboutText: {
    marginTop :"150px",
    margin: "auto",
    width: "75%",
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontWeight: "normal",
  },
  Author: {
    margin :"auto",
    width: "100%",
    position: "fixed",
    bottom: "25px",
    textAlign: "center",
  },
  imageStyle: {
    margin: "auto",
    width: "250px",
    height: "100px",
    display: "block",
  },
  ButtonStyle: {
    marginTop: "30px",
    height: "50px",
    width: "200px",
  }
}));

const About = (props) => {
  const { history } = props;
  const classes = useStyles();

  const generatePage = () => {
    return (
      <>
        <Typography className={classes.About} variant="h1">
          About
        </Typography>
        <Typography className={classes.AboutText} variant="h4">
        The purpose of the Pokedex is to provide information regarding the various species of Pokémon.
        You can also use the search bar to find them by name.
        </Typography>
        <Button className={classes.ButtonStyle} variant="contained" onClick={() => history.push("/")}>
        back to pokedex
        </Button>
        <Typography className={classes.AboutText} variant="h4">
        Pokémon information taken from
        </Typography>
        <a href="https://pokeapi.co" target="_blank"><img className={classes.imageStyle} src={require("./PokeAPI.png")} alt="PokeAPI" /></a>
        <Typography className={classes.Author} variant="h6">
        This page was created as a WEB2Y 2nd assingment by Matas Kairys and Nerijus Savickas, two software engineer students at VIA University College.
        </Typography>
      </>
    );
  };

  return (
    <>
    {generatePage()}
    </>
  );
};

export default About;