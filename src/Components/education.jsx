import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: "5px 6px",
        margin: "3px",
        minHeight: "5rem"
    },
    degreeText: {
        fontWeight: 400
    },
    bodySm: {
        fontSize: "0.8em"
    },
    titleReg: {
        fontSize: "1em"
    },
  }));

export default function Education({edu}) {
    const classes = useStyles();
    const phoneScreenSize = useMediaQuery('(max-width:600px)');

    var textClass = classes.titleReg;
    if (phoneScreenSize) {
        textClass = classes.bodySm;
    }
    
    const education = edu.map((value, key) => {
        return (
            <React.Fragment key={key}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h5" className={textClass}>{value.degree}</Typography>
                        <Grid container direction="row" justify="space-between">
                            <Grid item>
                                <Typography className={classes.bodySm}>{value.school}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography className={classes.bodySm}>{value.date}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    })
    return (
        <Grid
            container
            direction="row"
        >
            {education}
        </Grid>
    )
}

