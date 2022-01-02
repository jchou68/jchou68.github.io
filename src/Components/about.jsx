import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ProfilePic from '../Assets/profilePic.png';
import { resumeData } from '../Resume/resume';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        marginBottom: "2em",
        marginRight: "0.5em",
        marginLeft: "0.5em",
        height: "100vh"
    },
    profilePicContainer: {
        display: "flex",
        justifyContent: "center"
    },
    profilePic: {
        width: "12em",
        height: "12em",
        borderRadius: "50%",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        margin: "2em 3em",
    },
    nameText: {
        color: "black",
        fontWeight: "bolder",
        textAlign: "center",
    },
    subtitle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    bodyContainer: {
        display: "flex",
        justifyContent: "center",
    },
    body: {
        color: "black",
        fontWeight: "400",
        textAlign: "center",
        fontSize: "1em",
        maxWidth: "75%"
    }
  }));

function About() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.root} justify="center">
                <Grid item={true} className={classes.profilePicContainer}>
                    <img src={ProfilePic} alt="Profile Pic" className={classes.profilePic}/>
                </Grid>
                <Grid item={true}>
                    <Typography variant="h4" className={classes.nameText}>{resumeData.about.name}</Typography>
                    <Typography variant="h6" className={classes.subtitle}>{resumeData.about.title}</Typography>
                    <div className={classes.bodyContainer}>
                        <Typography variant="h6" className={classes.body}>{resumeData.about.objective}</Typography>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default About

