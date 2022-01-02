import React from 'react';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import Link from '@material-ui/core/Link';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "auto",
        padding: "3em 0",
        backgroundColor: "#588BAE",
    },
    titleLineParent: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "1em",
    },
    titleLine: {
        display: "block",
        width: "10%",
        height: "0.3em",
        backgroundColor: "red",
        zIndex: 5,
    },
    sectionTitle : {
        fontWeight: "bold",
        color: "whitesmoke",
        margin: "0.5em 0 1.5em 0"
    },
    titleSm: {
        fontWeight: "bold",
        color: "whitesmoke",
        fontSize: "1em",
        margin: "0.5em 0 1.5em 0"
    },
    item: {
        "&:hover, &:focus": {
            color: "#ae6158"
        }
    },
    icon: {
        color: "white",
        margin: "0 0.8em 0.8em 0",
    },
    text: {
        color: "white",
        fontSize: "0.8em",
    },
  }));

function Footer({contacts}) {
    const classes = useStyles();

    const phoneScreenSize = useMediaQuery('(max-width:600px)');

    var titleClass = classes.sectionTitle;
    if(phoneScreenSize) {
      titleClass = classes.titleSm;
    }

    //const email = "mailto:"+contacts.email;


    return (
        <Grid
            container
            className={classes.root}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Typography variant="h5" className={titleClass} style={{textAlign: "center"}}>Contact</Typography>
            <Grid
                item
                xs={12}
            >
                <Grid container direction="row" className={classes.item}>
                    <Grid item>
                        <MailIcon className={classes.icon}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.text}>{contacts.email}</Typography>   
                    </Grid>
                </Grid>
                <Grid container direction="row" className={classes.item}>
                    <Grid item>
                        <LanguageIcon className={classes.icon} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.text}>www.johnson-chou.com</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" className={classes.item}>
                    <Grid item>
                        <LinkedInIcon className={classes.icon} />
                    </Grid>
                    <Grid item>
                        <Typography className={classes.text}>{contacts.linkedin}</Typography>
                    </Grid>
                </Grid>
                
                
                
                
            </Grid>
            
        
        </Grid>
    )
}

export default Footer;

/*

<BottomNavigation >
                <BottomNavigationAction component={Link} href={email} target="_blank" icon={<MailIcon className={classes.icon}/>} />
                <BottomNavigationAction icon={<LanguageIcon className={classes.icon} />} />
                <BottomNavigationAction component={Link} href={contacts.linkedin} target="_blank" icon={<LinkedInIcon className={classes.icon} />} />
            </BottomNavigation>


*/
