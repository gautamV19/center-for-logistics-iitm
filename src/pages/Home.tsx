import React from "react";
import { homeContent } from "../assets/textData/home";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid, ListItem, List, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(7),
    },
    landingTitle: {
      fontWeight: 400,
      fontSize: "5rem",
      lineHeight: "6.6rem",
      marginBottom: theme.spacing(5),
      textAlign: "left",
    },
    visionTitle: {
      marginBottom: theme.spacing(5),
      marginLeft: "100px",
    },
    visiontext: {
      fontWeight: 400,
      fontSize: "5rem",
      lineHeight: "6.7rem",
      textAlign: "left",
    },
    landingSubtitle: {
      marginBottom: theme.spacing(5),
      width: "80%",
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      textAlign: "center",
      margin: "auto",
    },
    visionSubtitle: {
      marginBottom: theme.spacing(5),
      width: "65%",
      fontSize: "1.7rem",
      lineHeight: "1.7rem",
      textAlign: "justify",
    },
    button: {
      padding: 0,
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      marginTop: theme.spacing(2),
      fontWeight: 50,
      borderBottom: "1px solid",
      cursor: "pointer",
    },
    listItem: {
      borderTop: "2px solid",
      padding: theme.spacing(2, 0),
    },
    listItem2: {
      borderTop: "2px solid",
      borderBottom: "2px solid",
      padding: theme.spacing(2, 0),
    },
    listText: {
      fontWeight: 400,
    },
    h2text: {
      fontWeight: 400,
      marginBottom: theme.spacing(5),
    },
    abouth2text: {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      textAlign: "justify",
      marginBottom: theme.spacing(5),
    },
    h2text2: {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      textAlign: "justify",
    },
    cardText: {
      marginBottom: theme.spacing(3),
      fontSize: "1.7rem",
      lineHeight: "1.8rem",
    },
    rightBox: {
      padding: 0,
    },
    rightBoxTop: {
      borderRight: "1px solid",
      borderTop: "1px solid",
      borderBottom: "1px solid",
      paddingTop: theme.spacing(3),
      paddingRight: theme.spacing(4),
      paddingBottom: theme.spacing(3),
    },
    leftBox: {},
    leftBoxTop: {
      padding: theme.spacing(5),
      borderTop: "1px solid",
      borderBottom: "1px solid",
    },
    leftBoxBottom: {
      paddingTop: theme.spacing(2),
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      borderRight: "1px solid",
      borderBottom: "1px solid",
    },
    aboutSubtitle: {
      textAlign: "justify",
      fontWeight: 400,
      lineHeight: "2.3rem",
    },
    media: {
      width: "100%",
    },
  })
);

const Landing: React.FC = () => {
  const classes = useStyles();

  const imageLinks = homeContent.titleSection.imageLinks;

  return (
    <Grid container className={classes.root} xs={12}>
      <Box className={classes.visionTitle}>
        <Typography variant="h1" className={classes.visiontext}>
          FedEx
        </Typography>
        <Typography variant="h1" className={classes.visiontext}>
          Centre for
        </Typography>
        <Typography variant="h1" className={classes.visiontext}>
          Smart Sustainable Supply Chains
        </Typography>
      </Box>
      <Typography variant="h2" className={classes.landingSubtitle}>
        {homeContent.titleSection.subHeading}
      </Typography>
      <Grid container item spacing={2}>
        {imageLinks.map((link, index) => (
          <Grid item key={index} xs={4}>
            <img src={link} alt="image" width={"100%"} />
            <Typography className={classes.button}>Learn More →</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const OurVision: React.FC = () => {
  const classes = useStyles();

  const visionItems = homeContent.visionSection.visionItems;

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.visionTitle}>
        {homeContent.visionSection.heading}
      </Typography>
      <Typography variant="body1" className={classes.visionSubtitle}>
        {homeContent.visionSection.content}
      </Typography>
      <List>
        {visionItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem
              className={
                index != 3 ? `${classes.listItem}` : `${classes.listItem2}`
              }
            >
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h2" className={classes.listText}>
                    {item}
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    src="https://social-hero.s3.ap-south-1.amazonaws.com/Icons/Arrow+1.svg"
                    height="35px"
                  />
                </Grid>
              </Grid>
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

const VisionSecond: React.FC = () => {
  const classes = useStyles();

  const data = homeContent.supplyChainSection.data;

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.landingTitle}>
        {homeContent.supplyChainSection.heading}
      </Typography>
      <Typography variant="h2" className={classes.h2text}>
        {homeContent.supplyChainSection.subHeading}
      </Typography>
      <Grid container item spacing={2}>
        {data.map((item, index) => (
          <Grid item key={index} xs={4}>
            <Typography variant="h2" className={classes.cardText}>
              {item.text}
            </Typography>
            <img src={item.img} alt="image" width={"100%"} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const About: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography variant="h1" className={classes.visionTitle}>
        {homeContent.aboutSection.heading}
      </Typography>
      <Grid item container>
        <Grid
          item
          container
          xs={6}
          justifyContent="space-between"
          className={classes.rightBox}
        >
          <Grid item className={classes.rightBoxTop}>
            <Typography variant="h2" className={classes.aboutSubtitle}>
              {homeContent.aboutSection.subHeading}
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={
                "https://social-hero.s3.ap-south-1.amazonaws.com/Home/about/Rectangle+5.png"
              }
              alt="FedEx"
              className={classes.media}
            />
          </Grid>
        </Grid>
        <Grid item container xs={6} className={classes.leftBox}>
          <Grid item className={classes.leftBoxTop}>
            <Typography className={classes.abouth2text}>
              {homeContent.aboutSection.content[0]}
            </Typography>
            <Typography className={classes.h2text2}>
              {homeContent.aboutSection.content[1]}
            </Typography>
          </Grid>
          <Grid item container>
            <Grid item className={classes.leftBoxBottom} xs={4}>
              <Typography variant="h2" align="center">
                $10M
              </Typography>
              <Typography variant="h6" align="center">
                Grant from FedEx
              </Typography>
            </Grid>
            <Grid item className={classes.leftBoxBottom} xs={4}>
              <Typography variant="h2" align="center">
                8
              </Typography>
              <Typography variant="h6" align="center">
                Faculty Members from IITM
              </Typography>
            </Grid>
            <Grid item className={classes.leftBoxBottom} xs={4}>
              <Typography variant="h2" align="center">
                ∞
              </Typography>
              <Typography variant="h6" align="center">
                Opportunities
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Landing />
      <OurVision />
      <VisionSecond />
      <About />
    </>
  );
};

export default Home;
