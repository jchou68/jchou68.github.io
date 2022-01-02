import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "0 0.8em",
    },
    skillBarContainer: {
        position: "relative",
        width: "100%",
        height: "1.5em",
        backgroundColor: "whitesmoke",
        marginBottom: "0.4em",
    },
    skillText: {
        position: "absolute",
        fontWeight: "bold",
        fontSize: "0.8em",
        color: "white",
        left: "5px",
        top: "4px"
    }, 
    skillTextSm: {
        position: "absolute",
        fontWeight: "bold",
        fontSize: "0.6em",
        color: "white",
        left: "5px",
        top: "4px"
    },
    skillPercent: {
        position: "absolute",
        fontSize: "0.8em",
        top: "3px",
        right: "5px"
    },
    skillPercentSm: {
        position: "absolute",
        fontSize: "0.6em",
        top: "3px",
        right: "5px"
    },
    skillLevel: {
        display: "block",
        height: "1.5em",
        backgroundColor: "#588BAE"
    }
  }));

function Skills({programmingLanguage}) {
    const classes = useStyles();
    const phoneScreenSize = useMediaQuery('(max-width:600px)');

    var textClass = classes.skillText;
    var percentClass = classes.skillPercent;
    if (phoneScreenSize) {
        textClass = classes.skillTextSm;
        percentClass = classes.skillPercentSm;
    }

    let skills = programmingLanguage.map((value, key) => {
        let skillLevel = (
            <div className={classes.skillBarContainer} key={key}>
                <span className={textClass}>{value.skill}</span>
                <span className={percentClass}>{value.level}</span>
                <span className={classes.skillLevel} style={{width: value.level}}></span>
            </div>
        );

        return(skillLevel)
    });


    return (
        <Grid 
            container
            className={classes.root}
            direction="column"
        >
            {skills}
        </Grid>
    )
}

export default Skills

