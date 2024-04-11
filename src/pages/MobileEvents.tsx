import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      padding: theme.spacing(1),
    },
    title: {
      fontWeight: 450,
      fontSize: "3rem",
      lineHeight: "3rem",
      textAlign: "left",
      display: "inline",
    },
    titleContainer: {
      marginBottom: theme.spacing(2),
    },
    landingSubtitle: {
      marginBottom: theme.spacing(2),
      fontSize: "0.75rem",
      lineHeight: "0.78rem",
      margin: "auto",
    },
    subtitle: {
      fontSize: "1.1rem",
      lineHeight: "1.1rem",
    },
    button: {
      padding: 0,
      fontSize: "1rem",
      lineHeight: "1rem",
      marginTop: theme.spacing(1),
      borderBottom: "1px solid",
      cursor: "pointer",
    },
    registerButton: {
      backgroundColor: "#252f22",
      color: "#edf1d6",
      padding: "0.5rem 3.5rem",
      fontSize: "1.1rem",
      borderRadius: 0,
      textTransform: "uppercase",
      width: "fit-content",
      marginTop: theme.spacing(2),
    },
  })
);

const title = [
  "FedEx & IITM Seminar ",
  "on Smart and sustainable supply Chains and Logistics",
];

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
      <Grid item className={classes.titleContainer}>
        <Typography className={classes.title} style={{ color: "#0B1215" }}>
          {title[0]}
        </Typography>
        <Typography className={classes.title} style={{ color: "#609966" }}>
          {title[1]}
        </Typography>
      </Grid>
      <Typography className={classes.landingSubtitle}>
        The talk on Interesting Logistics Problems in India highlights the
        substantial, yet digitally underdeveloped, logistics market in India,
        valued at around US$ 360 billion. It emphasizes the industry's vast
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
      <Grid item container spacing={1}>
        <Grid item xs={8}>
          <Typography className={classes.subtitle}>Speaker</Typography>
          <Typography className={classes.landingSubtitle}>
            Mr Brahmayya Akella, Co-founder & Chief Strategy Officer Mera
            Transport Exchange
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.subtitle}>Time</Typography>
          <Typography className={classes.landingSubtitle}>5:00 PM</Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={1}>
        <Grid item xs={8}>
          <Typography className={classes.subtitle}>Date</Typography>
          <Typography className={classes.landingSubtitle}>
            17th September 2021
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.subtitle}>Venue</Typography>
          <Typography className={classes.landingSubtitle}>
            TTJ Auditorium
          </Typography>
        </Grid>
      </Grid>
      <Button className={classes.registerButton}>Register Now</Button>

      <Typography
        variant="h2"
        style={{ marginTop: "20px", marginBottom: "5px" }}
      >
        Previous Seminars
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

export default Events;
