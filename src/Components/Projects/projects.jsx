import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, useMediaQuery } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: "5px 6px",
        margin: "3px"
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


function Projects(projects) {
    const classes = useStyles();

    
    const renderProjCards = projects.map((value, key) => {
        return (
            <Grid item key={key}>
                <Card>
                    <CardContent>
                    
                    </CardContent>
                </Card>
            </Grid>
        );


    });
    return (
        <Grid container>
            {renderProjCards}
        </Grid>
    )
}

export default Projects;
