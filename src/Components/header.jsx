import React from 'react';
import About from './about';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Toolbar } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "5em",
        marginTop: "2em",
        background: "#588BAE",
    },
    navBar: {
        backgroundColor: "#0E4D92"
    },
    icon: {
        color: "white",
        "&:hover, &:focus": {
            color: "#ae6158"
        }
    }
  }));

function Header() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <About />
            <AppBar position="sticky" className={classes.navBar}>
                <Toolbar>
                    <Grid container direction="row" justify="center">
                        <Button color="inherit" href="#skills">Skills</Button>
                        <Button color="inherit" href="#experience">Experience</Button>
                        <Button color="inherit" href="#education">Education</Button>
                        <Button color="inherit" href="#projects">Projects</Button>
                        <Button color="inherit" href="#contact">Contact</Button>
                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
        )
}

export default Header
