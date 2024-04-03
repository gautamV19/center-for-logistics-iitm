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
      width: "90%",
    },
    sideText: {
      fontSize: "1.6rem",
      lineHeight: "1.7rem",
      marginBottom: theme.spacing(2),
      alignSelf: "end",
      textAlign: "end",
      width: "35%",
    },
    sideText2: {
      fontSize: "1.6rem",
      lineHeight: "1.7rem",
      width: "80%",
    },
    subtitle: {
      marginTop: theme.spacing(2),
      fontSize: "3rem",
      lineHeight: "3rem",
      marginBottom: theme.spacing(2),
      fontWeight: 600,
    },
    rightBox: {
      borderRight: "1px solid",
    },
    leftBox: {
      paddingLeft: theme.spacing(4),
      flexDirection: "column",
      justifyContent: "space-between",
    },
    registerButton: {
      backgroundColor: "#252f22",
      color: "#edf1d6",
      padding: "0.5rem 8rem",
      fontSize: "1.3rem",
      borderRadius: 0,
      textTransform: "uppercase",
      width: "fit-content",
      "&:hover": { backgroundColor: "#252f22", color: "#edf1d6" },
    },
  })
);

const Internship: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        Smart and sustainable supply Chains and Logistics
      </Typography>
      <Typography variant="h2" className={classes.sideText}>
        We are seeking for a talented & motivated applicant for this summer
        internship
      </Typography>
      <Grid item container>
        <Grid item xs={7} className={classes.rightBox}>
          <Typography className={classes.subtitle}>About</Typography>
          <Typography className={classes.sideText2}>
            There are many openings in domains as Logistics Infrastructure,
            Algorithms & ML for Sustainability, Supply Chain Sustainability and
            Optimization , Analytics & Modelling, Logistics worker wellness.
            These are techincal roles and require good programming and
            analytical capabilities.
          </Typography>
          <Typography className={classes.subtitle}>Eligibility</Typography>
          <Typography className={classes.sideText2}>
            - Students graduating in 2025 or later
          </Typography>
          <Typography className={classes.sideText2}>
            - Good programming & analytical capabilities
          </Typography>
          <Typography className={classes.subtitle}>Responsibilities</Typography>
          <Typography className={classes.sideText2}>
            - Work on a research project in the logistics domain
          </Typography>
          <Typography className={classes.sideText2}>
            - Develop a proof of concept for the project
          </Typography>
        </Grid>
        <Grid item container xs={5} className={classes.leftBox}>
          <Grid item>
            <Typography className={classes.subtitle}>Benefits</Typography>
            <Typography className={classes.sideText2}>
              - Certificate of completion
            </Typography>
            <Typography className={classes.sideText2}>
              - Letter of recommendation
            </Typography>
            <Typography className={classes.sideText2}>
              - Opportunity to work with Top Researchers and Industry Experts
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.registerButton}
              onClick={() => {
                window.open("https://forms.gle/9C31LhHXjNG8513H8", "_blank");
              }}
            >
              Apply Now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Internship;
