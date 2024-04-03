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
    title: {
      fontWeight: 400,
      fontSize: "6.6rem",
      lineHeight: "6.6rem",
      marginBottom: theme.spacing(5),
    },
    cardText: {
      marginBottom: theme.spacing(3),
      fontSize: "1.7rem",
      lineHeight: "1.8rem",
    },
    media: {
      width: "100%",
      marginBottom: theme.spacing(5),
    },
    h2text: {
      fontWeight: 400,
      width: "60%",
      marginBottom: theme.spacing(2),
      alignSelf: "end",
      textAlign: "justify",
    },
    button: {
      backgroundColor: "#252f22",
      color: "#edf1d6",
      padding: "0.5rem 8rem",
      fontSize: "1.3rem",
      borderRadius: 0,
      textTransform: "uppercase",
      alignSelf: "end",
      marginBottom: theme.spacing(5),
    },
  })
);

const Vision: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Vision
      </Typography>
      <Typography variant="h2" className={classes.h2text}>
        To build a center which fosters innovation and enables environmental and
        social sustainability in logistics and supply chains with cutting-edge
        digital transformation technologies.
      </Typography>
      <Button className={classes.button}>See Projects</Button>
      <img
        src="https://social-hero.s3.ap-south-1.amazonaws.com/vision/Rectangle+12.png"
        alt="vision"
        className={classes.media}
      />
      <Typography variant="h1" className={classes.title}>
        Vision for the Centre
      </Typography>
    </Grid>
  );
};

export default Vision;
