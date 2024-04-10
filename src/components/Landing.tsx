import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(7),
    },
    title: {
      fontWeight: 400,
      fontSize: "6.6rem",
      lineHeight: "6.7rem",
      marginBottom: theme.spacing(5),
      textAlign: "center",
    },
    subtitle: {
      marginBottom: theme.spacing(5),
      width: "80%",
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      textAlign: "center",
      margin: "auto",
    },
    card: {
      boxShadow: "none",
      backgroundColor: "transparent",
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
      <Typography variant="h1" className={classes.title}>
        Making logistics sustainable with the help of A.I.
      </Typography>
      <Typography variant="h2" className={classes.subtitle}>
        Foremost/Leading industry-academia bridge, producing novel technologies
        which will become global standards to Measure, Track, and Control
        Emissions, Manage Driver/ Loader Effort & take decisions based on
        algorithm & machine learning
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

export default Landing;
