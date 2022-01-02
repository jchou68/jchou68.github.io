import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import SpeedIcon from '@material-ui/icons/Speed';
import DevicesIcon from '@material-ui/icons/Devices';
import PaletteIcon from '@material-ui/icons/Palette';
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

function ProgrammingHighlights() {
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
                        <SpeedIcon className={iconClass} />
                    </Grid>
                    <Grid item xs={8} className={classes.textItem}>
                        <Typography className={`${classes.textTitle} ${textClass}`}>Fast Speed</Typography>
                        <Typography className={textClass}>Aim to deliver fast render speeds and reduce perceived lag.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                className={classes.item}
            >
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={3} >
                        <DevicesIcon className={iconClass} />
                    </Grid>
                    <Grid item xs={8} className={classes.textItem}>
                        <Typography className={`${classes.textTitle} ${textClass}`}>Responsive</Typography>
                        <Typography className={textClass}>Responsive design to view on any screen size.</Typography>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid
                item
                className={classes.item}
            >

                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={3}>
                        <PaletteIcon className={iconClass} />
                    </Grid>
                    <Grid item xs={8}  className={classes.textItem}>
                        <Typography className={`${classes.textTitle} ${textClass}`}>UI/UX</Typography>
                        <Typography className={textClass}>Deliver well designed products for great UX.</Typography>
                    </Grid>
                </Grid>
                
            </Grid>
        </Grid>
    )
}

export default ProgrammingHighlights
