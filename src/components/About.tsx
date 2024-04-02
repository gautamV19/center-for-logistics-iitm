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
      marginBottom: theme.spacing(7),
    },
    title: {
      fontWeight: 400,
      fontSize: "6.6rem",
      lineHeight: "6.6rem",
      marginBottom: theme.spacing(5),
    },
    h2text: {
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
      textAlign: "justify",
      marginBottom: theme.spacing(5),
    },
    subtitle: {
      textAlign: "justify",
      fontWeight: 400,
      lineHeight: "2.3rem",
    },
    media: {
      width: "100%",
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
  })
);

const VisionSecond: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        About Us
      </Typography>
      <Grid item container>
        <Grid item container xs={6} className={classes.rightBox}>
          <Grid item className={classes.rightBoxTop}>
            <Typography variant="h2" className={classes.subtitle}>
              A joint research of FedEx & IIT Madras, India to make a
              environment friendly green supply chain.
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
            <Typography className={classes.h2text}>
              We, at the IIT Madras, are working towards making logistics
              operations more efficient and sustainable by using
              state-of-the-art algorithms and technologies.
            </Typography>
            <Typography className={classes.h2text}>
              Having built route optimizing, vehicle allocation, ride/space
              sharing, orienteering algorithms for the last 4 years, we have
              integrated all into a SaaS software service. We look to improve
              the efficiency of our algorithms and add a lot more features in
              the coming month.
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
                $10M
              </Typography>
              <Typography variant="h6" align="center">
                Grant from FedEx
              </Typography>
            </Grid>
            <Grid item className={classes.leftBoxBottom} xs={4}>
              <Typography variant="h2" align="center">
                $10M
              </Typography>
              <Typography variant="h6" align="center">
                Grant from FedEx
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VisionSecond;
