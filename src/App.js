/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import Header from './Components/header';
import Skills from './Components/Skills/skills';
import ProgrammingHighlights from './Components/Skills/programmingHighlights';
import SkillHighlights from './Components/Skills/skillsHighlights';
import Experience from './Components/experience';
import Education from './Components/education';
import Footer from './Components/footer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {resumeData} from './Resume/resume';
import { Typography, useMediaQuery } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  anchor: {
    display: "block",
    position: "relative",
    top: "-60px",
    visibility: "hidden",
  },
  sectionSize: {
    height: "auto",
  },
  sectionDivider: {
    backgroundColor: "whitesmoke",
  },
  sectionPadding: {
    padding: "3em",
    margin: "1em 0",
    height: "auto"
  },
  sectionPaddingLast: {
    padding: "3em",
    margin: "1em 0 0",
    height: "auto"
  },
  sectionTitle : {
    fontWeight: "bold",
    margin: "0.5em 0 0.3em 0"
  },
  titleSm: {
    fontWeight: "bold",
    fontSize: "1em",
    margin: "0.5em 0 0.3em 0"
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
    backgroundColor: "gray",
  }

}));

function App() {
  const classes = useStyles();
  const phoneScreenSize = useMediaQuery('(max-width:600px)');

  var titleClass = classes.sectionTitle;
  if(phoneScreenSize) {
    titleClass = classes.titleSm;
  }

  return (
    <Grid
      container
      className={classes.root}
      
    >
    <Header />

    
    <Grid       
    item
    xs={12}
    
    className={`${classes.sectionPadding}`} >
    <a className={classes.anchor} id="skills"></a>
      <Typography variant="h5" className={titleClass} style={{textAlign: "center"}}>Skills</Typography>
      <div className={classes.titleLineParent}>
        <div className={classes.titleLine}></div>
      </div>
 
    <Grid
      container
      className={`${classes.sectionSize}`}
      direction="row"
      alignItems="center"
      justify="center"
      >
      <Grid 
      item
      xs={12}
      md={6}
      lg={6}
      xl={6}
      >
  
        <Skills title="Programming Languages" programmingLanguage={resumeData.programmingLanguages} />
      </Grid>

      <Grid 
      item
      xs={12}
      md={6}
      lg={6}
      xl={6}
      >
        <ProgrammingHighlights />
      </Grid>
    </Grid>
    <Grid
      container
      className={`${classes.sectionSize}`}
      direction="row"
      alignItems="center"
      justify="center"
      >
      <Grid 
      item
      xs={12}
      md={6}
      lg={6}
      xl={6}
      >
      {phoneScreenSize ? <Skills title="Skills" programmingLanguage={resumeData.skills} /> :  <SkillHighlights /> }
        
      </Grid>
      <Grid 
      item
      xs={12}
      md={6}
      lg={6}
      xl={6}
      >
      {phoneScreenSize ? <SkillHighlights /> : <Skills title="Skills" programmingLanguage={resumeData.skills} />}
      </Grid>
    </Grid>
    </Grid>
    
    
    
    <Grid 
    item
    xs={12}
    className={`${classes.sectionPadding} ${classes.sectionDivider}`}
    >
    
    
    <a className={classes.anchor} id="experience"></a>
    <Typography variant="h5" className={titleClass} style={{textAlign: "center"}}>Work Experience</Typography>
        <div className={classes.titleLineParent}>
          <div className={classes.titleLine}></div>
        </div>
        <Experience exp={resumeData.experience} />
    </Grid>

    
    <Grid 
    item
    xs={12}
    className={classes.sectionPadding}
    >
        <a className={classes.anchor} id="education"></a>
        <Typography variant="h5" className={titleClass} style={{textAlign: "center"}}>Education</Typography>

        <div className={classes.titleLineParent}>
          <div className={classes.titleLine}></div>
        </div>
        <Education edu={resumeData.education} />
      </Grid>

    <Grid 
    item
    xs={12}
    className={`${classes.sectionPaddingLast} ${classes.sectionDivider}`}
    >
        <a className={classes.anchor} id="projects"></a>
        <Typography variant="h5" className={titleClass} style={{textAlign: "center"}}>Projects</Typography>

        <div className={classes.titleLineParent}>
          <div className={classes.titleLine}></div>
        </div>
        
      </Grid>

      <a className={classes.anchor} id="contact"></a>
      <Footer contacts={resumeData.contact}/>
    </Grid>

  );
}

export default App;
