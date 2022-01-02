import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ReplayIcon from '@material-ui/icons/Replay';
import { Typography, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: "0 0.8em"
    },
    icon: {
        fontSize: "2em",
        backgroundColor: "#588BAE",
        color: "white",
        borderRadius: "50%",
        padding: "0.3em",
    },
    smIcon: {
        fontSize: "2em",
        backgroundColor: "#588BAE",
        color: "white",
        borderRadius: "50%",
        padding: "0.3em",
        margin: "0.5em 0",
    },
    item: {
        marginBottom: "0.8em",
    },
    textItem: {
        paddingTop: "0.3em",
        paddingBottom: "0.3em",
    },
    smText: {
        fontSize: "0.7em",
    },
    textTitle: {
        fontWeight: "600",
    },
  }));

function SkillsHighlights() {
    const classes = useStyles();

    const phoneScreenSize = useMediaQuery('(max-width:600px)');

    var iconClass = classes.icon;
    var textClass = "";
    if(phoneScreenSize) {
        iconClass = classes.smIcon;
        textClass = classes.smText;
    }

    return (
        <Grid 
            container
            direction="column"
            className={classes.root}
        >
            <Grid
                item
                className={classes.item}
            >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={3}>
                        <WorkIcon className={iconClass} />
                    </Grid>
                    <Grid item xs={8} className={classes.textItem}>
                        <Typography className={`${classes.textTitle} ${textClass}`}>Enterprise Solutions</Typography>
                        <Typography className={textClass}>Experience in developing enterprise solutions that scale.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                className={classes.item}
            >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={3}>
                        <SupervisorAccountIcon className={iconClass} />
                    </Grid>
                    <Grid item xs={8} className={classes.textItem}>
                        <Typography className={`${classes.textTitle} ${textClass}`}>Customer Engagment</Typography>
                        <Typography className={textClass}>Develope with close customer engagments to meet all requirements.</Typography>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid
                item
                className={classes.item}
            >

                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={3}>
                        <ReplayIcon className={iconClass} />
                    </Grid>
                    <Grid item xs={8} className={classes.textItem}>
                        <Typography className={`${classes.textTitle} ${textClass}`}>Agile</Typography>
                        <Typography className={textClass}>Develop products wiith agile methodologies.</Typography>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    )
}

export default SkillsHighlights
