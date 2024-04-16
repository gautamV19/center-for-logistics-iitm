import React from "react";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid, ListItem, List } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(1),
    },
    landingTitle: {
      fontWeight: 450,
      fontSize: "3rem",
      lineHeight: "3rem",
      marginBottom: theme.spacing(2),
      textAlign: "center",
    },
    visionTitle: {
      fontWeight: 500,
      fontSize: "3rem",
      lineHeight: "3rem",
      marginBottom: theme.spacing(2),
      textAlign: "left",
    },
    landingSubtitle: {
      marginBottom: theme.spacing(2),
      fontSize: "0.58rem",
      textAlign: "center",
      margin: "auto",
    },
    visionSubtitle: {
      marginBottom: theme.spacing(2),
      width: "95%",
      fontSize: "0.83rem",
      lineHeight: "0.83rem",
      textAlign: "justify",
    },
    button: {
      padding: 0,
      fontSize: "1rem",
      lineHeight: "1rem",
      marginTop: theme.spacing(1),
      borderBottom: "1px solid",
      cursor: "pointer",
    },
    listItem: {
      borderTop: "1px solid",
      padding: theme.spacing(1, 0),
    },
    listItem2: {
      borderTop: "1px solid",
      borderBottom: "1px solid",
      padding: theme.spacing(1, 0),
    },
    listText: {
      fontSize: "1.1rem",
      lineHeight: "1.1rem",
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
      width: "95%",
      fontSize: "0.83rem",
      lineHeight: "0.83rem",
      textAlign: "justify",
      marginBottom: theme.spacing(1),
      margin: "auto",
    },
    leftBoxTop: {
      padding: theme.spacing(3),
      borderBottom: "1px solid",
    },
    leftBoxBottom: {
      paddingTop: theme.spacing(2),
      borderRight: "1px solid",
      borderBottom: "1px solid",
    },
    leftBoxBottom2: {
      paddingTop: theme.spacing(2),
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

  const imageLinks = [
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+1.png",
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+2.png",
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+3.png",
  ];

  return (
    <Grid container className={classes.root} xs={12}>
      <Typography variant="h1" className={classes.landingTitle}>
        FedEx Centre for Smart Sustainable Supply Chains
      </Typography>
      <Typography variant="h2" className={classes.landingSubtitle}>
        Foremost/Leading industry-academia bridge, producing novel technologies
        which will become global standards to Measure, Track, and Control
        Emissions, Manage Driver/ Loader Effort & take decisions based on
        algorithm & machine learning
      </Typography>
      <Grid container item spacing={2}>
        {imageLinks.map((link, index) => (
          <Grid item key={index} xs={12}>
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

  const visionItems = [
    "Net Zero Carbon Footprint",
    "Digital Transformation in Multi-modal Logistics",
    "Industry-specific Applications",
    "Healthier Drivers and Warehouse Workers",
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.visionTitle}>
        Our Vision
      </Typography>
      <Typography variant="body1" className={classes.visionSubtitle}>
        Our vision is to build a center which fosters innovation and enables
        environmental and social sustainability in logistics and supply chains
        with cutting-edge digital transformation technologies.
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
                <Grid item xs={8}>
                  <Typography className={classes.listText}>{item}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <img
                    src="https://social-hero.s3.ap-south-1.amazonaws.com/Icons/Arrow+1.svg"
                    height="20px"
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

  const data = [
    {
      img: "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+1.png",
      text: "Measure, Track, and Control Emissions way to net Zero from the logistics sector—environmental sustainability",
    },
    {
      img: "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+2.png",
      text: "Measure, Track & Manage Driver/ Loader Effort towards happiness and safety and reliability—social sustainability",
    },
    {
      img: "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+3.png",
      text: "Decision Making for Sustainability: Algorithmic and ML based Digital transformation for sustainable logistics",
    },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h1" className={classes.visionTitle}>
        Smart and Sustainable supply chain
      </Typography>
      <Typography variant="h2" className={classes.listText}>
        Foremost/Leading industry-academia bridge, producing novel technologies
        which will become global standards to
      </Typography>
      <Grid container item spacing={2} style={{ marginTop: "10px" }}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12}>
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
        About Us
      </Typography>
      <Typography
        variant="h2"
        className={classes.listText}
        style={{ marginBottom: "10px" }}
      >
        A joint research of FedEx & IIT Madras, India to make a environment
        friendly green supply chain.
      </Typography>
      <img
        src={
          "https://social-hero.s3.ap-south-1.amazonaws.com/Home/about/Rectangle+5.png"
        }
        alt="FedEx"
        className={classes.media}
      />
      <Grid item className={classes.leftBoxTop}>
        <Typography className={classes.cardText}>
          We, at the IIT Madras, are working towards making logistics operations
          more efficient and sustainable by using state-of-the-art algorithms
          and technologies.
        </Typography>
        <Typography className={classes.cardText}>
          Having built route optimizing, vehicle allocation, ride/space sharing,
          orienteering algorithms for the last 4 years, we have integrated all
          into a SaaS software service. We look to improve the efficiency of our
          algorithms and add a lot more features in the coming month.
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item className={classes.leftBoxBottom} xs={4}>
          <Typography variant="h4" align="center">
            $10M
          </Typography>
          <Typography variant="subtitle2" align="center">
            Grant from FedEx
          </Typography>
        </Grid>
        <Grid item className={classes.leftBoxBottom} xs={4}>
          <Typography variant="h4" align="center">
            8
          </Typography>
          <Typography variant="subtitle2" align="center">
            Faculty Members from IITM
          </Typography>
        </Grid>
        <Grid item className={classes.leftBoxBottom2} xs={4}>
          <Typography variant="h4" align="center">
            ∞
          </Typography>
          <Typography variant="subtitle2" align="center">
            Opportunities
          </Typography>
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
