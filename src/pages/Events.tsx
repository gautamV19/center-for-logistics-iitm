import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import { eventsData } from "../assets/textData/events";
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
    },
    titleBlack: {
      fontWeight: 400,
      fontSize: "6.6rem",
      lineHeight: "6.6rem",
      width: "90%",
      color: "#0B1215",
      display: "inline",
    },
    titleContainer: {
      marginBottom: theme.spacing(5),
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

  const imageLinks = eventsData.previousSeminars;
  const title = eventsData.title;
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.titleContainer}>
        <Typography className={classes.titleBlack}>{title[0]}</Typography>
        <Typography className={classes.titleGreen}>{title[1]}</Typography>
      </Grid>
      <Typography className={classes.sideText}>
        {eventsData.description}
      </Typography>
      <Grid item container>
        <Grid item xs={8}>
          <Typography className={classes.subtitle}>Speaker</Typography>
          <Typography className={classes.sideText} style={{ width: "80%" }}>
            {eventsData.speaker}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.subtitle}>Time</Typography>
          <Typography className={classes.sideText}>
            {eventsData.time}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={8}>
          <Typography className={classes.subtitle}>Date</Typography>
          <Typography className={classes.sideText}>
            {eventsData.date}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography className={classes.subtitle}>Venue</Typography>
          <Typography className={classes.sideText}>
            {eventsData.venue}
          </Typography>
        </Grid>
      </Grid>
      <Button className={classes.registerButton}>Register Now</Button>

      <Typography className={classes.title2}>Previous Seminars</Typography>

      <Grid container item spacing={2}>
        {imageLinks.map((link, index) => (
          <Grid item key={index} xs={4}>
            <img src={link.imagesrc} alt="image" width={"100%"} />
            <Typography className={classes.button}>Watch Now →</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Events;
