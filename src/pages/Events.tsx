import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(7),
      flexDirection: "column",
    },
    titleGreen: {
      fontWeight: 400,
      fontSize: "6.6rem",
      lineHeight: "6.6rem",
      color: "#609966",
      width: "90%",
      display: "inline",
      marginBottom: theme.spacing(5),
    },
    titleBlack: {
      fontWeight: 400,
      fontSize: "6.6rem",
      lineHeight: "6.6rem",
      width: "90%",
      color: "#0B1215",
      display: "inline",
    },
    sideText: {
      fontSize: "1.6rem",
      lineHeight: "1.7rem",
      marginBottom: theme.spacing(2),
      textAlign: "justify",
    },
    subtitle: {
      marginTop: theme.spacing(2),
      fontSize: "3rem",
      lineHeight: "3rem",
      marginBottom: theme.spacing(2),
      fontWeight: 600,
    },
    title2: {
      fontWeight: 400,
      fontSize: "5rem",
      lineHeight: "5rem",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      width: "90%",
    },
    button: {
      padding: 0,
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      marginTop: theme.spacing(2),
      fontWeight: 50,
      cursor: "pointer",
    },
    registerButton: {
      backgroundColor: "#252f22",
      color: "#edf1d6",
      padding: "0.5rem 8rem",
      fontSize: "1.3rem",
      borderRadius: 0,
      textTransform: "uppercase",
      width: "fit-content",
      marginTop: theme.spacing(5),
    },
  })
);

const Events: React.FC = () => {
  const classes = useStyles();

  const imageLinks = [
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+1.png",
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+2.png",
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+3.png",
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+1.png",
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+2.png",
    "https://social-hero.s3.ap-south-1.amazonaws.com/Home/Intro/Rectangle+3.png",
  ];

  return (
    <Grid container className={classes.root}>
      <Typography className={classes.titleBlack}>
        FedEx & IITM Seminar
      </Typography>
      <Typography className={classes.titleGreen}>
        on Smart and sustainable supply Chains and Logistics
      </Typography>
      <Typography className={classes.sideText}>
        The talk on Interesting Logistics Problems in India highlights the
        substantial, yet digitally underdeveloped, logistics market in India,
        valued at around US$ 360 billion. It ephasizes the industry's vast
        inefficiencies and the significant opportunities for innovation through
        technology integration. Drawing from the speaker's experience as the
        co-founder of Mera Transport, an attempt to create an Uber-like platform
        for freight, the talk aims to provide insights into the industry's
        workings, challenges, and potential areas for problem-solving. It
        stresses the importance of understanding the business landscape and
        ongoing changes to tackle realistic issues effectively, underlining the
        crucial need for India to enhance its logistics sector for its
        manufacturing ambitions and internal supply chain optimization.
      </Typography>
      <Grid item container>
        <Grid item xs={8}>
          <Typography className={classes.subtitle}>Speaker</Typography>
          <Typography className={classes.sideText} style={{ width: "80%" }}>
            Mr Brahmayya Akella, Co-founder & Chief Strategy Officer Mera
            Transport Exchange
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.subtitle}>Time</Typography>
          <Typography className={classes.sideText}>5:00 PM</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={8}>
          <Typography className={classes.subtitle}>Date</Typography>
          <Typography className={classes.sideText}>
            17th September 2021
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.subtitle}>Venue</Typography>
          <Typography className={classes.sideText}>TTJ Auditorium</Typography>
        </Grid>
      </Grid>
      <Button className={classes.registerButton}>Register Now</Button>

      <Typography className={classes.title2}>Previous Seminars</Typography>

      <Grid container item spacing={2}>
        {imageLinks.map((link, index) => (
          <Grid item key={index} xs={4}>
            <img src={link} alt="image" width={"100%"} />
            <Typography className={classes.button}>Watch Now →</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Events;
