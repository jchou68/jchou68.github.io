import React from 'react';
import Typography from "@material-ui/core/Typography";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Card from '@material-ui/core/Card';

import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CardContent, Collapse, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@material-ui/core';
import { FiberManualRecord } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    timelineDot: {
        backgroundColor: "#588BAE"
    },
    timelineConnector: {
        backgroundColor: "#ae8c58"
    },
    paper: {
        padding: '6px 16px',
      },
    oppositeContent: {
        flex: 0,
        padding: 0
      },
    titleSm: {
        fontSize: "0.8em"
    },
    subtitleSm: {
        fontSize: "1rem"
    },
    bodySm: {
        fontSize: "0.875rem"
    },
    dots: {
        fontSize: '0.75em'
    },
    expandedText: {
        textAlign: "left"
    }
  }));

export default function Experience({exp}) {
    const classes = useStyles();
    const [expandedId, setExpandedId] = React.useState(-1);
    const handleCardClick = (idx) => {
        setExpandedId(expandedId === idx ? -1 : idx);
    }

    const phoneScreenSize = useMediaQuery('(max-width:600px)');
    
    const renderExp = exp.map((value, key) => {
        const accomplishments = value.accomplishments.map((acc, idx) => {
            return (
                <ListItem key={idx} alignItems='flex-start'>
                    <ListItemIcon>
                        <FiberManualRecord className={classes.dots} />
                    </ListItemIcon>
                    <ListItemText>
                        {acc}
                    </ListItemText>
                </ListItem>);
        });
        if (phoneScreenSize) {
            return(
                <TimelineItem key={key}>
                    <TimelineOppositeContent className={classes.oppositeContent}/>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot}/>
                        <TimelineConnector className={classes.timelineConnector} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card elevation={3} className={classes.Card}>
                            <Typography variant="h6" component="h5" className={classes.titleSm}>{value.title}</Typography>
                            <Typography className={classes.bodySm}>{value.company}</Typography>
                            <Typography className={classes.bodySm}>{value.date}</Typography>
                            <Typography className={classes.bodySm}>{value.role}</Typography>
                            <List>{accomplishments}</List>
                        </Card>
                    </TimelineContent>
                
                </TimelineItem>
    
            )
        } else {
            return (
                <TimelineItem key={key}>
                    <TimelineSeparator>
                        <TimelineDot className={classes.timelineDot} />
                        <TimelineConnector className={classes.timelineConnector} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Card>
                            <CardActionArea onClick={() => handleCardClick(key)}>
                                <CardContent>
                                    <Typography variant="h6" component="h1">{value.title}</Typography>
                                    <Typography>{value.company}</Typography>
                                    <Typography>{value.date}</Typography>
                                    </CardContent>
                                    <Collapse in={expandedId === key} >
                                    <CardContent className={classes.expandedText}>
                                        <Typography className={classes.subtitleSm}>Role</Typography>
                                        <Typography className={classes.bodySm}>{value.role}</Typography>
                                        <br/>
                                        <Typography className={classes.subtitleSm}>Accomplishments</Typography>
                                        <List dense={true}>{accomplishments}</List>
                                    </CardContent>
                                </Collapse>
                            </CardActionArea>
                        </Card>
                    </TimelineContent>
                
                </TimelineItem>
            )
        }
    })

    if (phoneScreenSize) {
        return (
            <Timeline>
                {renderExp}
            </Timeline>
        )
    } else {
        return (
            <Timeline align="alternate">
                {renderExp}
            </Timeline>
        )
    }
}

